const  authAdminMiddleware = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) {
    return res.status(401).json({ message: "No token" });
  }
  const token = authHeader.split(' ')[1];
  if (token !== process.env.ADMIN_KEY) {
    return res.status(403).json({ message: "Invalid token" });
  }
  next();
};
export default authAdminMiddleware;