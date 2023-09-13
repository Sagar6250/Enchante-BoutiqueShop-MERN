import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Divider,
    IconButton,
    Rating,
    Snackbar,
    Stack,
    Typography,
} from "@mui/material";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { RootContainer } from "../../components/layout";
import NewArrivals from "../../data/LandingPage";
// import { CounterButton } from "../components/ui";
import theme from "../../theme";
import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { useContext, useEffect, useReducer, useState } from "react";
import axios from "axios";
import { Store } from "../../store/store";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Edit from "@mui/icons-material/Edit";
import AdminGuard from "../../guard/AdminGuard";

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
    const navigate = useNavigate();

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

    const [open, setOpen] = useState(false);
    const [confirm, setConfirm] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleConfirmation = () => {
        setConfirm(false);
        navigate("/");
    };

    const deleteItem = async () => {
        setOpen(false);
        setConfirm(true);
        try {
            await axios.delete(`/api/products/delete/${product._id}`);
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <RootContainer>
            {userInfo && userInfo.isAdmin && (
                <Stack
                    direction="row"
                    justifyContent="flex-end"
                    alignItems="center"
                >
                    <Button
                        component={Link}
                        to="edit"
                        variant="contained"
                        startIcon={<EditIcon />}
                        sx={{ mx: "0.5rem", p: "0.5rem 1.2rem", width: "8% " }}
                        size="small"
                    >
                        edit
                    </Button>
                    <Button
                        onClick={handleClickOpen}
                        variant="outlined"
                        startIcon={<DeleteIcon />}
                        sx={{ mx: "0.5rem", p: "0.5rem 1.2rem", width: "8% " }}
                        size="small"
                    >
                        delete
                    </Button>
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                        fullWidth
                    >
                        <DialogTitle id="alert-dialog-title">
                            <Typography variant="h2">
                                Do you want to delete {product.name}
                            </Typography>
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                <Typography variant="body1">
                                    If you are certain that you want to delete
                                    this product item, please click the
                                    {` "Confirm"`} button below. If you do not
                                    wish to delete this item, you can safely
                                    disregard this message, and no changes will
                                    be made.
                                </Typography>
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button
                                variant="outlined"
                                onClick={handleClose}
                                sx={{ width: "8%" }}
                                size="small"
                            >
                                cancel
                            </Button>
                            <Button
                                variant="contained"
                                onClick={deleteItem}
                                sx={{ width: "8%" }}
                                size="small"
                                autoFocus
                            >
                                confirm
                            </Button>
                        </DialogActions>
                    </Dialog>
                    <Dialog
                        onClose={handleConfirmation}
                        aria-labelledby="customized-dialog-title"
                        open={confirm}
                    >
                        <DialogTitle id="customized-dialog-title">
                            <Typography variant="h2">
                                Success: {product.name} Deleted
                            </Typography>
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                <Typography variant="body1">
                                    This product item has been deleted
                                    successfully.
                                </Typography>
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button
                                variant="text"
                                onClick={handleConfirmation}
                                sx={{ width: "8%" }}
                                size="small"
                                autoFocus
                            >
                                Okay!
                            </Button>
                        </DialogActions>
                    </Dialog>
                </Stack>
            )}
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
