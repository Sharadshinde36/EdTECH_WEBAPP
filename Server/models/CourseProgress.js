const mongoose=require('mongoose');
const courseSchema=new mongose.Schema({
    courseID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Course"
    },
    completedVideos:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"SubSection"
    }
})
module.exports=mongoose.model("CourseProgress",courseSchema);
