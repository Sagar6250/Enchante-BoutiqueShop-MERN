import { createBrowserRouter } from "react-router-dom";
import Home from "../Home";
import Collections from "../pages/collections/Collections";
import Product from "../pages/product";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import About from "../pages/About";
// import AdminRoute from "../components/AdminRoute";
import AddProduct from "../pages/admin/AddProduct";
import CollectionType from "../pages/collections/CollectionType";
import Gallery from "../pages/collections/Gallery";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/collections",
        element: <Collections />,
    },
    {
        path: "/collections/:collection",
        element: <CollectionType />,
    },
    {
        path: "/products/:productSlug",
        element: <Product />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/signup",
        element: <SignUp />,
    },
    {
        path: "/addCollection",
        element: <AddProduct />,
    },
    {
        path: "/collections/:collection/gallery",
        element: <Gallery />,
    },
]);

export default router;
