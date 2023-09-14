import mongoose, { Schema } from "mongoose";

const collectionSchema = new mongoose.Schema({
    name: { type: String, required: true },
    slug: { type: String, required: true },
    image: { type: String },
    description: { type: String, required: true },
});

const Collection = mongoose.model("Collection", collectionSchema);

export default Collection;
