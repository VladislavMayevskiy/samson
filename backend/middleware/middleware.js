import jwt from 'jsonwebtoken';


export const globalMiddleware = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) {
    return res.status(401).json({ message: "Enter token" });
  }
  const token = authHeader.split(' ')[1];
 
  try {
    const decodingToken = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decodingToken;
    next(); 
  } catch (error) {
    console.log(error);
    return res.status(403).json({ message: "Invalid token" });
  }
};

export const adminMiddleware = (req,res,next) => {
  const authHeader = req.headers['authorization']
  if (!authHeader) {
    return res.status(401).json({message:"Enter a token"})
  }
  const token = authHeader.split(' ')[1]
  try {
const decoding = jwt.verify(token,process.env.JWT_SECRET)

if (decoding.role !== "admin") {
  return res.status(403).json({message:"Admins only"})
}
  req.user = decoding
  next()

  } catch (err) {
    return res.status(403).json({message:"Invalid token"})
  }
}

  


