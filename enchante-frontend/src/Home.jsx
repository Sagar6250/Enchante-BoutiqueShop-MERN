import { RootContainer } from "./components/layout";
import { Box, Stack, Typography } from "@mui/material";
// import NewArrivals from "./data/LandingPage";
import ClothCard from "./components/ui/Card";
import { Blue, Brown, Fashion, SaleBanner } from "./assets/LandingPage/home";
import Carousel from "react-material-ui-carousel";
import { useEffect, useReducer } from "react";
import axios from "axios";

const reducer = (state, action) => {
    switch (action.type) {
        case "FETCH_REQUEST":
            return { ...state, loading: true };
        case "FETCH_SUCCESS":
            return { ...state, products: action.payload, loading: false };
        case "FETCH_FAIL":
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

const Home = () => {
    // const [products, setProducts] = useState([]);
    const [{ loading, error, products }, dispatch] = useReducer(reducer, {
        products: [],
        loading: true,
        error: "",
    });

    useEffect(() => {
        const fetchData = async () => {
            // const result = await axios.get("/api/products");
            // setProducts(result.data);
            dispatch({ type: "FETCH_REQUEST" });
            try {
                const result = await axios.get("/api/products/new");
                dispatch({ type: "FETCH_SUCCESS", payload: result.data });
            } catch (err) {
                dispatch({ type: "FETCH_FAIL", payload: err.message });
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <RootContainer>
                <Carousel
                    indicators="false"
                    interval={4000}
                    stopAutoPlayOnHover="false"
                    navButtonsAlwaysInvisible="true"
                >
                    <img src={Blue} style={{ padding: 0, width: "100%" }} />
                    <img src={Fashion} style={{ padding: 0, width: "100%" }} />
                    <img src={Brown} style={{ padding: 0, width: "100%" }} />
                </Carousel>
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    gutterBottom
                    sx={{ mt: "1.5rem" }}
                >
                    New Arrivals
                </Typography>
                <Typography
                    component="h2"
                    variant="body1"
                    align="center"
                    paragraph
                >
                    New Arrivals for your look
                </Typography>

                <Stack
                    direction="row"
                    spacing={2}
                    useFlexGap
                    flexWrap="wrap"
                    justifyContent="space-evenly"
                >
                    {products.map((product) => (
                        <ClothCard
                            key={product._id}
                            name={product.name}
                            price={product.price}
                            image={product.image}
                            slug={product.slug}
                        />
                    ))}
                </Stack>
                <Box sx={{ my: "2rem" }}>
                    <img
                        src={SaleBanner}
                        style={{ padding: 0, width: "100%" }}
                    />
                </Box>
            </RootContainer>
        </>
    );
};

export default Home;
