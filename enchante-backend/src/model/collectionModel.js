import mongoose, { Schema } from "mongoose";

const collectionSchema = new mongoose.Schema({
    name: { type: String, required: true },
    value: { type: String, required: true },
});

const Collection = mongoose.model("Collection", collectionSchema);

export default Collection;
