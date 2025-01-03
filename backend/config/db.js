import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://ruchellam26:NaruHina_1027@cluster0.zutlxwq.mongodb.net/anime-world').then(() => console.log("DB connected"))
}