const mongoose=required("mongoose")
async function connnectDB(){
    try{
        await mongoose.connect(process.env.MONGODB_URL)
    }catch(err){
        console.log(err)
    }
    }
module.exports=connectDB