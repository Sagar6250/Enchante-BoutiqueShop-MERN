import mongoose, { Schema } from "mongoose";

const cartSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    products: [
        {
            productId: { type: String },
            quantity: { type: Number, required: true, min: 1, default: 1 },
        },
    ],
    bill: { type: Number, default: 0 },
});

const Cart = mongoose.model("Cart", cartSchema);

export default Cart;
