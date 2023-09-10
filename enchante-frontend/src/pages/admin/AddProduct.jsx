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
import { useContext, useEffect, useState } from "react";
import { Store } from "../../store/store";
import { useNavigate } from "react-router-dom";
import {
    Alert,
    // InputLabel,
    MenuItem,
    // Select,
    Snackbar,
    Stack,
} from "@mui/material";
export default function AddProduct() {
    const collections = [
        "Traditional Wear",
        "Bridal Wear",
        "Casual Wear",
        "Festive Wear",
        "Accessories",
        "Men's Wear",
        "Kid's Wear",
        "Vintage and Retro",
    ];

    const navigate = useNavigate();

    const { state } = useContext(Store);
    const { userInfo } = state;

    const [file, setFile] = useState();
    const [errorMessage, setErrorMessage] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        formData.append("productImage", file);
        try {
            const { data } = await axios.post(
                "/api/products/addProduct",
                {
                    name: formData.get("name"),
                    price: formData.get("price"),
                    category: formData.get("collection"),
                    // category: "lehenga",
                    count: formData.get("count"),
                    description: formData.get("description"),
                    productImage: formData.get("productImage"),
                },
                { headers: { "Content-Type": "multipart/form-data" } }
            );
            navigate("/");
        } catch (err) {
            setErrorMessage("Invalid Email Id or Password");
        }
    };

    useEffect(() => {
        if (userInfo) {
            navigate("/");
        }
    }, [navigate, userInfo]);

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
                    Add Product Item
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
                        autoComplete="collection"
                        select
                    >
                        {collections.map((option) => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Product Name"
                        name="name"
                        autoComplete="name"
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
                            autoComplete="price"
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="count"
                            label="Count"
                            type="number"
                            id="count"
                            autoComplete="count"
                        />
                    </Stack>
                    <input
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
                    </label>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        multiline
                        name="description"
                        label="Description"
                        type="number"
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
