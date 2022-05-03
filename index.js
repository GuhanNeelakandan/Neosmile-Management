const express = require("express");
const cors =require("cors");
const mongoose=require("mongoose");
const router = require("./routes/routes");



const app=express();

app.use(express.json())


app.use(cors())


const port =8080;


app.use('/',router)




const URI="mongodb+srv://Guhan:guhan@cluster0.gubnl.mongodb.net/crud?retryWrites=true&w=majority"
mongoose.connect(URI).then(()=>{
    app.listen(port,()=>{
        console.log(`server is running on ${port}`)
    })
}).catch((error)=>{
    console.log(error)
})