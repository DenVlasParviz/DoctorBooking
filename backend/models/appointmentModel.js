import mongoose from 'mongoose'
const appointmentSchema = new mongoose.Schema({

    userId:{type:String,required:[true,'required']},
    docId:{type:String,required:[true,'required']},
    slotDate:{type:String,required:[true,'required']},
    slotTime:{type:String,required:[true,'required']},
    userData:{type:Object,required:[true,'required']},
    docData:{type:Object,required:[true,'required']},
    amount:{type:Number,required:[true,'required']},
    date:{type:Number,required:[true,'required']},
    cancelled:{type:Boolean,default: false},
    payment:{type:Boolean,default: false},
    isCompleted:{type:Boolean,default: false},
})

const appointmentModel = mongoose.models.appointment || mongoose.model('appointment', appointmentSchema);
export default appointmentModel;