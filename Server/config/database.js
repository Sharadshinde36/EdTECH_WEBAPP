const mongoose=require('mongoose');
require('dotenv').config();
exports.databaseConnect=()=>{
mongoose.connect(process.env.DB_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('DB conection is succesful');
}).catch((err)=>{
    console.log('db connection lost');
    console.log(err);
})
}