// import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
// import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
// import { CustomLink } from "../../components/ui";
import axios from "axios";
import { useContext, useEffect, useReducer, useState } from "react";
import { Store } from "../../store/store";
import { useNavigate, useParams } from "react-router-dom";
import {
    Alert,
    // InputLabel,
    MenuItem,
    // Select,
    Snackbar,
    Stack,
} from "@mui/material";

const reducer = (state, action) => {
    switch (action.type) {
        case "FETCH_REQUEST":
            return { ...state, loading: true };
        case "FETCH_SUCCESS":
            return { ...state, loading: false };
        case "FETCH_FAIL":
            return { ...state, loading: false, error: action.payload };
        case "UPDATE_REQUEST":
            return { ...state, loadingUpdate: true };
        case "UPDATE_SUCCESS":
            return { ...state, loadingUpdate: false };
        case "UPDATE_FAIL":
            return { ...state, loadingUpdate: false };
        case "UPLOAD_REQUEST":
            return { ...state, loadingUpload: true, errorUpload: "" };
        case "UPLOAD_SUCCESS":
            return {
                ...state,
                loadingUpload: false,
                errorUpload: "",
            };
        case "UPLOAD_FAIL":
            return {
                ...state,
                loadingUpload: false,
                errorUpload: action.payload,
            };

        default:
            return state;
    }
};

export default function EditProduct() {
    const params = useParams();
    const productSlug = params.productSlug;
    const [{ loading, error, product }, dispatch] = useReducer(reducer, {
        product: [],
        loading: true,
        error: "",
    });

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [count, setCount] = useState("");
    const [description, setDescription] = useState("");

    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { userInfo } = state;

    useEffect(() => {
        const fetchData = async () => {
            dispatch({ type: "FETCH_REQUEST" });
            try {
                const { data } = await axios.get(
                    `/api/products/${productSlug}?searchType=slug`
                );
                setName(data.name);
                setPrice(data.price);
                setCategory(data.category);
                setCount(data.count);
                setDescription(data.description);
                dispatch({ type: "FETCH_SUCCESS", payload: data });
            } catch (err) {
                dispatch({ type: "FETCH_FAIL", payload: err.message });
            }
        };
        fetchData();
    }, [productSlug]);

    const [collections, setCollection] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get("/api/service/");
                setCollection(data);
                console.log(collections);
                // console.log(result);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, []);

    const navigate = useNavigate();

    // const [file, setFile] = useState();
    const [errorMessage, setErrorMessage] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        try {
            const { data } = await axios.patch(
                `/api/products/${productSlug}`,
                {
                    name: formData.get("name"),
                    price: formData.get("price"),
                    category: formData.get("collection"),
                    count: formData.get("count"),
                    description: formData.get("description"),
                    // productImage: formData.get("productImage"),
                }
                // { headers: { "Content-Type": "multipart/form-data" } }
            );
            navigate("/");
        } catch (err) {
            setErrorMessage("Invalid updation");
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Typography component="h1" variant="h5">
                    Edit {product.name}
                </Typography>
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    noValidate
                    sx={{ mt: 1 }}
                >
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="collection"
                        label="Collection"
                        name="collection"
                        // autoComplete="collection"
                        select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        {collections.map((collection) => (
                            <MenuItem
                                key={collection._id}
                                value={collection.slug}
                            >
                                {collection.name}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        margin="normal"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        fullWidth
                        id="name"
                        label="Product Name"
                        name="name"
                        // autoComplete="name"
                        autoFocus
                    />
                    <Stack direction="row" spacing={2} sx={{ mb: "0.5rem" }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="price"
                            label="Price"
                            type="number"
                            id="price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            autoComplete="price"
                        />
                        <TextField
                            margin="normal"
                            value={count}
                            onChange={(e) => setCount(e.target.value)}
                            required
                            fullWidth
                            name="count"
                            label="Count"
                            type="number"
                            id="count"
                            autoComplete="count"
                        />
                    </Stack>
                    {/* <input
                        accept="image/*"
                        // className={classes.input}
                        style={{ display: "none" }}
                        id="file-button"
                        multiple
                        onChange={(e) => setFile(e.target.files[0])}
                        type="file"
                        name="product-image"
                    />
                    <label htmlFor="file-button">
                        <Button
                            fullWidth
                            variant="contained"
                            component="span"
                            // className={classes.button}
                        >
                            Product Image
                        </Button>
                    </label> */}
                    <TextField
                        margin="normal"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        fullWidth
                        multiline
                        name="description"
                        label="Description"
                        id="description"
                        autoComplete="description"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Submit
                    </Button>
                </Box>
            </Box>
            <Snackbar open={errorMessage} autoHideDuration={6000}>
                <Alert severity="error" sx={{ width: "100%" }}>
                    {errorMessage}
                </Alert>
            </Snackbar>
        </Container>
    );
}
