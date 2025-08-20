//Api for adding doctors
import validator from 'validator'
import bcrypt from 'bcrypt'
import doctorModel from "../models/doctorModel.js";
import {v2 as cloudinary} from 'cloudinary'
import DoctorModel from "../models/doctorModel.js";
import jwt from 'jsonwebtoken'
import appointmentModel from "../models/appointmentModel.js";
import UserModel from "../models/userModel.js";
export const addDoctor = async(req,res)=>{
    try{
        const{name,email,password,speciality,degree,experience,about,fees,address} = req.body
const imageFile = req.file


    //checking for all data to add doctor
        if(!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address){
        return res.status(400).json({msg:"Please fill all the fields"})
        }

        //validation

        if (!validator.isEmail(email)) {
            return res.json({ msg: "Please enter a valid email" });
        }


        //validating strong password

        if(password.length<8){
            return res.json({msg:"Password must be at least 8 characters"})

       }
//hashing doctors password
const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        //upload image to cloudinary
const imageUpload = await cloudinary.uploader.upload(imageFile.path,{resource_type:"auto",folder:"doctors"})
        const imageUrl = imageUpload.secure_url

        const doctorData ={
            name,
            email,
            image:imageUrl,
            password:hashedPassword,
            speciality,
            degree,
            experience,
            about,
            fees,
            address:JSON.parse(address),
            date:Date.now()
        }

        console.log("Saving doctor:", doctorData);
        const newDoctor = new DoctorModel(doctorData);
        await newDoctor.save();
        console.log("Doctor saved");
        res.status(201).json({ success: true, message: "Doctor added successfully" });
    }catch(err){ console.error("Error in addDoctor:", err);
        res.status(500).json({ msg: "Internal server error", error: err.message });}

}
// API for Admin login

export const logAdmin= async(req,res)=>{
    try{
        console.log('login content-type:', req.headers['content-type']);
        console.log('req.body raw:', req.body);
const {email,password}=req.body
        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
            const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '6h' });
            return res.json({ success: true, message: 'Logged in successfully', token });
        }else{
            res.json({success:false, message:"invalid credentials"})
        }
    }catch (e) {
        console.log(e)
    }
}
//API to get All doctor's info
export const allDoctors = async(req,res)=>{
    try{
        const doctors = await doctorModel.find({}).select('-password')
        res.json({success:true ,doctors})
    }catch(err){
        res.json({success:false, message:err.message})
    }



}
// API to get all appointments list

export  const appointmentsAdmin = async(req,res)=>{
    try{
        const appointments = await appointmentModel.find({})
        res.json({success:true,appointments})
    }catch(err){
        console.log(err)
    }
}

// API to cancel an appointment
export const appointmentCancel = async (req, res) => {
    try {
        const {appointmentId} = req.body
        const appointmentData = await appointmentModel.findById(appointmentId)

        //verify appointment user

        await appointmentModel.findByIdAndUpdate(appointmentId, {cancelled:true})

        //releasing doctor slot

        const {docId,slotDate,slotTime} = appointmentData
        const docData = await doctorModel.findById(docId)

        let slots_booked = docData.slots_booked
        slots_booked[slotDate] = slots_booked[slotDate].filter(e=>e !== slotTime)
        await doctorModel.findByIdAndUpdate(docId, {slots_booked})
        res.json({success:true,message:"appointment cancelled"})

    } catch (e) {
        res.json({success: false, message: e.message})
        return
    }
}


// API to get dashboard data for admin panel
export const adminDashboard = async(req,res)=>{
    try{
const doctors = await doctorModel.find({})
        const users = await UserModel.find({})
        const appointments = await appointmentModel.find({})

        const dashData= {
    doctors:doctors.length,
            appointments:appointments.length,
            patients:users.length,
            latestAppointments: appointments.reverse().slice(0,5)
        }
        res.json({success:true,dashData})

    }catch (e) {
        console.log(e)
    }
}
