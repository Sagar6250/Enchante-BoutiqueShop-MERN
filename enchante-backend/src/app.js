import dotenv from "dotenv";
import mongoose from "mongoose";
import express from "express";
import authroutes from "./routes/auth/auth_routes.js";
import productroutes from "./routes/product/product_routes.js";
import * as path from "path";
if (process.env.NODE_ENV !== "production") {
    dotenv.config();
}

const app = express();
const port = process.env.PORT ?? 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(process.cwd(), "public")));
async function main() {
    try {
        await mongoose.connect(process.env.MONGO_DB_URL);
        console.log("Connected to mongoDB");
    } catch (error) {
        console.log(error);
    }
}

main();

app.use("/api/auth", authroutes);

app.use("/api/products", productroutes);

// app.use("/api/users", userRouter)
//You enabled public folder access? I dont think so.... idk how to -- wait

app.get("/", (req, res, next) => {
    console.log(process.env.MONGO_DB_URL);
    return res.json({ message: "Hello" });
});
app.listen(port, () => {
    console.log("app listening on 5000");
});
