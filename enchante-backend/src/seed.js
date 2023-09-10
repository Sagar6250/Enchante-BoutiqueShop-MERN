import dotenv from "dotenv";
import Product from "./model/productModel.js";
import User from "./model/userModel.js";
import NewArrivals from "./data/LandingPage.js";
import mongoose from "mongoose";
import users from "./data/Users.js";
if (process.env.NODE_ENV !== "production") {
    dotenv.config();
}

async function main() {
    try {
        await mongoose.connect(process.env.MONGO_DB_URL);
        console.log("Connected to mongoDB");
    } catch (error) {
        console.log(error);
    }
}

main();

const createProduct = async () => {
    await User.insertMany(users.user);
    // await Product.insertMany(NewArrivals.products);
};

createProduct().then(() => {
    mongoose.connection.close();
});
