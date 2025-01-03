import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"
import { configDotenv } from "dotenv"

//app config
const app = express()
const port = process.env.PORT || 4000;

//middleware
app.use(express.json())
// app.use(cors())

const allowedOrigins = [
    'https://e-commerce-frontend-t6kw.onrender.com',
    'https://e-commerce-admin-vzrh.onrender.com'
  ];
 
  // Enable CORS for the allowed origins
  app.use(cors({
    origin: function(origin, callback) {
      if (allowedOrigins.includes(origin) || !origin) {
        // Allow the request if the origin is in the allowedOrigins array
        callback(null, true);
      } else {
        // Reject the request if the origin is not allowed
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
  }));

//db connection
connectDB();

//api Endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)


app.get("/api/res",(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})

//mongodb+srv://root:root@cluster0.qh8c1.mongodb.net/?