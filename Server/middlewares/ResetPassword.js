//resetPasswordToken
const User=require('../models/user');
const mailSender=require('../utils/mailSender');
const bcrypt=require('bcrypt');




exports.resetPasswordToken=async(req,res)=>
{
try{

    //get email from req body
    const email=req.body.email;
    //check email present or not in email
    const user=await User.findOne({email});
    if(!user)
    {
        return res.json({
            sucess:false,
            message:'your email is not regestered with us'
        })
    }
    //generate token
    const token=crypto.randomUUID();
    //update user by adding token and expiration time
    const updatedDetails=await User.findOneAndUpdate({email},{
        token:token,
        resetPasswordExpires:Date.now()+5*60*60*1000
    },{new:true});
    //generate  link 
    const url=`http://localhost:3000/update-password/${token}`;
    //send link in the email
await mainSender(email,'Password reset link',`Password  Reset Link:${url}`)
return res.status(200).json({
    success:true,
    message:'reset link is send sucessfully'
})




}catch(err)
{
    console.log('err in reseet password link send')
    return res.status(501).json({
        message:'sending reset link is failed',
        success:false
    })
}
   

}
//reset passord
exports.resetPassword=async(req,res)=>{
    //data fetch
   try{

    const {password,confirmPassword,token}=req.body
    //validation
       if(password!==confirmPassword)
       {
        return res.json({
            sucess:false,
            message:'Password not matching'
        })
       }
       const userDetails=await User.findOne({token:token});
       if(!userDetails)
       {
        return res.status(401).json({
            sucess:false,
            message:'user details not found'
        })
       }
       if(userDetails.resetPasswordExpires<date.now())
       {
        return res.status(401).json({
            suceess:false,
            message:'token session expires'
        })
       }
       const hashedPassword=await bcrypt.hash(password,10);
       await User.findOneAndUpdate({token:token},
        {
            password:hashedPassword,
        },{new:true});
        //return response
        return res.status(200).json({
            success:true,
            message:'Password reset successful'
        })


   }catch(err)
   {
    console.log(err);
    return res.status(501).json({
        msg:'eroor in reset password'
    })
   }

}