import express from 'express'
import {authUsers , getUserProfiles} from '../controllers/userController.js';
const router = express.Router()
import protect from '../middleware//authMiddleware.js';

router.post('/login',authUsers)
router.route('/profile').get(protect,getUserProfiles);


export default router