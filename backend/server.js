import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";

import cors from "cors";
import productRoutes from "./routes/routes.js"
import { fileURLToPath } from "url";
import path from "path";

import authRoutes from "./routes/auth.route.js"
import roleRoutes from "./routes/role.route.js"
import Carter from "./routes/cart.route.js";


const app = express();
const PORT = 5001
app.use(cors());
app.use(express.json());
 
app.use("/",roleRoutes)
app.use("/api/products", productRoutes);//главарь
app.use("/api/auth", authRoutes);
app.use("/api/cart",Carter)

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

mongoose.connect("mongodb://127.0.0.1:27017/samson_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ Local MongoDB connected"))
.catch(err => console.error("❌ DB error:", err));

app.listen(PORT)
