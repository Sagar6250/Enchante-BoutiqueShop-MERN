import { Router } from "express";
import {
    addNewProduct,
    deleteProduct,
    getAllProducts,
    getAllProductsByCollection,
    getNewPorducts,
    // getNewArrivals,
    getProductById,
    getProductBySlug,
    getProductsByCollection,
    updateProduct,
} from "../../controller/product/productController.js";
import { isAdmin, isAuth } from "../../utils/auth_util.js";
import { uploaderFunc } from "../../cloudinary/multerSetup.js";

// import multer from "multer";

const router = Router();

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, "public/images");
//     },
//     filename: function (req, file, cb) {
//         // const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//         cb(null, Date.now() + "-" + file.originalname);
//     },
// });

const upload = uploaderFunc("products");

router.get("/", getAllProducts);

router.get("/slug/:slug", getProductBySlug);

router.get("/new", getNewPorducts);

router.get("/:id", getProductById);

router.post(
    "/addProduct",
    // isAuth,
    // isAdmin,
    upload.single("productImage"),
    addNewProduct
);

router.put("/:slug/updateProduct", updateProduct);

router.delete("/delete/:id", deleteProduct);

router.get("/getCollection/:collection", getProductsByCollection);

router.get("/getAllCollection/:collection", getAllProductsByCollection);

export default router;

//comment
