import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { CustomLink } from "../components/ui";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Store } from "../store/store";
import { useNavigate } from "react-router-dom";
import { Alert, Snackbar } from "@mui/material";

export default function Login() {
    const navigate = useNavigate();
    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { userInfo } = state;

    const [errorMessage, setErrorMessage] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        try {
            const { data } = await axios.post("/api/auth/login", {
                email: formData.get("email"),
                password: formData.get("password"),
            });
            ctxDispatch({ type: "USER_LOGIN", payload: data });
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
                <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
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
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <CustomLink
                                href="#"
                                sx={{
                                    fontSize: "0.8rem",
                                    "&:hover": { border: 0 },
                                }}
                            >
                                Forgot password?
                            </CustomLink>
                        </Grid>
                        <Grid item>
                            <CustomLink
                                to="/signup"
                                sx={{
                                    fontSize: "0.8rem",
                                    "&:hover": { border: 0 },
                                }}
                            >
                                {"Don't have an account? Sign Up"}
                            </CustomLink>
                        </Grid>
                    </Grid>
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
