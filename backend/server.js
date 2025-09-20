import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import productRoutes from "./routes/routes.js"
import { fileURLToPath } from "url";
import path from "path";
dotenv.config();
import authRoutes from "./routes/auth.route.js"


const app = express();
const PORT = 5000
app.use(cors());
app.use(express.json());
    
app.use("/api/products", productRoutes);//главарь
app.use("/api/auth", authRoutes);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use("/uploads", express.static(path.join(__dirname, "uploads")));


mongoose.connect(process.env.mongo_ATLAS)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ Error connecting to MongoDB:", err));

app.listen(PORT)
