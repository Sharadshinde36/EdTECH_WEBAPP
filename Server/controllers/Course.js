const Course=require('../models/Course');
const Tag=require('../models/Category');
const User=require('../models/user');
const {uploadImageToCloudinary}=require('../utils/imageUploader')
//create couser handler function
exports.createCourse=async(req,res)=>
{
    try{
//fetch data from req.body
const {courseName,courseDescription,whatYouWillLearn,price,tag}=req.body


//file fetch
const thumbnail=req.file.thumbnailImage;
//validation
if(!courseName||!courseDescription||!whatYouWillLearn||!price||!tag)
{
    return res.status(401).json({
        success:false,
        msg:'all fields are required'
    })
}
//instructor validator instructor can create a course
const userId=req.user.id;
const instructorDetails=await User.findById({userId});
console.log(instructorDetails);
if(!instructorDetails)
{
    return res.status(404).json({
        success:false,
        msg:'instructor Details not fond'
    })
}

//check tag valid if valid add course id to tag
const tagDetails=await Tag.findById({tag})
if(!tagDetails)
{
    return res.status(404).json({
        success:false,
        messegae:'tag details not found'
    })
}
//upload image on cloudinary res return is secure URL
const thumbnailImage=await uploadImageToCloudinary(thumbnail,process.env.FOLDER_NAME);

//create course entry in db
const newCourse=await Course.create({
    courseName,
    courseDescription,
    instructor:instructorDetails._id,
    whatYouWillLearn:whatYouWillLearn,
    price,
    tag:tagDetails._id,
    thumbnail:thumbnailImage.secure_url
})

//add course entry in userSchema(only instructor )
await User.findByIdAndUpdate({_id:instructorDetails._id},{
    $push:{courses:newCourse._id,}
},{new:true})


       //add couse in tag schema
       await Tag.findByIdAndUpdate({tag},{
        $push:{
            courses:newCourse._id,
        }
       })
return res.status(200).json({
    success:true,
    msg:'course created successfully',
    data:newCourse
})




 }catch(err)
    {
        console.log(err);
        return res.status(501).json({
            msg:'err in creating course'
        })
    }
}
//getallcourses controller
exports.showAllCourses=async(req,res)=>
{
    try{
        const allCourses= await Course.find({},{courseName:true,price:true,thumbnail:true,instructor:true,ratingAndReview:true,studentsEnrolled:true}).populate('instructor').exec();
        return res.status(200).json(
            {
                success:true,
                msg:'Data fetched successfull',
                data:allCourses,
            }
        )

    }catch(err)
    {
        console.log(err);
        return res.status(501).json(
            {
                success:false,
                msg:'cannot fetch course data',

            }
        )
    }
}
//getcoursedetails
exports.getCourseDetails=async(req,res)=>
{
    try{
//get id
const{courseId}=req.body;
//find courseDetail
const courseDetails=await Course.find({_id:courseId}).populate({
    path:'instructor',
    populate:{
        path:'additionalDetails',
    },
}).populate('category').populate('ratingAndReviews').populate({
    path:'courseContent',
    populate:{
        path:'subSection',
    }
}).exec();
if(!courseDetails)
{
    return res.status(400).json({
        sucess:fale,
        msg:'could not fin theh course '
    })
}
return res.status(200).json({
    success:true,
    msg:'alll course details fetched',
    data:courseDetails
})
    }catch(err)
    {
return res.status(500).json({
err,
})
    }
}