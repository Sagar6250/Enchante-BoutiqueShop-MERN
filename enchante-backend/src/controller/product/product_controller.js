import Product from "../../model/productModel.js";

export const getAllProducts = async (req, res) => {
    const products = await Product.find();
    if (products) {
        res.send(products);
    }
};

export const getProductBySlug = async (req, res) => {
    const product = await Product.findOne({ slug: req.params.slug });
    if (product) {
        res.send(product);
    }
};

export const getProductById = async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
        res.send(product);
    }
};

export const addNewProduct = async (req, res) => {
    console.log({ file: req.file });
    const newProduct = new Product({
        name: req.body.name,
        slug: req.body.name
            .normalize("NFKD") // split accented characters into their base characters and diacritical marks
            .replace(/[\u0300-\u036f]/g, "") // remove all the accents, which happen to be all in the \u03xx UNICODE block.
            .trim() // trim leading or trailing whitespace
            .toLowerCase() // convert to lowercase
            .replace(/[^a-z0-9 -]/g, "") // remove non-alphanumeric characters
            .replace(/\s+/g, "-") // replace spaces with hyphens
            .replace(/-+/g, "-"),
        price: req.body.price,
        category: req.body.category
            .toLowerCase()
            .replace(/ /g, "-")
            .replace(/[^\w-]+/g, ""),
        count: req.body.count,
        rating: 0,
        numReviews: 0,
        description: req.body.description,
        image: `images/${req.file.filename}`,
    });
    const product = await newProduct.save();
    console.log(req.file);
    res.send({ message: "Product Created", product });
};

export const getProductsByCollection = async (req, res) => {
    const products = await Product.find({
        category: req.params.collection,
    })
        .sort({ createdAt: -1 })
        .limit(10);
    if (products) {
        res.send(products);
    }
};

export const getAllProductsByCollection = async (req, res) => {
    const products = await Product.find({
        category: req.params.collection,
    }).sort({ createdAt: -1 });
    if (products) {
        res.send(products);
    }
};

export const getNewPorducts = async (req, res) => {
    const products = await Product.find().sort({ createdAt: -1 }).limit(5);
    res.send(products);
};
