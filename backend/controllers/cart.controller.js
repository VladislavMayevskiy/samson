import Cart from "../models/cart.model.js";
import Product from "../models/product.model.js";

export const GetAll = async(req,res) => {
   try {
    const cartList = await Cart.find().populate("forCart")
    res.json(cartList)
   } catch (error)
   {
res.status(300).json({message:"List empty"})
   }
}

export const cartAdd = async (req, res) => {
  try {
    const { productId, quantity = 1 } = req.body;

    console.log("Incoming add to cart:", { productId, quantity });

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const cartFind = await Cart.findOne({ forCart: productId });

    if (cartFind) {
      cartFind.quantity += quantity;
      await cartFind.save();
      return res.status(200).json({ message: "Quantity updated", cart: cartFind });
    }

    const newCartItem = await Cart.create({
      forCart: productId,
      quantity
    });

    res.status(201).json({ message: "Cart created", cart: newCartItem });
  } catch (error) {
    console.error("Cart Add Error:", error);
    res.status(400).json({ message: error.message });
  }
};



export const cartUpdate = async (req,res) => {
  try {
const added = await Cart.findByIdAndUpdate(
    req.params.id,
    {quantity:req.body.quantity},
    {new:true}
)
if (!added) {
    res.status(404).json({message:"Not found"})

}
res.status(200).json({message:"added"})
  } catch (error) {
    res.status(400).json(error.message)
  }


}
export const cartDelete = async(req,res) => {
    try {
const deleted = await Cart.findByIdAndDelete(
    req.params.id
)
if (!deleted) {
    res.status(404).json({message:"Not found"})
}
res.status(200).json({message:"Delete completed"})
    } catch (error) {
        res.status(400).json(error.message)
    }
}