import express from "express"
import { CreateProduct } from "../controllers/ProductController.js"
import { GetAll } from "../controllers/ProductController.js"
import { ProductById } from "../controllers/ProductController.js"
import { ProductDelete } from "../controllers/ProductController.js"
import { ProductUpdate } from "../controllers/ProductController.js"
import multer from "multer";


const router = express.Router()
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, "uploads/"),
    filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname)
  });
  const upload = multer({ storage });
router.post("/addProduct",upload.single("image"),CreateProduct)
router.get("/list",GetAll)
router.get("/list/:id",ProductById)
router.delete("/deleteProduct/:id",ProductDelete)
router.put("/updateProduct/:id",ProductUpdate)

export default router