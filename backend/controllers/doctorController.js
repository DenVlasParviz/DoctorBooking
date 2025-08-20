import doctorModel from "../models/doctorModel.js";
import {response} from "express";
import doc from "multer/lib/multer-error.js";
import DoctorModel from "../models/doctorModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import err from "multer/lib/multer-error.js";
import AppointmentModel from "../models/appointmentModel.js";
import appointmentModel from "../models/appointmentModel.js";
import req from "express/lib/request.js";

export const changeAvailability = async(req,res)=>{
    try{
        const {docId} = req.body
        const docData= await doctorModel.findById(docId)
        await doctorModel.findByIdAndUpdate(docId,{available: !docData.available})
        res.json({success:true , message:"Gotovo"})
    }catch(err){
        console.log(err)
        res.json({success:false, message:err.message})
    }
}
export const doctorList = async(req,res)=>{
    try {
const doctors = await DoctorModel.find({}).select(['-password', '-email'])
        res.json({success:true , doctors})
    } catch(err){
        console.log(err)
        res.json({success:false, message:err.message})
    }
}

//api for doctor login

export const loginDoctor = async(req,res)=>{
    try{
        const {email,password} = req.body
        const doctor = await doctorModel.findOne({email})
        if(!doctor){
            return res.json({success:false, message:"No such doctor"})
        }
        const isMatch = await bcrypt.compare(password,doctor.password)
        if(isMatch){
            const token = jwt.sign({id: doctor._id}, process.env.JWT_SECRET)

            res.json({success:true,token})
        }else{

            res.json({success:false, message:err.message})
        }
    }catch (e) {
        console.log(e)
        res.json({success:false, message:e.message})

    }
}

export const appointmentsDoctor = async(req,res)=>{

    try{
        const {docId} = req.body
        const appointments= await AppointmentModel.find({docId})

        res.json({success:true,appointments})
    }catch (e) {
        console.log(e)

    }
}

// Api to mark appointment completed for doctor panel

export const appointmentCompleted =async(req,res)=>{

    try {
const {docId,appointmentId} = req.body
        const appointmentData = await appointmentModel.findById(appointmentId)
        if(appointmentData && appointmentData.docId === docId){

            await appointmentModel.findByIdAndUpdate(appointmentId,{isCompleted:true})
            res.json({success:true,message:'Appointment completed'})
        }else{
            res.json({success:false, message:err.message})
        }
    }catch(err){

        console.log(err)
    }
}
//Api to cancel an appointment
export const appointmentCancel=async(req,res)=>{

    try {
        const {docId,appointmentId} = req.body
        const appointmentData = await appointmentModel.findById(appointmentId)
        if(appointmentData && appointmentData.docId === docId){

            await appointmentModel.findByIdAndUpdate(appointmentId,{cancelled:true})
            res.json({success:true,message:'Appointment Cancelled'})
        }else{
            res.json({success:false, message:err.message})
        }
    }catch(err){

        console.log(err)
    }
}

// API to get dashboard data for doctor panel

export const doctorDashboard = async(req,res)=>{
    try{
        const {docId} = req.body
        const appointments = await appointmentModel.find({docId})

        let earnings = 0
        let patients =[]
        appointments.map((item,)=>{
if(item.isCompleted || item.paymemt){
    earnings +=item.amount
}

            appointments.map((item)=>{
                if(!patients.includes(item.userId)){
                    patients.push(item.userId)
                }
            })

        })
        const dashData={
            earnings,
            appointments:appointments.length,
            patients:patients.length,
            latestAppointments:appointments.reverse().slice(0,5)
        }
        res.json({success:true,dashData})

    }catch (e) {
        console.log(e)
    }
}