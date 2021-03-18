import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js';

const authUsers = asyncHandler(async(req, res)=>{
    
    const {email , password} = req.body

    // console.log(email);
    // console.log(password);
    const users = await User.findOne({email})
    console.log(users);
    // console.log(password);

    if(users && (await users.matchPassword(password))){
        console.log(users);
        
        res.json({
            _id: users._id,
            name: users.name,
            email: users.email,
            isAdmin: users.isAdmin,
            token: false,
        })

    }else{
        res.status(401)
        throw new Error("Invalid Email or Password")

    }


    
})


export default authUsers