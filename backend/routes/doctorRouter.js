import express from 'express';
const doctorRouter = express.Router();
import {appointmentsDoctor, doctorList, loginDoctor,appointmentCompleted,appointmentCancel,doctorDashboard} from "../controllers/doctorController.js";
import authDoctor from "../middlewares/authDoctor.js";

doctorRouter.get('/list',doctorList)
doctorRouter.post('/login',loginDoctor)
doctorRouter.get('/appointments',authDoctor,appointmentsDoctor)
doctorRouter.post('/appointment-complete',authDoctor,appointmentCompleted)
doctorRouter.post('/appointment-cancel',authDoctor,appointmentCancel)
doctorRouter.get('/dashboard',authDoctor,doctorDashboard)



export default doctorRouter;