const Category=require('../models/Category');
//cereate tag controller
exports.createTag=async(req,res)=>
{
    try{

const{name,description}=req.body;
//validation
if(!name||!description){
    return res.status(400).json({
        msg:'all fields are required'
    })
}
//create entry in db
const tagDetails=await Tag.create({
    name,description
});
console.log(tagDetails);
//return response
return res.status(200).json({
    success:true,
    msg:'tag created and inserted at dp successfuly',
})




    }catch(err)
    {
        return res.status(500).json({
            msg:'error in creating tag',
            err,
        })
    }
}
//get all tags function
exports.showAllTags=async(req,res)=>
{
    const allTags=await Tag.find({},{name:true,description:true});
    return res.status(200).json({
        success:true,
        msg:'all tags are return successsfully',
        allTags

    })
}
//get category page details
exports.categoryPageDetails=async(req,res)=>
{
    //get categoryId
    //get courses for specified category id
    //validation
    //get top selling courses
    const {categoryId}=req.body;
    const selectedCategory=await Category.findById(categoryId).populate('courses').exec();
    if(!selectedCategory)
    {
        return res.status(404).json({
            success:false,
            message:'data Not found'
        })
    }
    const differentCategories=await Category.find({_id:{$ne:categoryId}}).populate('Courses').exec();
    



}