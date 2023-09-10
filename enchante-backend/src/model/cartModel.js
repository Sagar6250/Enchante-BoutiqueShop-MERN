import mongoose, { Schema } from "mongoose";

const cartSchema = new mongoose.Schema({
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    products: [
        {
            productId: { type: Schema.Types.ObjectId, ref: "Product" },
            quantity: { type: Number, required: true, min: 1, default: 1 },
        },
    ],
    bill: { type: Number, default: 0 },
});

const Cart = mongoose.model("Cart", cartSchema);

export default Cart;
