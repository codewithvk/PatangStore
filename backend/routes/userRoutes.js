import express from "express";
import {
  authUsers,
  getUserProfiles,
  ragisterUsers,
  updateUserProfiles,
  getUsers,
} from "../controllers/userController.js";
const router = express.Router();
import { protect, admin } from "../middleware//authMiddleware.js";

router.route('/').post(ragisterUsers).get(protect, admin, getUsers)
router.post("/login", authUsers);
router
  .route("/profile")
  .get(protect, getUserProfiles)
  .put(protect, updateUserProfiles);

export default router;
