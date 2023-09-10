import Cart from "../../model/cardModel.js";
import Product from "../../model/productModel.js";


export const getAllCartItems = async (req, res) => {
    const userId = req.params.id;
    try {
        let cart = await Cart.findOne({ userId });
        if (cart && cart.products.length > 0) {
            res.send(cart);
        } else {
            res.send(null);
        }
    } catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong");
    }
};

export const add_cart_item = async (req, res) => {
    const productSlug = req.params.slug;
    const { userId, quantity } = req.body;

    try {
        let cart = await Cart.findOne({ userId });
        let item = await Product.findOne({ slug: productSlug });
        if (!item) {
            res.status(404).send("Item not found!");
        }
        const price = item.price;
        const name = item.name;

        if (cart) {
            // if cart exists for the user
            let itemIndex = cart.products.findIndex(
                (p) => p.productId == productId
            );

            // Check if product exists or not
            if (itemIndex > -1) {
                let productItem = cart.items[itemIndex];
                productItem.quantity += quantity;
                cart.items[itemIndex] = productItem;
            } else {
                cart.items.push({ productId, name, quantity, price });
            }
            cart.bill += quantity * price;
            cart = await cart.save();
            return res.status(201).send(cart);
        } else {
            // no cart exists, create one
            const newCart = await Cart.create({
                userId,
                items: [{ productId, name, quantity, price }],
                bill: quantity * price,
            });
            return res.status(201).send(newCart);
        }
    } catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong");
    }
};

export const delete_item = async (req, res) => {
    const userId = req.params.userId;
    const productId = req.params.itemId;
    try {
        let cart = await Cart.findOne({ userId });
        let itemIndex = cart.items.findIndex((p) => p.productId == productId);
        if (itemIndex > -1) {
            let productItem = cart.items[itemIndex];
            cart.bill -= productItem.quantity * productItem.price;
            cart.items.splice(itemIndex, 1);
        }
        cart = await cart.save();
        return res.status(201).send(cart);
    } catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong");
    }
};
