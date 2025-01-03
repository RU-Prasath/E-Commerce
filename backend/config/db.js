import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://root:root@cluster0.qh8c1.mongodb.net/foodapp').then(()=>console.log("DB Connected")).catch((err) => {   console.error('MongoDB connection error:', err); });
 
}