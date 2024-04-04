import { cloudinary } from "../../cloudinary/cloudinarySetup.js";
import Product from "../../model/productModel.js";
import { createSlug } from "../../utils/createSlug.js";

export const getProducts = async (req, res) => {
    let products;
    if (req.query.limit) {
        products = await Product.find()
            .sort({ createdAt: -1 })
            .limit(req.query.limit);
    } else {
        products = await Product.find();
    }
    if (products) {
        res.send(products);
    }
};

export const getProductByUid = async (req, res) => {
    let product;
    // console.log(req.query.searchType);
    if (req.query.searchType === "slug") {
        product = await Product.findOne({ slug: req.params.uid });
    } else if (req.query.searchType === "id") {
        product = await Product.findById(req.params.uid);
    }
    if (product) {
        res.send(product);
    } else {
        console.log("not found");
    }
};

export const addNewProduct = async (req, res) => {
    // console.log({ file: req.file });
    const newProduct = new Product({
        name: req.body.name,
        price: req.body.price,
        category: req.body.category
            .toLowerCase()
            .replace(/ /g, "-")
            .replace(/[^\w-]+/g, ""),
        count: req.body.count,
        rating: 0,
        numReviews: 0,
        description: req.body.description,
        imageName: req.file.filename,
        imagePath: req.file.path,
    });
    newProduct.slug = createSlug(req.body.name, newProduct._id.toString());
    const product = await newProduct.save();
    // console.log(req.file);
    res.send({ message: "Product Created", product });
};

export const updateProduct = async (req, res) => {
    const product = await Product.findOne({ slug: req.params.uid });
    if (product) {
        product.name = req.body.name;
        product.slug = createSlug(req.body.name, product._id.toString());
        product.price = req.body.price;
        product.count = req.body.count;
        product.category = req.body.category
            .toLowerCase()
            .replace(/ /g, "-")
            .replace(/[^\w-]+/g, "");
        product.description = req.body.description;
    }
    await product.save();
    // console.log(req.file);
    res.send({ message: "Product Updated", product });
};

export const deleteProduct = async (req, res) => {
    const product = await Product.findById(req.params.uid);
    await cloudinary.uploader.destroy(product.imageName);
    if (product) {
        await product.deleteOne();
        res.send({ message: "Product Deleted" });
    } else {
        res.status(404).send({ message: "Product Not Found" });
    }
};

export const getCollectionProducts = async (req, res) => {
    let products;
    if (req.query.limit) {
        products = await Product.find({
            category: req.params.collection,
        })
            .sort({ createdAt: -1 })
            .limit(req.query.limit);
        // res.send({ message: "hit" });
    } else {
        products = await Product.find({
            category: req.params.collection,
        }).sort({ createdAt: -1 });
    }
    if (products) {
        res.send(products);
    }
};
