//sendOTP
const User =require('../models/user');
const OTP=require('../models/Otp');
const otpGenerator=require('otp-generator')
const bcrypt=require('bcrypt');
const Profile=require('../models/Profile');
const jwt=require('jsonwebtoken')
require('dotenv').config();
//sendOTP
exports.sendOTP=async(req,res)=>
{
    //fetch email
    const {email}=req.body;
    //check for exitsting email
    try{
    const checkUserPresent=await User.findOne({email});
    if(checkUserPresent)
    {
        return res.status(401).json({
            success:false,
            message:'user already exits'
        })
    }
    //generate otp
var otp=otpGenerator.generate(6,{
    upperCaseAlphabets:false,
    lowerCaseAlphabets:false,
    specialChars:false
})
//check unique otp or not
var result=await OTP.findOne({otp:otp});
while(result)
{
    otp=otpGenerator.generate(6,{
        upperCaseAlphabets:false,
        lowerCaseAlphabets:false,
        specialChars:false
    })
    result=await OTP.findOne({otp:otp});

}

const otpPayload={email,otp}
//create an entry in db
const otpBody=await OTP.create(otpPayload);
console.log(otpBody);
res.status(200).json({
    sucess:true,
    message:'otp send successfully',
    otp
})



}catch(err)
{
    console.log('err in otp genrateor')
    res.status(500).json({
        sucess:false,
        msg:'error in otp sending bro'
    })
}
 

}
//signup
exports.signUp=async(req,res)=>
{
    try{
    //fetch dadta form req body
    const {firstName,lastName,email,password,confirmPassword,accountType,contactNumber,otp
    }=req.body;
    //validate krlo
    if(!fistName||!lastName||!email||!password||!confirmPassword||!otp)
    {
        return res.status(400).json({
            sucess:false,
            message:'all fielsd are required'
        })
    }
    //match both passwords
    if(password!==confirmPassword)
    {
        return res.status(400).json({
            sucess:false,
            message:'password and comfirm password does not match'
        })
    }
   // check user already exits or not
   
   const exstingUser=await User.findOne({email});
   if(exstingUser)
   {
    return res.status(400).json({
        success:false,
        message:'email extis already please login '
    })
   }


   //find most recent otp stored for the user
const recentOtp=await OTP.find({email}).sort({createdAt:-1}).limit(1);

   //validate otp
   if(recentOtp.length==0)
   {
    return res.status(400).json({
        success:false,
        message:'otp not found'
    })
   }else if(recentOtp!==otp)
   {
    return res.status(400).json({
        success:false,
        msg:'otp not matching bro try again '
    })
   }


   //hash password
   let hashPassword=await bcrypt.hash(password,10);
const profileDetails=await Profile.create({
    gender:null,
    dateOfBirth:null,
    about:null,
    contactNumber:null
})
   //create enty tne the database
   const user=await User.create({
    firstName,lastName,email,password:hashPassword,
    additionalDetails:profileDetails,
    image:`http://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`
   })
   res.status(200).json({
    sucess:true,
    msg:'user is regester successfully'
   })
}catch(err)
{
    return res.status(500).json({
        success:false,
        msg:'error while creating a new user(registring)'
    })
}

 
}
//login
exports.login=async(req,res)=>
{
    //fetch data
    //check email exists or not
    //compare pass
    //create token and send 
    try{
const {email,password}=req.body;
//validate email and password
if(!email||!password)
{
    return res.status(400).json({
        sucess:false,
        message:'please enter valid value in email and password'
    })
}
//chech email
const checkEmail=await User.findOne({email});
if(!checkEmail)
{
    return res.status(400).json({
        sucess:false,
        message:'email doesnot exists try to signup'
    })

}

if(await bcrypt.compare(password,checkEmail.password))
{
    const payLoad={
        id:checkEmail._id,
     email:checkEmail.email,
    
    }
 const token=jwt.sign(payLoad,process.env.JWT_SECRET,{
    expiresIn:"2h",
 })
 checkEmail=checkEmail.toObject();
 checkEmail.token=token;
 const options={
    expires:new Date(Date.now()+3*24*60*60*1000),
 }
res.cookie("token",token,options).status(200).json({
    success:true,
    token,user,message:'token is send via cookies'
})
}else
{
    return res.status(401).json({
        sucess:false,
        message:'Password is incorrect'
    })
}

    }catch(err)
    {
        console.log(err);
        return res.status(400).json({
            msg:'issue while login '
        })
    }
}

exports.changePassword=async(req,res)=>{
    //get data form req body oldpass,newpass,newconfimpass
    //validation 
    //check both new passsend
    //save to db
    //send mail -password is updated
}