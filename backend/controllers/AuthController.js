import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const name = String(req.body.name ?? "").trim();
    const email = String(req.body.email ?? "").trim().toLowerCase();
    const password = String(req.body.password ?? "");
    const role = req.body.role || "user";

    const falseAcc = await User.findOne({email});
    if(falseAcc) {
      return res.status(400).json({message:"User already exists"});
    }

    if (!name || !email || !password) {
      return res.status(400).json({ message: "name, email, password required" });
    }

    const exists = await User.findOne({ email });
    if (exists) {
      return res.status(400).json({ message: "user with this email already exist" });
    }

    const hash = await bcrypt.hash(password, 10);

    const user = await User.create({ name, email, password: hash,role });

    return res.status(201).json({
      message: "Користувач створений",
      user: { _id: user._id, name: user.name, email: user.email },
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const email = String(req.body.email ?? "").trim().toLowerCase();
    const password = String(req.body.password ?? "");

    if (!email || !password) {
      return res.status(400).json({ message: "Email and Password important" });
    }

    const user = await User.findOne({ email }); 
    if (!user) return res.status(400).json({ message: "User not found" });

    const decodeding = await bcrypt.compare(password, user.password);
    if (!decodeding) return res.status(400).json({ message: "Uncorrect password" });
  const token = jwt.sign(
       {id:user._id,role:user.role},
        process.env.JWT_SECRET,
        {expiresIn:"1y"})
        
return res.status(200).json({
  message: "Login successful",
  token,
  user: { id: user._id, name: user.name, email: user.email, role: user.role },
});

  } catch (err) {
    return res.status(500).json({ message: "Fail server" });
  }
};
