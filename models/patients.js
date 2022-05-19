const mongoose =require("mongoose")


const patientSchema =mongoose.Schema({
    serialNo:{type:Number},
    date:{type:Date},
    name:{type:String},
    age:{type:Number},
    gender:{type:String},
    mobile:{type:Number},
    doctorName:{type:String},
    amount:{type:Number},
    status:{type:String},
    description:{type:String},
    createdby:{type:mongoose.Schema.Types.ObjectId}

})

const patientsDetails = mongoose.model("patients",patientSchema);

module.exports=patientsDetails;