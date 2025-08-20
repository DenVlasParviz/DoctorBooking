import jwt from "jsonwebtoken";
import AppointmentModel from "../models/appointmentModel.js";


//User auth middleware

const authDoctor = async(req,res,next) =>{
    try{
        const {dtoken} = req.headers



        if(!dtoken){
            return res.json({success:false})
        }
        const token_decode = jwt.verify(dtoken,process.env.JWT_SECRET)


        if (!req.body) {
            req.body = {};
        }

        req.body.docId = token_decode.id

        next()
    }catch (e) {
        console.log(e)
    }
}
export default authDoctor;