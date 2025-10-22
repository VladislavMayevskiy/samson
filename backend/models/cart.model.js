import mongoose from "mongoose";

const cartSchema = mongoose.Schema({
    forCart:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Product"
    },
    quantity:{
        type:Number,
        default:1
    }
}

)
const Cart = mongoose.model("Cart",cartSchema)
export default Cart