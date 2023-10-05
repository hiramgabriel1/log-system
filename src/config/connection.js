import mongoose from "mongoose";
import MONGO_URI from "./configs.js";

const connection = async () => {
  try {
    // & connect
    await mongoose.connect(MONGO_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    console.log("succesfully!".bgGreen)
  } catch (error) {
    throw new Error(error)
  }  
};

export default connection