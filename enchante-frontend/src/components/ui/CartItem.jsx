import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import {
    Button,
    CardActionArea,
    CardActions,
    Container,
    Stack,
} from "@mui/material";
import axios from "axios";
import { useContext } from "react";
import { Store } from "../../store/store";
import { useNavigate } from "react-router-dom";

const CartItem = ({ id, name, price, quantity, image }) => {
    // const theme = useTheme();
    const { state } = useContext(Store);
    const { userInfo } = state;
    const navigate = useNavigate();

    const deleteItem = async () => {
        try {
            console.log(userInfo._id);
            console.log(id);
            await axios.delete(`api/cart/removeFromCart/${userInfo._id}/${id}`);
            window.location.reload();
            // navigate("/cart");
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <Card sx={{ width: "100%", display: "flex" }}>
            <Stack
                width="70%"
                alignItems="center"
                justifyContent="space-around"
                sx={{
                    direction: "column",
                }}
            >
                <CardContent>
                    <Typography
                        sx={{ m: "1rem" }}
                        gutterBottom
                        variant="h3"
                        component="div"
                    >
                        {name}
                    </Typography>
                    <Stack direction="row" spacing={2}>
                        <Typography
                            // sx={{ m: "1rem" }}
                            variant="body1"
                            color="text.secondary"
                        >
                            Quantity: {quantity}
                        </Typography>
                        <Typography
                            // sx={{ m: "1rem" }}
                            variant="body1"
                            color="text.secondary"
                        >
                            Price: {price}
                        </Typography>
                    </Stack>
                </CardContent>
                <CardActions>
                    {/* <Button size="small">s</Button> */}
                    <Button
                        variant="outlined"
                        size="small"
                        onClick={deleteItem}
                    >
                        Remove from Cart
                    </Button>
                </CardActions>
            </Stack>
            <CardMedia
                component="img"
                height="200"
                sx={{
                    objectFit: "cover",
                    width: "30%",
                    mr: 0,
                    ml: "auto",
                }}
                image={image}
            />
        </Card>
    );
};

export default CartItem;
