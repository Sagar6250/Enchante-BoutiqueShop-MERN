import mongoose, { Schema } from "mongoose";

const cardSchema = new mongoose.Schema(
    {
        cardName: { type: String, required: true },
        cardType: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

const Card = mongoose.model("Card", cardSchema);

export default Card;
