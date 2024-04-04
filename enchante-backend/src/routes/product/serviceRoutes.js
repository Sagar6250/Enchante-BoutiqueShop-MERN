import { Router } from "express";
import {
    addNewCollection,
    getAllCollections,
    getCollection,
    updateCollection,
} from "../../controller/product/serviceController.js";
import { uploaderFunc } from "../../cloudinary/multerSetup.js";

const router = Router();

const upload = uploaderFunc("collections");

router
    .route("/")
    .get(getAllCollections)
    .post(upload.single("collectionImage"), addNewCollection);

router.route("/:slug").get(getCollection).patch(updateCollection);

export default router;

// router.get("/getAllCollections", getAllCollections);

// router.get("/getCollectionDoc/:slug", getCollection);

// router.patch("/updateCollection/:slug", updateCollection);

// router.post(
//     "/createCollection",
//     upload.single("collectionImage"),
//     addNewCollection
// );

// router.delete();

// router.get("/getAllServices");

// router.post("/createService");
