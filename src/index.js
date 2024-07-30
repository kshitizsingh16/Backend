import dotenv from"dotenv";
// import mongoose from 'mongoose';
// import { DB_NAME } from './constants';
import app from './app.js';
import connectDB from './db/index.js';
dotenv.config({
    path: './env'
})
connectDB()
.then(()=>{
    app.listen(process.env.PORT||8000,()=>{
        console.log(`Server is running on port ${process.env.PORT}`);
    })
})
.catch((error)=>{
console.log("MONGODB failed to connect",error);
})






























/*
import express from 'express';
const app=express();
(async ()=>{
    try {
        await mongoose.connect(`${process.env.MongoDB_URL}/${DB_NAME}`);
        console.log('Connected to MongoDB');
        app.on("error",(error)=>{console.log("Failed to connect to MongoDB")
            throw error;
        });
        app.listen(process.env.PORT,()=>{
            console.log(`Server is running on port ${process.env.PORT}`);
        })
        
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
    }
 })();
*/