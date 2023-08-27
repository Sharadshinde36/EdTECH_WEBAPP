const mongoose=required('mongoose');
const mailSender=required('../utils/mailSender');
const otpSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    otp:{
        type:String,
    required:true
    },
    createdAt:{
        type:Date,
        default:Date.now(),
        expires:5*60,
    }
})

async function sendVerificationEmail(email,otp)
{
    try{
const mailResponse=await mailSender(email,"verification email from StudyNotion",otp)
console.log('email sent sucessfull',mailResponse);
    }catch(err)
    {
        throw err;
    }
}
otpSchema.pre('save',async function(next){
    await sendVerificationEmail(this.email,this.otp)
 next();
})
module.exports=mongoose.model("OTP",otpSchema);
