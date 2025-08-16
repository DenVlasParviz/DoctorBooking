    import express from 'express'
    import { addDoctor, logAdmin } from '../controllers/adminController.js';
    import upload from '../middlewares/multer.js'
    import authAdmin from "../middlewares/authAdmins.js";

    console.log('upload:', upload);
    console.log('typeof upload.single:', typeof (upload && upload.single));
    console.log('AddDoctor:', addDoctor);
    console.log('typeof AddDoctor:', typeof addDoctor);
    const adminRouter = express.Router()

    adminRouter.post('/add-doctor',authAdmin,upload.single('image'),addDoctor)
    adminRouter.post('/login',upload.none(), logAdmin)

    export default adminRouter