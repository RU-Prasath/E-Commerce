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

// app.use(cors({
//     origin: 'https://e-commerce-frontend-t6kw.onrender.com',
//     methods: 'GET,POST,PUT,DELETE',
//     allowedHeaders: 'Content-Type,Authorization',
//   }));

// Define allowed origins
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