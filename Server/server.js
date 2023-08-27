const express=require('express');
const app=express();
const userRoutes=require('./routes/')
const dbConnect=require('./config/database');
const cookiewParser=require('cookie-parser');
const cors=require('cors');
const fileUpload=require('express-fileupload');
const dotenv=require('dotenv');
//config
dotenv.config();
const PORT=process.env.PORT||4000;
//database connect
dbConnect();
//middlewares
app.use(express.json());
app.use(cookiewParser());
app.use(
    cors({
        origin:'http://localhost:3000',
        credential:true,
    })
)
app.use(
    fileUpload({
        useTemFiles:true,
        tempFileDev:'/temp'
    })
)
app.use('/api/v1/auth',userRoutes);
app.use('/api/v1/profile',profileRoutes);
app.use('/api/v1/course',courseRoutes);
app.use('/api/v1/payment',paymetRoutes);
//def route
app.get('/',(req,res)=>
{
    return res.json({
        success:true,
        msg:'your server is running ...'
    })
})
app.listen(PORT,()=>
{
    console.log(`app is running at${PORT}`);
})

