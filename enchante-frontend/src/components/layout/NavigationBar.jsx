import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import SearchIcon from "@mui/icons-material/Search";
import { InputBase, alpha, styled } from "@mui/material";
import { EnchanteNav } from "../../assets/Logo";
import theme from "../../theme";
// import { Link } from "react-router-dom";
import { CustomLink } from "../ui";
import { useContext } from "react";
import { Store } from "../../store/store";
import { Link, Navigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import AdbIcon from "@mui/icons-material/Adb";
// import { EnchanteText } from "../../assets";

const pages = ["Products", "Pricing", "Blog"];
const pagesArr = [
    {
        title: "Collection",
        link: "/collections",
    },
    {
        title: "About",
        link: "/about",
    },
];
//pageAr
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.35),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.55),
    },
    marginLeft: 0,
    marginRight: "1rem",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
    },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            width: "12ch",
            "&:focus": {
                width: "20ch",
            },
        },
    },
}));

const NavigationBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { userInfo } = state;

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const logoutHandler = () => {
        ctxDispatch({ type: "USER_LOGOUT" });
        localStorage.removeItem("userInfo");
    };

    return (
        <AppBar
            component={"nav"}
            // position="sticky"
            sx={{ height: "5rem", justifyContent: "center" }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* Desktop Screen */}
                    <Box
                        sx={{
                            display: { xs: "none", md: "flex" },
                            mr: "1rem",
                        }}
                    >
                        <Link to="/">
                            <Avatar
                                src={EnchanteNav}
                                variant="square"
                                sx={{ width: "10rem", height: "10rem" }}
                            />
                        </Link>
                    </Box>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", md: "flex" },
                        }}
                    >
                        {pagesArr.map((page, i) => (
                            <CustomLink
                                key={i}
                                to={page.link}
                                sx={{ mx: "0.1rem" }}
                            >
                                {page.title}
                            </CustomLink>
                        ))}
                    </Box>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "flex", md: "none" },
                        }}
                    >
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", md: "none" },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                >
                                    <Typography textAlign="center">
                                        {page}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    {/* <Box sx={{ display: { xs: "none", md: "flex" } }}>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ "aria-label": "search" }}
                            />
                        </Search>
                    </Box> */}

                    {/* Phone screen */}

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "flex", md: "none" },
                        }}
                    >
                        <Avatar
                            src={EnchanteNav}
                            variant="square"
                            sx={{ width: "10rem", height: "12rem" }}
                        />
                    </Box>
                    <Box
                        sx={{
                            display: { xs: "flex", md: "none", px: "1rem" },
                            mx: "1rem",
                        }}
                    >
                        <IconButton
                            sx={{ color: theme.palette.secondary.main }}
                        >
                            <SearchIcon />
                        </IconButton>
                    </Box>

                    {userInfo ? (
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton
                                    onClick={handleOpenUserMenu}
                                    sx={{ p: 0 }}
                                >
                                    <Avatar
                                        alt="Profile Photo"
                                        src="/static/images/avatar/2.jpg"
                                    />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: "45px" }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                <MenuItem>
                                    <CustomLink
                                        className="dropdown-item"
                                        to="#logout"
                                        onClick={logoutHandler}
                                        sx={{
                                            p: 0,
                                            fontSize: "0.8rem",
                                            "&:hover": {
                                                color: theme.palette.quinary
                                                    .main,
                                                border: 0,
                                            },
                                        }}
                                    >
                                        Logout
                                    </CustomLink>
                                </MenuItem>
                                {userInfo && userInfo.isAdmin && (
                                    <MenuItem>
                                        <CustomLink
                                            className="dropdown-item"
                                            to="/addCollection"
                                            onClick={logoutHandler}
                                            sx={{
                                                p: 0,
                                                fontSize: "0.8rem",
                                                "&:hover": {
                                                    color: theme.palette.quinary
                                                        .main,
                                                    border: 0,
                                                },
                                            }}
                                        >
                                            Add Items
                                        </CustomLink>
                                    </MenuItem>
                                )}
                            </Menu>
                        </Box>
                    ) : (
                        <CustomLink to="/login">Sign in</CustomLink>
                    )}
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default NavigationBar;
