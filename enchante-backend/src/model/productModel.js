import mongoose, { Schema } from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, },
        slug: { type: String, required: true, unique: true, index: true },
        imageName: { type: String },
        imagePath: { type: String },
        category: { type: String, required: true },
        fabric: { type: String },
        style: { type: String },
        description: { type: String, required: true },
        price: { type: Number, required: true },
        rating: { type: Number, required: true },
        count: { type: Number, required: true },
        numReviews: { type: Number, required: true },
        reviews: {
            type: Schema.Types.ObjectId,
            ref: "Reviews",
            // required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
