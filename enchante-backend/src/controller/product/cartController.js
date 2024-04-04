import mongoose, { Schema } from "mongoose";
import Cart from "../../model/cartModel.js";
import Product from "../../model/productModel.js";

export const getAllCartItems = async (req, res) => {
    const userId = req.params.user;
    // console.log(userId);
    const cart = await Cart.findOne({ userId })
        .populate("products.productId")
        .populate("userId");
    if (cart) {
        res.send(cart);
    }

    // try {
    //     let cart = await Cart.findOne({ userId });
    //     if (cart && cart.products.length > 0) {
    //         res.send(cart);
    //     } else {
    //         res.send(null);
    //     }
    // } catch (err) {
    //     console.log(err);
    //     res.status(500).send("Something went wrong");
    // }
};

export const addToCart = async (req, res) => {
    const productId = req.params.id;
    const { userId, quantity } = req.body;
    // console.log(userId);
    try {
        const cart = await Cart.findOne({ userId });
        const product = await Product.findById(productId);
        // console.log(product);
        if (!product) {
            res.status(404).send("Product not found!");
        }

        const price = product.price;
        // const name = product.name;

        if (!cart) {
            console.log(quantity);
            console.log(price);
            // no cart exists, create one
            const newCart = new Cart({
                userId: userId,
                products: [{ productId: productId, quantity: quantity }],
                bill: quantity * price,
            });
            const updatedCart = await newCart.save();
            return res.status(201).send(updatedCart);
        }

        // if cart exists for the user
        const productItems = await Cart.findOneAndUpdate(
            {
                "products.productId": {
                    $eq: productId,
                },
            },
            {
                $inc: {
                    "products.$.quantity": quantity,
                    bill: quantity * price,
                },
            },
            { new: true }
        );

        if (!productItems) {
            cart.products.push({ productId, quantity });
            cart.bill += quantity * price;
            const updatedCart = await cart.save();
            return res.status(201).send(updatedCart);
        }

        // console.log(productItems);

        // Check if product exists or not
        // if (itemIndex > -1) {
        //     const productItem = cart.products[itemIndex];
        //     productItem.quantity += quantity;
        //     cart.products[itemIndex] = productItem;
        // } else {
        // }

        return res.status(201).send(productItems);
    } catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong");
    }
};

export const deleteItem = async (req, res) => {
    const userId = req.params.user;
    const productId = req.params.id;
    // const product = await Product.findById(productId);

    // const updatedItem = await Cart.findOneAndUpdate(
    //     {
    //         "products.productId": productId,
    //     },
    //     {
    //         $pull: {
    //             "products.productId": productId,
    //         },
    //         $inc: {
    //             bill: -("$products.$.quantity" * product.price),
    //         },
    //     },
    //     { new: true }
    // );
    // res.json(updatedItem);

    try {
        let cart = await Cart.findOne({ userId }).populate(
            "products.productId"
        );
        let itemIndex = cart.products.findIndex(
            (p) => p.productId._id == productId
        );
        // console.log(itemIndex);
        if (itemIndex > -1) {
            let productItem = cart.products[itemIndex];
            // console.log(productItem.quantity);
            // console.log(productItem.productId.price);
            cart.bill -= productItem.quantity * productItem.productId.price;
            cart.products.splice(itemIndex, 1);
        }
        cart = await cart.save();
        return res.status(201).send(cart);
    } catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong");
    }
};
