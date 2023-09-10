/* eslint-disable react/no-unescaped-entities */
import { Box, Stack, Typography } from "@mui/material";
import { RootContainer } from "../components/layout";

const About = () => {
    return (
        <RootContainer>
            <Stack
                direction="column"
                justifyContent="flex-start"
                alignItems="center"
                spacing={5}
                sx={{ mx: "15rem" }}
            >
                <Box>
                    <Typography variant="h2" align="center" sx={{ mb: "1rem" }}>
                        About
                    </Typography>
                    <Typography variant="body1">
                        Welcome to Enchantè Boutique, where style meets soul,
                        elegance meets fashion and fashion is a celebration of
                        your individuality. Our boutique is more than just a
                        place to shop, it's a space where your unique fashion
                        journey unfolds. Discover a world of style and
                        sophistication. Founded on a passion for fashion, we
                        offer a curated collection that transcends trends,
                        embracing timeless elegance and contemporary flair.
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="h2" align="center" sx={{ mb: "1rem" }}>
                        Our Story
                    </Typography>
                    <Typography variant="body1">
                        Our story is one of dedication to offering a distinctive
                        range of clothing, accessories, and lifestyle items. We
                        believe that fashion is more than just clothing; it's an
                        expression of your individuality. Founded in the heart
                        of Bangalore, Enchantè Boutique was born from a dream
                        and a desire to bring exceptional fashion to our
                        community. Our founder, Deo the great (insert founder's
                        name not mine), envisioned a boutique that not only
                        offered exquisite clothing but also an experience that
                        inspires confidence and self-expression. From exquisite
                        evening gowns to casual chic attire, our selections
                        cater to diverse tastes and occasions.
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="h2" align="center" sx={{ mb: "1rem" }}>
                        Our Philosophy
                    </Typography>
                    <Typography variant="body1">
                        At Enchantè Boutique, we believe that clothing is an art
                        form and fashion should be a canvas for self-expression.
                        Each piece in our collection is handpicked to merge
                        classic elegance with contemporary flair and resonate
                        with the soul and empower you to make a statement. We're
                        not just about selling clothes; we're about helping you
                        tell your story through what you wear.
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="h2" align="center" sx={{ mb: "1rem" }}>
                        What We Offer
                    </Typography>
                    <Typography variant="body1">
                        Explore our carefully curated selection of clothing,
                        accessories, and lifestyle items that radiate
                        sophistication and charm. From luxurious evening
                        ensembles to graceful evening dresses to casual chic
                        attire, our collections cater to all aspects of your
                        life. We celebrate diversity, offering a wide range of
                        sizes and styles that embrace the uniqueness of every
                        individual.
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="h2" align="center" sx={{ mb: "1rem" }}>
                        Why Choose Us
                    </Typography>
                    <ul>
                        <li>
                            <Typography variant="body1">
                                Unique Finds: We take pride in offering
                                one-of-a-kind items you won't find anywhere
                                else. We're passionate about helping you
                                discover pieces that resonate with your
                                personality.
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="body1">
                                Quality Assurance: We're dedicated to quality.
                                Every item in our boutique goes through a
                                meticulous inspection to ensure it meets our
                                high standards.
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="body1">
                                Personalised Service: Our knowledgeable team is
                                here to provide personal styling advice and
                                assistance. We're not just a store; we're your
                                fashion confidants.
                            </Typography>
                        </li>
                    </ul>
                </Box>
                <Box>
                    <Typography variant="h2" align="center" sx={{ mb: "1rem" }}>
                        Visit Us
                    </Typography>
                    <Typography variant="body1">
                        Step into our inviting boutique at Jakkur road, North,
                        Shivanahalli, Yelahanka (totally not my basement) or
                        explore our online store at enchanteboutique.com. Follow
                        us on social media for the latest arrivals, style tips,
                        and exclusive promotions!
                    </Typography>
                </Box>
            </Stack>
        </RootContainer>
    );
};

export default About;
