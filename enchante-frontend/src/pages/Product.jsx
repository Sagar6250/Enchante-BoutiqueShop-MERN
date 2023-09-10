import { Box, Button, Divider, Rating, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { RootContainer } from "../components/layout";
import NewArrivals from "../data/LandingPage";
// import { CounterButton } from "../components/ui";
import theme from "../theme";
import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { useContext, useEffect, useReducer } from "react";
import axios from "axios";
import { Store } from "../store/store";

const reducer = (state, action) => {
    switch (action.type) {
        case "FETCH_REQUEST":
            return { ...state, loading: true };
        case "FETCH_SUCCESS":
            return { ...state, product: action.payload, loading: false };
        case "FETCH_FAIL":
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

const Product = () => {
    const params = useParams();
    const productSlug = params.productSlug;
    const [{ loading, error, product }, dispatch] = useReducer(reducer, {
        product: [],
        loading: true,
        error: "",
    });

    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { userInfo } = state;

    useEffect(() => {
        const fetchData = async () => {
            dispatch({ type: "FETCH_REQUEST" });
            try {
                const result = await axios.get(
                    `/api/products/slug/${productSlug}`
                );
                // console.log(result);
                dispatch({ type: "FETCH_SUCCESS", payload: result.data });
            } catch (err) {
                dispatch({ type: "FETCH_FAIL", payload: err.message });
            }
        };
        fetchData();
    }, []);

    const addToCart = async (event) => {
        event.preventDefault();
        
    };
    // const product = NewArrivals.products.find((el) => el.slug === productSlug);

    return (
        <RootContainer>
            <Stack
                direction="row"
                // divider={<Divider orientation="vertical" flexItem />}
                justifyContent="flex-start"
                alignItems="flex-start"
            >
                <Box sx={{ m: "2rem", width: "35%" }}>
                    <img
                        style={{ width: "100%", margin: 0, padding: 0 }}
                        src={import.meta.env.VITE_API_URL + "/" + product.image}
                    />
                </Box>
                <Stack
                    Stack
                    sx={{ my: "2rem", mx: "auto" }}
                    alignItems="center"
                    width="65%"
                >
                    <Typography variant="h1">{product.name}</Typography>
                    <Stack
                        sx={{
                            mx: "3rem",
                            my: "1rem",
                            border: "1px solid" + theme.palette.quinary.light,
                            borderRadius: "4px",
                            p: "2px",
                        }}
                        direction="row"
                        divider={<Divider orientation="vertical" flexItem />}
                    >
                        <Typography sx={{ fontSize: "0.8rem", mx: "1rem" }}>
                            {product.rating}
                        </Typography>
                        <Rating
                            name="read-only"
                            value={product.rating}
                            readOnly
                            precision={0.5}
                            size="small"
                            icon={
                                <StarIcon
                                    fontSize="inherit"
                                    sx={{
                                        color: theme.palette.secondary.dark,
                                    }}
                                />
                            }
                            emptyIcon={
                                <StarOutlineIcon
                                    fontSize="inherit"
                                    sx={{
                                        color: theme.palette.quinary.light,
                                    }}
                                />
                            }
                        />
                    </Stack>
                    <Divider flexItem variant="middle" />
                    <Typography
                        variant="h3"
                        sx={{ my: "0.5rem", fontWeight: "bold" }}
                    >
                        ₹{product.price}
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{ color: theme.palette.secondary.dark }}
                    >
                        inclusive of all taxes
                    </Typography>
                    <Stack
                        direction="row"
                        width="100%"
                        justifyContent="center"
                        sx={{ mt: "1rem" }}
                    >
                        <Button
                            variant="outlined"
                            sx={{ m: "0.5rem", width: "45%" }}
                            onClick={addToCart}
                        >
                            Add to Cart
                        </Button>
                        <Button
                            variant="contained"
                            sx={{ m: "0.5rem", width: "45%" }}
                        >
                            Buy it Now
                        </Button>
                    </Stack>
                </Stack>
            </Stack>
        </RootContainer>
    );
};

export default Product;
