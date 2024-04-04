import { Router } from "express";
import {
    addToCart,
    deleteItem,
    getAllCartItems,
} from "../../controller/product/cartController.js";

const router = Router();

router.get("/getCartItems/:user", getAllCartItems);

router.post("/addToCart/:id", addToCart);

router.delete("/removeFromCart/:user/:id", deleteItem);

export default router;
