import { Router } from "express";
import {
    addNewCollection,
    getAllCollections,
} from "../../controller/product/serviceController.js";

const router = Router();

router.get("/getAllCollections", getAllCollections);

router.post("/createCollection", addNewCollection);

// router.delete();

// router.get("/getAllServices");

// router.post("/createService");

export default router;
