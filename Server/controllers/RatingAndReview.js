const RatingAndReview=require('../models/RatingAndReview'
);
const Course=required('../models/Course');
//create rating
//averate rating 
//getallrating
exports.createRating=async(req,res)=>
{
    //get data user rating review
    //validate user
    ////check if user already review give already or not
    //update course with rating/review
try{

    const userId =req.user.id;
    const {rating ,review,courseId}=req.body;
    const courseDetail=await Course.findOne({_id:courseId
    ,
    studentsEnrolled:{$elemMathch:{$eq:userId}}});
    const alreadyRevied=await RatingAndReview.findOne({
        user:userId,
        course:courseId,
    })
    if(alreadyrevied)
    {
        return res.json({
            msg:'user rating already exits'
        })
    }
    const ratingReview=await RatingAndReview.create({
        rating,review,course:courseId,user:userId
    })
    await Course.findByIdAndUpdate(courseId,{
        $push:{
            ratingAndReview:ratingReview._id,
        }
    },{new:true});
    //return response
    return res.status(200).json({
        success:true,
        msg:'rating and review is added successfully',
        ratingReview,
    })
}catch(err)
{
    return res.json({
        err,
    })
}
}
//get averate rating
exports.getAverageRating=async(req,res)=>
{
    try{
        //getcourseid//calculate average rating
        //return rating
        const courseId=req.body.courseid;
        const result=await RatingAndReview.aggregate([
            {
                $match:{
                    course:new mongoose.Types.ObjectId(courseId),
                },

            },
            {
                $group:{
                    _id:null,
                    averageRating:{$avg:"$rating"},
                }
            }

        ]);
        if(result.length>0)
{
    return res.status(200).json({
        success:true,
        averageRating:result[0].averageRating,
    })
}
return res.status(100).json({
    success:false,
    averageRating:0,
})

    }catch(err)
    {
        return res.json({
            err,
        })
    }
}
//
exports.getAllRatingAndReview=async(req,res)=>
{
    const allReview=await RatingAndReview.find({}).sort({rating:-1}).populate({
        path:"user",
        select:"firstName lastName email image"
    }).populate({
        path:'course',
        select:'courseName'
    }).exec();
    return res.status(200).json(
        {
            data:allReview
        }
    )
}