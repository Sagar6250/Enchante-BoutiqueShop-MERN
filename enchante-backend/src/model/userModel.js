import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema(
    {
        fullName: { type: String, required: true },
        username: { type: String, unique: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        isAdmin: { type: Boolean, default: false },
        addresses: {
            type: Schema.Types.ObjectId,
            ref: "Address",
            // required: true,
        },
        Card: {
            type: Schema.Types.ObjectId,
            ref: "Card",
            // required: true,
        },
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model("User", userSchema);

export default User;
