import mongoose, { Schema } from "mongoose";

const addressSchema = new mongoose.Schema(
    {
        streetName: { type: String, required: true },
        city: { type: String, required: true },
        country: { type: String, required: true },
        pincode: { type: String, required: true },
        landmark: { type: String },
    },
    {
        timestamps: true,
    }
);

const Address = mongoose.model("Address", addressSchema);

export default Address;
