const mongoose =require("mongoose")

const appointmentSchema =mongoose.Schema({
    name:{type:String},
    email:{type:String},
    date:{type:Date},
    mobile:{type:Number},
    description:{type:String}
})

const Appointment = mongoose.model('Appointment',appointmentSchema)
module.exports=Appointment;