import express from 'express'
import {authUsers , getUserProfiles ,ragisterUsers, updateUserProfiles} from '../controllers/userController.js';
const router = express.Router()
import protect from '../middleware//authMiddleware.js';

router.post('/',ragisterUsers)
router.post('/login',authUsers)
router.route('/profile').get(protect,getUserProfiles).put(protect,updateUserProfiles);


export default router