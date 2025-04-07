import mongoose from "mongoose";

import { DB_URL } from "./dbUrl.js";

const connectDB = async ()=>{
    try {
        await mongoose.connect(DB_URL)
        console.log("connected to Database");
        
    } catch (error) {
        console.log("Not able to connect with database", error);
        
    }
}

export default connectDB;