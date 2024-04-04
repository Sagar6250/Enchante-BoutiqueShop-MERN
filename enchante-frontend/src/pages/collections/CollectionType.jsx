import React, { useEffect, useReducer, useState } from "react";
import { RootContainer } from "../../components/layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
    Box,
    Button,
    Container,
    Paper,
    Stack,
    Typography,
    colors,
} from "@mui/material";
import CollectionCard from "../../components/ui/CollectionCard";
import { CustomLink } from "../../components/ui";
import theme from "../../theme";
import styled from "@emotion/styled";

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

    const [collItems, setCollItems] = useState({});
    // console.log(collItems.name);
    useEffect(() => {
        const fetchCollection = async () => {
            try {
                const { data } = await axios.get(`/api/service/${collection}`);
                // console.log(data);
                setCollItems(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchCollection();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            dispatch({ type: "FETCH_REQUEST" });
            try {
                const result = await axios.get(
                    `/api/products/collection/${collection}?limit=10`
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
            <Paper
                elevation={0}
                sx={{
                    mt: "-2rem",
                    backgroundImage: `url(${collItems.imagePath})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center ",
                    height: "50vh",
                }}
            >
                <Paper
                    elevation={0}
                    sx={{
                        backgroundColor: "#00000060",
                        // opacity: "60%",
                        height: "50vh",
                        py: "1rem",
                    }}
                >
                    <Stack justifyContent="space-evenly">
                        <Typography
                            variant="h1"
                            align="center"
                            sx={{
                                my: "1rem",
                                color: theme.palette.primary.main,
                            }}
                        >
                            {collItems.name}
                        </Typography>
                        <Typography
                            variant="body1"
                            align="center"
                            sx={{
                                my: "1rem",
                                color: theme.palette.primary.main,
                            }}
                        >
                            {collItems.description}
                        </Typography>
                    </Stack>
                </Paper>
            </Paper>
            <Stack justifyContent="flex-end">
                {product.map((p, i) => (
                    <CollectionCard
                        key={i}
                        id={i}
                        image={p.imagePath}
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
