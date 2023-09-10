import { Router } from "express";

const router = Router();

router.get("/getCartItems/:user", getAllCartItems);

router.post("/addToCart/:slug", addToCart);

router.delete("/removeFromCart/:user/:id", removeItemFromCart);
