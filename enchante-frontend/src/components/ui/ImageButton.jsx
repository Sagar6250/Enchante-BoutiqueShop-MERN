import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const Image_Button = styled(ButtonBase)(({ theme }) => ({
    // component: { Link },
    position: "relative",
    height: 200,
    [theme.breakpoints.down("sm")]: {
        width: "100% !important", // Overrides inline-style
        height: 100,
    },
    "&:hover, &.Mui-focusVisible": {
        zIndex: 1,
        "& .MuiImageBackdrop-root": {
            opacity: 0.15,
        },
        "& .MuiImageMarked-root": {
            opacity: 0,
        },
        "& .MuiTypography-root": {
            border: "4px solid currentColor",
        },
    },
}));

const ImageSrc = styled("span")({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
});

const Image = styled("span")(({ theme }) => ({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
}));
const ImageButton = ({ name, image, slug }) => {
    console.log(`url('${image}')`);
    return (
        <Image_Button
            focusRipple
            key={name}
            style={{
                width: "30%",
            }}
            component={Link}
            to={`${slug}`}
        >
            <ImageSrc
                style={{
                    backgroundImage: `url('${
                        import.meta.env.VITE_API_URL + "/" + image
                    }')`,
                }}
            />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image>
                <Typography
                    component="span"
                    variant="body 1"
                    color="inherit"
                    sx={{
                        position: "relative",
                        p: 4,
                        pt: 2,
                        pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                    }}
                >
                    {name}
                    <ImageMarked className="MuiImageMarked-root" />
                </Typography>
            </Image>
        </Image_Button>
    );
};

export default ImageButton;
