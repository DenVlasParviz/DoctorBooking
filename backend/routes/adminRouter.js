    import express from 'express'
    import { addDoctor,allDoctors, logAdmin,appointmentsAdmin,appointmentCancel,adminDashboard} from '../controllers/adminController.js';
    import upload from '../middlewares/multer.js'
    import authAdmin from "../middlewares/authAdmins.js";
    import {changeAvailability} from "../controllers/doctorController.js";

    console.log('upload:', upload);
    console.log('typeof upload.single:', typeof (upload && upload.single));
    console.log('AddDoctor:', addDoctor);
    console.log('typeof AddDoctor:', typeof addDoctor);
    const adminRouter = express.Router()

    adminRouter.post('/add-doctor',authAdmin,upload.single('image'),addDoctor)
    adminRouter.post('/login',upload.none(), logAdmin)
    adminRouter.post('/all-doctors',authAdmin,allDoctors)
    adminRouter.post('/change-availability',authAdmin,changeAvailability)
    adminRouter.get('/appointments',authAdmin,appointmentsAdmin)
    adminRouter.post('/cancel-appointment',authAdmin,appointmentCancel)
    adminRouter.get('/dashboard',authAdmin,adminDashboard)



    export default adminRouter