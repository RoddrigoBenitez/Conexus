import mongoose from "mongoose";

export default async function(){
    if(mongoose.connection.readyState >= 1){
        return;
    }
    try {
        const mongodbUri= process.env.DB_URI ?? "";
        await mongoose.connect(mongodbUri)
        console.log("DB OK")
    } catch (error) {
        console.log("DB Connection Error", error); 
    }
}