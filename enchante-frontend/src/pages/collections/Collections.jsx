import { Stack } from "@mui/material";
import { RootContainer } from "../../components/layout";
import { Link } from "react-router-dom";
import { CustomLink } from "../../components/ui";

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
            <Stack>
                {collections.map((collection, i) => (
                    <CustomLink
                        key={i}
                        to={`${collection
                            .toLowerCase()
                            .replace(/ /g, "-")
                            .replace(/[^\w-]+/g, "")}`}
                    >
                        {collection}
                    </CustomLink>
                ))}
            </Stack>
        </RootContainer>
    );
};

export default collections;
