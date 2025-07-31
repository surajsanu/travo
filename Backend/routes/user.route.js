import express from 'express';
import { body } from 'express-validator';
import { registerUser, loginUser, getUserProfile, logoutUser } from '../controllers/user.controller.js';
import { authUser } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post(
  '/register',
  [
    body('fullName.firstName').isLength({ min: 2, max: 20 }).withMessage('First name is required with minimum 2 characters and maximum 20 characters'),
    body('email').isEmail().withMessage('Please enter a valid email address'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
  ],
  registerUser
);

router.post('/login', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
],
   loginUser
);

router.get('/profile', authUser, getUserProfile)

router.get('/logout', authUser, logoutUser)

export default router;