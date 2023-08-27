const mongoose=require('mongoose');
const user = require('./user');
const courseSchema=new mongoose.Schema({
instructor:{
    type:mongoose.Schema.Types.ObjectId,
    ref:user,
},


    courseName:{
        type:String,
    },
    courseDescription:{
        type:String,
        trim:true
    },
    instructor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:user,
        required:true,
    },
    whatYouWillLearn:{
        type:String,
        trim:true,
    },
    courseContent:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Section"
    }],
    ratingAndRevies:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"RatingAndReview",
        }],
        price:{
            type:Number,
        },
        thumbnail:{
            type:String,
        },
        tag:{
            type:[String],
            ref:"Tag",
        },
        category:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Category",
        
        },
        studentsEnrolled:[{
            type:mongoose.Schema.Types.objectId,
            ref:"User",
             required:true
        }],
        instructions:{
            type:[String],
        },
        status:{
            type:String,
            enum:['Draft','Pubished'],
        }
    

})



module.exports=mongoose.Schema("Course",courseSchema);