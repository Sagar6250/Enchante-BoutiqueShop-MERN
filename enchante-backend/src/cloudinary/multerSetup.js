import multer from "multer";
import { storageFunc } from "./cloudinarySetup.js";

const uploaderFunc = (path) => {
    const storage = storageFunc(path);

    const uploader = multer({ storage });
    return uploader;
};

export { uploaderFunc };
