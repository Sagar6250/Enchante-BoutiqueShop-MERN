import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Store } from "../store/store";

const AdminGuard = ({ children }) => {
    const { state } = useContext(Store);
    const { userInfo } = state;

    return userInfo && userInfo.isAdmin ? children : <Navigate to="/" />;
};

export default AdminGuard;
