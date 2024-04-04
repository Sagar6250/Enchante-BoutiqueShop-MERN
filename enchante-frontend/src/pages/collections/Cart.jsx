import { Box, Stack, Typography } from "@mui/material";
import { RootContainer } from "../../components/layout";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Store } from "../../store/store";
import CartItem from "../../components/ui/CartItem";

const Cart = () => {
    const { state } = useContext(Store);
    const { userInfo } = state;
    const userId = userInfo._id;
    console.log(userId);
    const [cart, setCart] = useState({});
    useEffect(() => {
        const fetchCollection = async () => {
            try {
                const { data } = await axios.get(
                    `/api/cart/getCartItems/${userId}`
                );
                console.log(data);
                setCart(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchCollection();
    }, []);

    return (
        <RootContainer>
            {/* <Stack
                direction="row"
                // justifyContent="flex-start"
                // alignItems="flex-start"
            > */}
            <Stack
                width="100%"
                direction="column"
                justifyContent="flex-start"
                alignItems="center"
                spacing={2}
            >
                <Typography variant="h1">Cart</Typography>
                <Stack
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="center"
                    spacing={2}
                    width="50%"
                >
                    {cart.products &&
                        cart.products.map((p, i) => (
                            <CartItem
                                key={i}
                                id={p.productId._id}
                                image={p.productId.imagePath}
                                name={p.productId.name}
                                quantity={p.quantity}
                                price={p.productId.price}
                            />
                        ))}
                </Stack>
                <Typography variant="body1">Total Bill: {cart.bill}</Typography>
            </Stack>
            {/* <Box sx={{ m: "2rem", width: "20%" }}>
                    <img
                        style={{ width: "100%", margin: 0, padding: 0 }}
                        src="src/assets/QR/Enchante_QR.png"
                    />
                </Box>
            </Stack> */}
        </RootContainer>
    );
};

export default Cart;
