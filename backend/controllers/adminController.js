//Api for adding doctors
import validator from 'validator'
import bcrypt from 'bcrypt'
import doctorModel from "../models/doctorModel.js";
import {v2 as cloudinary} from 'cloudinary'
import DoctorModel from "../models/doctorModel.js";
import jwt from 'jsonwebtoken'
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
        res.json({msg:"Doctor added successfully"})
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
