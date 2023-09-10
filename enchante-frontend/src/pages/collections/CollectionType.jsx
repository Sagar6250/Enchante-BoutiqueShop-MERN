import React, { useEffect, useReducer } from "react";
import { RootContainer } from "../../components/layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Box, Button, Stack, Typography } from "@mui/material";
import CollectionCard from "../../components/ui/CollectionCard";
import { CustomLink } from "../../components/ui";
import theme from "../../theme";

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

const CollectionType = () => {
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
                    `/api/products/getCollection/${collection}`
                );
                // console.log(result);
                dispatch({ type: "FETCH_SUCCESS", payload: result.data });
            } catch (err) {
                dispatch({ type: "FETCH_FAIL", payload: err.message });
            }
        };
        fetchData();
    }, []);

    var words = collection.split("-");
    const name = words
        .map(function (word) {
            return (
                word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()
            );
        })
        .join(" ");

    return (
        <RootContainer>
            <Typography variant="h1" align="center" sx={{ my: "1rem" }}>
                {name}
            </Typography>
            <Stack justifyContent="flex-end">
                {product.map((p, i) => (
                    <CollectionCard
                        key={i}
                        id={i}
                        image={p.image}
                        name={p.name}
                        description={p.description}
                    />
                ))}
            </Stack>
            <Box align="center" sx={{ m: "3rem" }}>
                <CustomLink
                    sx={{
                        p: "1rem",
                        color: theme.palette.primary.main,
                        backgroundColor: theme.palette.secondary.main,
                        borderRadius: "4px",
                        "&:hover": {
                            color: theme.palette.primary.main,
                            backgroundColor: theme.palette.secondary.dark,
                            borderRadius: "4px",
                        },
                    }}
                    to={`/collections/${collection}/gallery`}
                >
                    View All
                </CustomLink>
            </Box>
        </RootContainer>
    );
};

export default CollectionType;
