import User from "../models/user.model.js";

export const profileController = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({
      message: "Welcome to profile",
      user,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
