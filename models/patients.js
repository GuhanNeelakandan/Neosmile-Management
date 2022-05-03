const mongoose =require("mongoose")


const patientSchema =mongoose.Schema({
    serialNo:{type:Number},
    name:{type:String},
    age:{type:Number},
    gender:{type:String},
    mobile:{type:Number},
    doctorName:{type:String},
    amount:{type:Number},
    status:{type:String}

})

const patientsDetails = mongoose.model("patients",patientSchema);

module.exports=patientsDetails;