import { Router } from "express";
import {
    addNewProduct,
    deleteProduct,
    getCollectionProducts,
    getProductByUid,
    getProducts,
    updateProduct,
} from "../../controller/product/productController.js";
import { isAdmin, isAuth } from "../../utils/auth_util.js";
import { uploaderFunc } from "../../cloudinary/multerSetup.js";

// import multer from "multer";

const router = Router();

const upload = uploaderFunc("products");

router
    .route("/")
    .get(getProducts)
    .post(upload.single("productImage"), addNewProduct);

router
    .route("/:uid")
    .get(getProductByUid)
    .patch(updateProduct)
    .delete(deleteProduct);

router.route("/collection/:collection").get(getCollectionProducts);

export default router;

//comment
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, "public/images");
//     },
//     filename: function (req, file, cb) {
//         // const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//         cb(null, Date.now() + "-" + file.originalname);
//     },
// });

// router.get("/", getAllProducts);

// router.get("/slug/:slug", getProductBySlug);

// router.get("/new", getNewPorducts);

// router.get("/:id", getProductById);
// /api/products/:unique?searchType=slug / id
// router.post(
//     "/addProduct",
//     // isAuth,
//     // isAdmin,
//     upload.single("productImage"),
//     addNewProduct
// );

// router.put("/:slug/updateProduct", updateProduct);

// router.delete("/delete/:id", deleteProduct);

// router.get("/getCollection/:collection", getProductsByCollection);

// router.get("/getAllCollection/:collection", getAllProductsByCollection);
