import mongoose, { Schema } from "mongoose";

const orderSchema = new mongoose.Schema(
    {
        product: {
            type: Schema.Types.ObjectId,
            ref: "Product",
            required: true,
        },
        paymentOption: { type: Number, required: true },
        Delivered: { type: Boolean, required: true },
        user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    },
    {
        timestamps: true,
    }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;
