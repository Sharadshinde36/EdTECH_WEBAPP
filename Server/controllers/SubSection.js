const Section=require('../models/Section');
const SubSection=require('../models/SubSection');
const { uploadImageToCloudinary } = require('../utils/imageUploader');
require('dotenv').config();
//create subsectioon
exports.creaeteSubSection=async(req,res)=>
{
    //fetch dadta from request= body]\//\
    //extract video from req.files
    //validation
    //upload video to cloudinary and fetch secure url
    //create a subsection
    //update subsection id to the section schema
    //return response
try{
    const {sectionId,title,timeDuration,description}=req.body;
    const video=req.files.videoFile;
    if(!sectionId||!title||!timeDuration||!description||!video)
    {
        return res.status(401).json({
            msg:'all fields are required'
        })
    }
const uploadDetails=await uploadImageToCloudinary(video,process.env.FOLDER_NAME);
const SubSectionDetails=await SubSection.create({
    title,timeDuration,description,videoUrl:uploadDetails.secure_url,
})
const updatedSection=await Section.findByIdAndUpdate({_id:sectionId},{
    $push:{subSection:SubSectionDetails._id}
},{new:true});
return res.status(200).json({
    message:'sub section created successfully',
    updatedSection
})

}catch(err)
{
    return res.status(500).json({
        messsage:'eroor in creating subsection',
        err:err
    })
}

}