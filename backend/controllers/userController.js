import pkg from "colors";
const { reset } = pkg;
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateWebToken from "../utils/generateToken.js";
const authUsers = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const users = await User.findOne({ email });
  // console.log(users);

  if (users && (await users.matchPassword(password))) {
    res.json({
      _id: users._id,
      name: users.name,
      email: users.email,
      isAdmin: users.isAdmin,
      token: generateWebToken(users._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});

const ragisterUsers = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({ name, email, password });

  if (user) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateWebToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user Data");
  }
});

const getUserProfiles = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("InValid User Profile");
  }
});

const updateUserProfiles = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    (user.name = req.body.name || user.name),
      (user.email = req.body.email || user.email);
    if (req.body.password) {
      user.password = req.body.password;
    }

    const updateUser = await user.save();

    res.json({
      _id: updateUser._id,
      name: updateUser.name,
      email: updateUser.email,
      isAdmin: updateUser.isAdmin,
      token: generateWebToken(updateUser._id),
    });
  } else {
    res.status(404);
    throw new Error("InValid User Profile");
  }
});


const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({})
  res.json(users)
})

export { authUsers, getUserProfiles, ragisterUsers, updateUserProfiles ,getUsers };
