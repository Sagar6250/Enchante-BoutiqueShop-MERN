import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import { CloudinaryStorage } from "multer-storage-cloudinary";

if (process.env.NODE_ENV !== "production") {
    dotenv.config();
}

// console.log(process.env.CLOUDINARY_KEY);/

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
});

const storageFunc = (folderName) => {
    const storage = new CloudinaryStorage({
        cloudinary,
        params: {
            folder: `Enchante/${folderName ?? ""}`,
            allowedFormats: ["jpeg", "png", "jpg", "pdf"],
        },
    });
    return storage;
};

export { cloudinary, storageFunc };
