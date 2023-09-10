import { Container } from "@mui/material";
import Footer from "./Footer";
import NavigationBar from "./NavigationBar";

const RootContainer = ({ children }) => {
    return (
        <>
            <NavigationBar />
            <Container maxWidth="xl" disableGutters sx={{ mt: "7rem" }}>
                {children}
            </Container>
            <Footer />
        </>
    );
};

export default RootContainer;
