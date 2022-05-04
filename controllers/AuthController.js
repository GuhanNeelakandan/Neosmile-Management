const User =require('../models/User')
const bcrypt =require('bcryptjs')
const jwt = require('jsonwebtoken')


const register =(req,res,next)=>{
    bcrypt.hash(req.body.password,10,function(err, hashedpass){
        if(err){
            res.json({
                error:err
            })
        }
        let user =new User({
            name:req.body.name,
            email:req.body.email,
            password:hashedpass
        })
        user.save().then(user=>{
            res.json({
                message:"user Added successfully"
            })
        }).catch(error=>{
            res.json({
                message:"an error ocuured"
            })
        })
    })
}

const login = (req,res,next)=>{
    var username =req.body.username
    var password =req.body.password

    User.findOne({email:username}).then(user=>{
        if(user){
            bcrypt.compare(password,user.password,function(err,result){
                if(err){
                    res.json({
                        error:err
                    })
                }if(result){
                    let token =jwt.sign({name:username},'verySecretValues',{expiresIn:'1hr'})
                    res.json({
                        message:"login sucessfull",
                        token
                    })
                }else{
                    res.json({
                        message:"does not match"
                    })
                }
            })
        }else{
            res.json({
                message:"no user found"
            })
        }
    })
}
module.exports={register,login}