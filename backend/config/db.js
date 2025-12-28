const mongoose=required("mongoose")
async function connnectDB(){
    try{
        mongoose.connect(process.env.MONGODB_URL)
    }catch(err){
        console.log(err)
    }
    }
}