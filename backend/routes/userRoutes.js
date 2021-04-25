import express from "express";
import {
  authUsers,
  getUserProfiles,
  ragisterUsers,
  updateUserProfiles,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
} from "../controllers/userController.js";
const router = express.Router();
import { protect, admin } from "../middleware//authMiddleware.js";

router.route('/').post(ragisterUsers).get(protect, admin, getUsers)
router.post("/login", authUsers);
router
  .route("/profile")
  .get(protect, getUserProfiles)
  .put(protect, updateUserProfiles);

  router.route('/:id').delete(protect, admin, deleteUser)
  router
  .route('/:id')
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser)
export default router;
