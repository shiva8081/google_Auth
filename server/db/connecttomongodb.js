import mongoose from "mongoose";




const connecttomongodb = async() => {
    try {
        mongoose.set("strictQuery",false);
        mongoose.connect(process.env.MONGO_URL);
        console.log("connected to mogodb successfully")
    } catch (error) {
        console.log("error in connecting moongo",error.message)
        
    }
}

export default connecttomongodb
