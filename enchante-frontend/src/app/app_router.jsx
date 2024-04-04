import { createBrowserRouter } from "react-router-dom";
import Home from "../Home";
import Collections from "../pages/collections/Collections";
import Product from "../pages/product/Product";
import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";
import About from "../pages/About";
import AddProduct from "../pages/product/AddProduct";
import CollectionType from "../pages/collections/CollectionType";
import Gallery from "../pages/collections/Gallery";
import AdminGuard from "../guard/AdminGuard";
import EditProduct from "../pages/product/EditProduct";
import Cart from "../pages/collections/Cart";

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
        path: "/products/:productSlug/edit",
        element: <EditProduct />,
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
        element: (
            <AdminGuard>
                <AddProduct />
            </AdminGuard>
        ),
    },
    {
        path: "/collections/:collection/gallery",
        element: <Gallery />,
    },
    {
        path: "/cart",
        element: <Cart />,
    },
]);

export default router;
