const Profile=require('../models/Profile');
const User=require('../models/user');
exports.updateProfile=async(req,res)=>
{
try{
    //getdata
    //getuserid
    //validate
    //find profile
    //update profile
    //return response
    const{dateOfBirth="",about="",contactNumber,gender}=req.body;
    const id=req.user.id;
    if(!contactNumber||!gender)
    {
        return res.status(401).json({
            msg:'mendetory fileds must be filled'
        })
    }
    const user=await User.findById({_id:id});
  const profileId=user.additionalDetails;
  const profileDetails=await Profile.findById({_id:profileId});
  //updaate profile
  profileDetails.dateOfBirth=dateOfBirth;
  profileDetails.about=about;
  profileDetails.gender=gender;
  profileDetails.contactNumber=contactNumber;

  await profileDetails.save();
  return res.status(200).json(
    {
        success:true,
        msg:'profile details updated successfully',
        profileDetails,
    }
  )

}catch(err)
{
    return res.status(501).json({
        msg:'eroor while updation a profile'
    })
}
}

exports.deleteAccount=async(req,res)=>
{
    try{

        const id=req.user.id;
        const userDetails=await User.findById(id);
        if(!userDetails)
        {
            return res.status(404).json({
                msg:'user Details not fond'
            })
        }
        await Profile.findByIdAndDelete({_id:userDetails.additionalDetails
        });
        await User.findByIdAndDelete({_id:id});
        return res.status(200).json({
            msg:'User Deleted Successfully'
        })


    }catch(err)
    {
        return res.status(501).json(
            {
                msg:'eror in deltetin account',
                err:err
            }
        )
    }

}
//getallusers
exports.getAllUserDetails=async(req,res)=>
{
    try{
        const id=req.user.id;
        if(!id)
        {
            return res.status(401).json({
                msg:'invalid user id'
            })
        }
        const userDetails=await User.findById({id}).populate("additionalDetails").exec();
        return res.status(200).json({
            sucess:true,
            msg:'user data fetched sucessfully'
        })

    }catch(err)
    {
        console.log(err);
        return res.status(500).json({
            err,

        })
    }
}