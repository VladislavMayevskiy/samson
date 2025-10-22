import express from "express"
import { CreateProduct } from "../controllers/ProductController.js"
import { GetAll } from "../controllers/ProductController.js"
import { ProductById } from "../controllers/ProductController.js"
import { ProductDelete } from "../controllers/ProductController.js"
import { ProductUpdate } from "../controllers/ProductController.js"
import multer from "multer";
import { adminMiddleware } from "../middleware/middleware.js"


const router = express.Router()
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, "uploads/"),
    filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname)
  });
  const upload = multer({ storage });
router.post("/addProduct",upload.single("image"),CreateProduct,adminMiddleware)
router.get("/list",GetAll)
router.get("/list/:id",ProductById)
router.delete("/deleteProduct/:id",ProductDelete,adminMiddleware)
router.put("/updateProduct/:id",upload.single("image"),ProductUpdate,adminMiddleware)



export default router