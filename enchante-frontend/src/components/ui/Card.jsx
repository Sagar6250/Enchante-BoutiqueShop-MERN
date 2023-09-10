// import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, hexToRgb } from "@mui/material";
import theme from "../../theme";
import { Link } from "react-router-dom";
// import theme from "../../theme";

const ClothCard = ({ name, price, image, slug }) => {
    return (
        <Card
            sx={{
                width: 245,
                boxShadow: `1px 1px 6px ${hexToRgb(
                    theme.palette.quinary.main + "20"
                )}`,
            }}
        >
            <CardActionArea component={Link} to={"/products/" + slug}>
                <CardMedia
                    component="img"
                    height="315"
                    sx={{ objectFit: "cover" }}
                    image={import.meta.env.VITE_API_URL + "/" + image}
                    alt={name}
                />
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="body1"
                        component="div"
                        align="center"
                    >
                        {name}
                    </Typography>
                    <Typography
                        variant="body2"
                        align="center"
                        sx={{ color: theme.palette.secondary.dark }}
                    >
                        ₹{price}.00
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default ClothCard;
