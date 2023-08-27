const cloudinary=require('cloudinary').v2
exports.uploadImageToCloudinary=async(file,folder,height,quality)=>
{

    try{
    const options={folder};
    if(options.height)
    {
        options.height=height;
    }
    if(quality)
    {
        options.quality=quality
    }
    options.resourse_type="auto";
    return await cloudinary.uploader.upload(file,tempFilePath,options);
    }catch(err)
    {
        console.log(err);
        console.log('error in file upload in cloudinary')
    }
}