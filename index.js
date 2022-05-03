const express = require("express");
const cors =require("cors");
const mongoose=require("mongoose");
const router = require("./routes/routes");

const PORT = process.env.PORT || 8080

const app=express();

app.use(express.json())


app.use(cors())



app.use('/',router)




const URI="mongodb+srv://Guhan:guhan@cluster0.gubnl.mongodb.net/crud?retryWrites=true&w=majority"
mongoose.connect(URI).then(()=>{
    app.listen(PORT,()=>{
        console.log(`server is running on ${PORT}`)
    })
}).catch((error)=>{
    console.log(error)
})