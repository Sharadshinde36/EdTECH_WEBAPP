const jwt=require('jsonwebtoken');
require('dotenv').config();
const User=require('../models/user')
//uath
exports.auth=async(req,res,next)=>
{
    try{

        const token=req.cookies.token||req.body.token||req.header("Autorisastion").replace("Bearer","");
        if(!token)
        {
            return res.status(401).json({
                sucess:false,
                message:'Token is missing'
            })
        }
        try{
        const decode= await jwt.verify(token,process.env.JWT_SECRET);
        console.log(decode);
        req.user=decode;
        }catch(err)
        {
            return res.status(401).json({
                success:false,
                message:'token is invalid'
            })
        }
        next();
       

    }catch(err)
    {
        console.log(err);
        return res.status(401).json({
            success:false,
            message:'token is invalid'
        })

    }
}

exports.isStudent=async(req,res,next)=>
{
    try{
    const {role}=req.user;
    if(role!=="Student")
    {
        return res.status(401).json({
            sucess:false,
            message:'you are not student '
        })
    }
    next();
}catch(err)
{
    console.log(err);
    return res.status(401).json({
        sucess:false,
        message:'user role cannot be varified,please try again'
    })
}
}
exports.isInstructor=async(req,res,next)=>
{
    try{
    const {role}=req.user;
    if(role!=="Instructor")
    {
        return res.status(401).json({
            sucess:false,
            message:'you are not Instructor '
        })
    }
    next();
}catch(err)
{
    console.log(err);
    return res.status(401).json({
        sucess:false,
        message:'user role cannot be varified,please try again'
    })
}
}
exports.isAdmin=async(req,res,next)=>
{
    try{
    const {role}=req.user;
    if(role!=="Admin")
    {
        return res.status(401).json({
            sucess:false,
            message:'you are not Admin '
        })
    }
    next();
}catch(err)
{
    console.log(err);
    return res.status(401).json({
        sucess:false,
        message:'user role cannot be varified,please try again'
    })
}
}