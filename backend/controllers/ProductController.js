import Product from "../models/product.model.js";

export const CreateProduct = async (req, res) => {
  try {
    const imagePath = req.file ? `/uploads/${req.file.filename}` : req.body.image || null;

    const product = await Product.create({
      name: req.body.name,
      price: req.body.price,
      quantity: req.body.quantity,
      description: req.body.description,
      rating: req.body.rating,
      image: imagePath
    });

    res.status(200).json({ message: "Product added", product });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


export const GetAll = async(req,res) => {
    const ProductList = await Product.find()
    res.json(ProductList)
};

export const ProductById = async(req,res) => {
    try{ const ProductId = await Product.findById(req.params.id)
     if (!ProductId) {
         return res.status(404).json("ID not found")
     }
     res.status(200).json(ProductId)}
     catch(err) {
         res.status(500).json({message:err.message})
     }
 };

export const ProductDelete =  async (req, res) => {
    try {
      const product = await Product.findByIdAndDelete(req.params.id);
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      res.status(200).json({ message: "Product deleted successfully" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

export const ProductUpdate = async (req, res) => {
  try {
    const imagePath = req.file ? `/uploads/${req.file.filename}` : req.body.image;
    const updateData = {
      name: req.body.name,
      price: req.body.price,
      quantity: req.body.quantity,
      description: req.body.description,
      rating: req.body.rating,
      ...(imagePath && { image: imagePath }),
    };

    const product = await Product.findByIdAndUpdate(req.params.id, updateData, { new: true });

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product updated successfully", product });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

 
