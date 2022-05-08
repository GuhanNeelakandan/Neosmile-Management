const patientsDetails = require("../models/patients");
const User = require("../models/User");
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
//get by id
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
//put by id
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
//delete by id
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

const getUser =async(req,res)=>{
    try {
        const user =await User.find({});
        if(user){
            res.json(user)
        }
    } catch (error) {
        console.log(error)
    }
}

const deleteUser =async(req,res)=>{
    try {
        const user =await User.findByIdAndDelete(req.params.id)

        if(user){
            res.send("deleted sucessfully")
        }
    } catch (error) {
        console.log(error)
    }
}


module.exports={getPatients,createPatients,updatePatients,deletePatients,getPatient,getUser,deleteUser}