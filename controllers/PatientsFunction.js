const patientsDetails = require("../models/patients");
//get method
const getPatients = async (req, res) => {
    try {
        const patients = await patientsDetails.find({});

        if (patients) {
            res.json(patients)
        }
    } catch (error) {
        console.log(error)
    }

};

const getPatient= async (req,res)=>{
    try {
        const patients = await patientsDetails.findById(req.params.id);

        if(patients){
            res.json(patients)
        }
    } catch (error) {
        console.log(error)
    }
}
//post method
const createPatients =async(req,res)=>{
    try {
        const patients =new patientsDetails({
            serialNo:req.body.serialNo,
            date:req.body.date,
            name: req.body.name,
            age: req.body.age,
            gender:req.body.gender,
            mobile: req.body.mobile,
            doctorName:req.body.doctorName,
            amount:req.body.amount,
            status:req.body.status,
        })
        const createData=await patients.save();

        if(createData){
            res.send(createData)
        }
    } catch (error) {
        console.log(error)
    }
}

const updatePatients =async(req,res)=>{
    try {
        const patients = await patientsDetails.findByIdAndUpdate(req.params.id,req.body)

        if(patients){
            res.send("updated sucessfulluy")
        }
    } catch (error) {
        console.log(error)
    }
}

const deletePatients =async(req,res)=>{
    try {
        const patients =await patientsDetails.findByIdAndDelete(req.params.id)

        if(patients){
            res.send("deleted sucessfully")
        }
    } catch (error) {
        console.log(error)
    }
}
module.exports={getPatients,createPatients,updatePatients,deletePatients,getPatient}