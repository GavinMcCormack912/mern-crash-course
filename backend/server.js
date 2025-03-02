//import express :)
//const express = require('express') <- older way of importing express
import express from 'express'; // put "type": commonjs in package.json to do this
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); //allows the us to accept JSON data in the req.body
// Create server at port 5000

app.use("/api/products", productRoutes)

app.listen(PORT, () => {
    connectDB();
    console.log('Server started at http://localhost:5000');
})


console.log(process.env.MONGO_URI)
