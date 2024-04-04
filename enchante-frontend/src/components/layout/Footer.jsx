import { Avatar, Box, Button, Stack, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import theme from "../../theme";
import { EnchanteFooter } from "../../assets/Logo";

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{ bgcolor: theme.palette.senary.main }}
            py={"1rem"}
            mt="3rem"
            mb="0"
        >
            <Stack
                direction="row"
                justifyContent="space-around"
                // divider={<Divider variant="middle" flexItem />}
                alignItems="center"
                spacing={3}
            >
                <Box sx={{ width: "20%" }}>
                    <Stack
                        direction="column"
                        justifyContent="space-around"
                        alignItems="center"
                    >
                        <Avatar
                            src={EnchanteFooter}
                            variant="square"
                            sx={{
                                mt: "-1.5rem",
                                width: "15rem",
                                height: "15rem",
                            }}
                        />
                        <Typography
                            variant="body2"
                            sx={{ color: theme.palette.primary.main }}
                        >
                            Indulge in Luxurious Style: Discover Uniqueness at
                            Our Exquisite Boutique, Where Every Garment Tells a
                            Tale of Elegance.
                        </Typography>
                    </Stack>
                </Box>
                <Box sx={{ width: "20%" }}></Box>
                <Box sx={{ width: "20%" }}>
                    <Stack
                        direction="column"
                        justifyContent=""
                        alignItems="flex-end"
                    >
                        <Button
                            href="https://mui.com/material-ui/react-divider/"
                            variant="text"
                            sx={{
                                // my: "0rem",
                                fontSize: "0.8rem",
                                color: theme.palette.primary.main,
                            }}
                        >
                            Dashboard
                        </Button>
                        <Button
                            href="https://mui.com/material-ui/react-divider/"
                            variant="text"
                            sx={{
                                // my: "0.5rem",
                                fontSize: "0.8rem",
                                color: theme.palette.primary.main,
                            }}
                        >
                            About us
                        </Button>
                        <Button
                            href="https://mui.com/material-ui/react-divider/"
                            variant="text"
                            sx={{
                                // my: "0.5rem",
                                fontSize: "0.8rem",
                                color: theme.palette.primary.main,
                            }}
                        >
                            Return & Refund Policy
                        </Button>
                        <Button
                            href="https://mui.com/material-ui/react-divider/"
                            variant="text"
                            sx={{
                                // my: "0.5rem",
                                fontSize: "0.8rem",
                                color: theme.palette.primary.main,
                            }}
                        >
                            Privacy policy
                        </Button>
                        <Button
                            href="https://mui.com/material-ui/react-divider/"
                            variant="text"
                            sx={{
                                // my: "0.5rem",
                                fontSize: "0.8rem",
                                color: theme.palette.primary.main,
                            }}
                        >
                            Contact us
                        </Button>
                    </Stack>
                </Box>
                <Box sx={{ width: "20%" }}>
                    <Stack
                        direction="column"
                        justifyContent="space-around"
                        alignItems="flex-start"
                    >
                        <Typography
                            align={"center"}
                            variant="h3"
                            sx={{
                                color: theme.palette.primary.main,
                                mx: "auto",
                            }}
                        >
                            Contact us
                        </Typography>
                        <Stack
                            direction="row"
                            justifyContent="space-around"
                            alignItems="flex-start"
                            mt={"0.5rem"}
                        >
                            <PlaceIcon
                                sx={{
                                    color: theme.palette.primary.main,
                                    height: "1.2rem",
                                }}
                            />
                            <Typography
                                mx={"0.5rem"}
                                variant="body2"
                                sx={{ color: theme.palette.primary.main }}
                            >
                                123 Opaline Crescent Auroraville, Eldorano 98765
                                Mysticland
                            </Typography>
                        </Stack>
                        <Stack
                            direction="row"
                            justifyContent="space-around"
                            alignItems="flex-start"
                            mt={"0.5rem"}
                        >
                            <PhoneIcon
                                sx={{
                                    color: theme.palette.primary.main,
                                    height: "1.2rem",
                                }}
                            />
                            <Typography
                                mx={"0.5rem"}
                                variant="body2"
                                sx={{ color: theme.palette.primary.main }}
                            >
                                +91 98765 43210
                            </Typography>
                        </Stack>
                        <Stack
                            direction="row"
                            justifyContent="space-around"
                            alignItems="flex-start"
                            mt={"0.5rem"}
                        >
                            <EmailIcon
                                sx={{
                                    color: theme.palette.primary.main,
                                    height: "1.2rem",
                                }}
                            />
                            <Typography
                                mx={"0.5rem"}
                                variant="body2"
                                sx={{ color: theme.palette.primary.main }}
                            >
                                contact@enchanteboutiquehub.com
                            </Typography>
                        </Stack>
                        <Stack
                            direction="row"
                            justifyContent="center"
                            alignItems="centre"
                            spacing={5}
                            mt={"2rem"}
                        >
                            <FacebookIcon
                                sx={{
                                    color: theme.palette.primary.main,
                                    height: "1.2rem",
                                }}
                            />
                            <InstagramIcon
                                sx={{
                                    color: theme.palette.primary.main,
                                    height: "1.2rem",
                                }}
                            />
                            <TwitterIcon
                                sx={{
                                    color: theme.palette.primary.main,
                                    height: "1.2rem",
                                }}
                            />
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    );
};

export default Footer;
