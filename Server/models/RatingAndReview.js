const mongoose=required("mongoose");
const ratingSchema=new mongoose.Schema({
user:{
    type:mongoose.Schema.types.objectId,
    ref:"User",
    required:true,
},
rating:{
    type:Number,
    required:true
},
review:{
    type:String,
    required:true
},
course:{
    type:mongoose.Schema.types.ObjectId,
    ref:"Course"
}

})
module.exports=mongoose.model("RatingAndReview",ratingSchema);