import express from "express";
import authAdminMiddleware from "../middleware/middleware.js"

const router = express.Router();

router.post("/verify", authAdminMiddleware, (req, res) => {
  res.json({ message: "Token valid" });
});

router.get("/adminPage", authAdminMiddleware, (req, res) => {
  res.json({ message: "Welcome, admin!" });
});

export default router;
