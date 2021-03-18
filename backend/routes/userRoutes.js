import express from 'express'
import authUsers from '../controllers/userController.js';
const router = express.Router()


router.post('/login',authUsers)



export default router