import Collection from "../../model/collectionModel.js";

export const getAllCollections = async (req, res) => {
    const collections = await Collection.find();
    if (collections) {
        res.send(collections);
    }
};

export const addNewCollection = async (req, res) => {
    // console.log({ file: req.file });
    const newCollection = new Collection({
        name: req.body.name,
        slug: req.body.name
            .normalize("NFKD") // split accented characters into their base characters and diacritical marks
            .replace(/[\u0300-\u036f]/g, "") // remove all the accents, which happen to be all in the \u03xx UNICODE block.
            .trim() // trim leading or trailing whitespace
            .toLowerCase() // convert to lowercase
            .replace(/[^a-z0-9 -]/g, "") // remove non-alphanumeric characters
            .replace(/\s+/g, "-") // replace spaces with hyphens
            .replace(/-+/g, "-"),
        description: req.body.description,
        // image: `images/${req.file.filename}`,
        image: req.body.image,
    });
    const collection = await newCollection.save();
    // console.log(req.file);
    res.send({ message: "Collection Created", collection });
};
