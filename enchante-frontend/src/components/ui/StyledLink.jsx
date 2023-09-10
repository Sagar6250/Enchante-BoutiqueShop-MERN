import { styled } from "@mui/material";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)(({ theme }) => ({
    textDecoration: "none",
    color: "inherit",
    "&:focus, &:visited, &:link, &:active": {
        textDecoration: "none",
    },
    ...theme.components.MuiButton.styleOverrides.text,
}));

const CustomLink = (props) => <StyledLink {...props} />;

export default CustomLink;
