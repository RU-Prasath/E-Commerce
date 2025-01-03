    import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import productRouter from './routes/productRoute.js';
import userRouter from './routes/userRoute.js';
import'dotenv/config'
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';

// app config
const app = express()
const port = process.env.PORT || 4000

// middleware
app.use(express.json())
// app.use(cors())

app.use(cors({
    origin: 'https://e-commerce-frontend-t6kw.onrender.com',  // Replace with your frontend URL
    methods: 'GET,POST,PUT,DELETE',  // Allow methods you want to support
    allowedHeaders: 'Content-Type,Authorization',  // Allow headers you want to support
  }));

// db connection
connectDB();

// api endpoint
app.use("/api/product",productRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user/", userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)

app.get("/", (req, res) => {
    res.send("API Working")
})

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})