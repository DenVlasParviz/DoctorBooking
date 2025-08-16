import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    image: {type: String, default:""},
      address: {type: Object, default:{line1:'',line2:''}},
    gender:{type:String, default:"not selected"},
    dob:{type:String, default:"not selected"},
    phone:{type:String, default:"000000000"}

}, {minimize: false})

const userModel = mongoose.models.user || mongoose.model('user', userSchema);
export default userModel;
