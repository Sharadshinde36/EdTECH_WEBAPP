const {instance} =require('../config/razorpay');
const Course=require('../models/Course');
const User=require('../models/user');
const mailSender=require('../utils/mailSender');
//capture the payment and initiate the order
exports.capturePayment=async(req,res)=>
{
    //get courseId and user Id
    //validation
    //valid coursedetail
    //user already pay for the same course
    //order create
    //returnr response
    const {course_id}=req.body;
    const userId=req.user.id;
    if(!course_id)
    {
        return res.json(
            {
                sucess:fale,
                msg:'please provide valid course id'
            }
        )
    }
    let course;
    try
    {
        course=await Course.findById({_id:courseId});
        if(!course)
        {
            return res.json(
                {
                    sucess:fale,
                    msg:'please provide valid course id'
                }
            )
        }
        //check yser contins
        const uid=new mongoose.Types.ObjectId(userId);
        if(course.studentsEnrolled.includes(uid))
        {
            return res.status(200).json({
                success:false,
                msg:'student is already enrolled'
            })
        }

    }catch(err){
        return res.status(500).json({
            msg:'eroor in payment gatewap',
            err,
        })
    }
}
//order create
const amount=course.price;
const currency="INR";
const options=
{
    amount:amount*100,
    currency:currency,
    receipt:Math.random(Date.now()).toString(),
    notes:{
        courseId:course_Id,
        userId

    }
}
try{
    //initiate the payment using razorpay
    const paymentResponse=await instance.orders.create(options);
    console.log(paymentResponse);
}catch(err)
{
    console.log(err);
    res.json({
        success:false,
        message:'could not initiate order'
    })
}
exports.verifySignature=async(req,res)=>
{
    const webhookSecret="12345678";
    const signature=req.header("x-razorpay-signature");
   const shasum= crypto.createHmac("sha256",webhookSecret);
   shasum.update(JSON.stringify(req.body));
   const digest=shasum.digest('hex');

if(signature===digest)
{
    console.log('payment is authorised');
    const {courseId,userId}=req.body.payload.payment.entity.notes;
    try{
        //fullfil the action
        //find the course and enroll the student in it
        const enrolledCourse=await Course.findByIdAndUpdate({_id:courseId},{$push:{studentsEnrolled:userId}},{new:true})
        if(!enrolledCourse)
        {
            return res.status(500).json({
                success:false,
                message:'courser not found'
            })
        }
        const enrolledStudent =await User.findOneAndUpdate({
            _id:userId
        },{
            $push:{
                courses:courseId
            }
        },{new:true})
        console.log(enrolledStudents)
        //sendMail
        const emailResponse=await mailSender()

    }catch(err)
    {

    }
}


}