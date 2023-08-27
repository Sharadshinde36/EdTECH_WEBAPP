const Section =require('../models/Section');
const Course =require('../models/Course');
exports.createSection=async(req,res)=>
{
    try{

//fetchdata
//data validation
//crate section
//update course wwiith section
//return response
const {sectionName,courseId}=req.body;
if(!sectionName||!courseId)
{
    return res.status(401).json({
        success:false,
        msg:'missing values detected'
    })
}

const newSection=await Section.create({sectionName});
const updatedCourse=await Course.findByIdAndUpdate({_id:courseId},{
    $push:{courseContent:newSection._id}
},{new:true});

return res.status(200).json({
    success:true,
    message:'section creation is done',
    section:newSection,
})

    }catch(err)
    {
        console.log(err);
        return res.status(501).json({
            success:false,
            msg:'err in creation of the section',
        })

    }
}
//update section
exports.updateSection=async(req,res)=>
{
    //fetch data
    
    //data validation
    //find 
    //update
    //return response
    const {sectionName,sectionId}=req.body;
    if(!sectionName||!sectionId)
    {
        return res.status(401).json({
            msg:'missing property name and id of section'
        })
    }
    const section=await Section.findByIdAndUpdate({_id:sectionId},{
        sectionName
    },{new:true});
    return res.status(200).json({
        success:true,
        message:'section is updated successfully'
    })

}
//delete section
exports.deleteSection=async(req,res)=>
{
    try{
const {sectionId}=req.params;
//TODO do you need to delete form course schema

await Section.findByIdAndDelete({_id:sectionId});

    }catch(err)
    {
        return res.status(501).json({
            message:'error in deletion of the delete',
            err:err.message
        })
    }
}