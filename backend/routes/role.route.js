import express from "express";

import { globalMiddleware } from "../middleware/middleware.js";
import { profileController } from "../controllers/profile.controller.js"

const router = express.Router();



router.get("/user/profile",globalMiddleware,profileController,(req,res) => {
    res.status(200).json({message:"Welcome to profile"})
})
export default router;
