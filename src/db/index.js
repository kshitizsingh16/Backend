import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
const connectDB=async()=>{
    try{
     const connectionInstance=   await mongoose.connect(`${process.env.MongoDB_URL}/${DB_NAME}`);
     console.log(`MongoDB Connected: ${connectionInstance.connection.host}`);

    }
    catch(error){
        console.log("Mongodbconnecton error: " , error)
        process.exit(1);
    }
}
export default connectDB;