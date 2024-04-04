import { useEffect, useReducer } from "react";
import { RootContainer } from "../../components/layout";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Stack } from "@mui/material";
import ClothCard from "../../components/ui/Card";

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

const Gallery = () => {
    const params = useParams();
    const collection = params.collection;
    const [{ loading, error, product }, dispatch] = useReducer(reducer, {
        product: [],
        loading: true,
        error: "",
    });

    useEffect(() => {
        const fetchData = async () => {
            dispatch({ type: "FETCH_REQUEST" });
            try {
                const result = await axios.get(
                    `/api/products/collection/${collection}`
                );
                // console.log(result);
                dispatch({ type: "FETCH_SUCCESS", payload: result.data });
            } catch (err) {
                dispatch({ type: "FETCH_FAIL", payload: err.message });
            }
        };
        fetchData();
    }, []);

    return (
        <RootContainer>
            <Stack
                direction="row"
                spacing={2}
                useFlexGap
                flexWrap="wrap"
                justifyContent="space-evenly"
            >
                {product.map((product) => (
                    <ClothCard
                        key={product._id}
                        name={product.name}
                        price={product.price}
                        image={product.imagePath}
                        slug={product.slug}
                    />
                ))}
            </Stack>
        </RootContainer>
    );
};

export default Gallery;
