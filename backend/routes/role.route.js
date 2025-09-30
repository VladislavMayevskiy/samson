import express from "express"
import { authMiddleware } from "../middleware/middleware.js"
import { adminMiddleware } from "../middleware/middleware.js"
const role = express.Router()

role.get("/global/profile", authMiddleware, (req, res) => {
  res.json({ message: "Profile", user: req.user });
});

role.get("/admin", authMiddleware, adminMiddleware,(req, res) => {  res.json({ message: "Welcome to admin",user:req.user }); })
export default role