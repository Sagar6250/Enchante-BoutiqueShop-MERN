import { Button, Stack } from "@mui/material";
import { RootContainer } from "../../components/layout";
import { Link } from "react-router-dom";
import { CustomLink } from "../../components/ui";
import ImageButton from "../../components/ui/ImageButton";

const collections = () => {
    const collections = [
        "Traditional Wear",
        "Bridal Wear",
        "Casual Wear",
        "Festive Wear",
        "Accessories",
        "Men's Wear",
        "Kid's Wear",
        "Vintage and Retro",
    ];

    return (
        <RootContainer>
            <Stack
                direction="row"
                spacing={3}
                useFlexGap
                flexWrap="wrap"
                justifyContent="center"
            >
                {collections.map((collection, i) => (
                    <ImageButton key={i} name={collection} image={"images"} />
                ))}
            </Stack>
        </RootContainer>
    );
};

export default collections;

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
