import { Button, Stack, Typography } from "@mui/material";
import { RootContainer } from "../../components/layout";
import { Link } from "react-router-dom";
import { CustomLink } from "../../components/ui";
import ImageButton from "../../components/ui/ImageButton";
import { useEffect, useState } from "react";
import axios from "axios";

const Collections = () => {
    // const collections = [
    //     "Traditional Wear",
    //     "Bridal Wear",
    //     "Casual Wear",
    //     "Festive Wear",
    //     "Accessories",
    //     "Men's Wear",
    //     "Kid's Wear",
    //     "Vintage and Retro",
    // ];

    const [collections, setCollection] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get("/api/service");
                setCollection(data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, []);

    // console.log(collections);
    return (
        <RootContainer>
            <Typography variant="h1" align="center" sx={{ m: "2rem" }}>
                Collections
            </Typography>
            <Stack
                direction="row"
                spacing={3}
                useFlexGap
                flexWrap="wrap"
                justifyContent="center"
            >
                {collections.map((collection, i) => (
                    <ImageButton
                        key={i}
                        name={collection.name}
                        slug={collection.slug}
                        image={collection.imagePath}
                    />
                ))}
            </Stack>
        </RootContainer>
    );
};

export default Collections;

// <CustomLink
//     key={i}
//     to={`${collection
//         .toLowerCase()
//         .replace(/ /g, "-")
//         .replace(/[^\w-]+/g, "")}`}
// >
//     {collection}
// </CustomLink>
//     <Button
//         key={i}
//         variant="contained"
//         component={Link}
//         to={`${collection
//             .toLowerCase()
//             .replace(/ /g, "-")
//             .replace(/[^\w-]+/g, "")}`}
//     >
//         {collection}
//     </Button>
