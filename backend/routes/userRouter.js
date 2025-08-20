import express from 'express';
import {loginUser, registerUser,getProfile,updateProfile,bookAppointment,listAppointment,cancelAppointment,paymentRazorpay,verifyRazorPay} from '../controllers/userController.js'
const userRouter = express.Router();
import upload from '../middlewares/multer.js'
import AuthUser from "../middlewares/authUser.js";

userRouter.post('/register', registerUser);

userRouter.post('/login', loginUser);
userRouter.get('/get-profile',AuthUser, getProfile);
userRouter.post('/update-profile',upload.single('image'),AuthUser,updateProfile);
userRouter.post('/book-appointment',AuthUser,bookAppointment);
userRouter.get('/appointments',AuthUser,listAppointment);
userRouter.post('/cancel-appointment',AuthUser,cancelAppointment);
userRouter.post('/payment-razorpay',AuthUser,paymentRazorpay);
userRouter.post('/verifyRazorpay',AuthUser,verifyRazorPay);



export default userRouter;