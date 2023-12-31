import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Store } from "../store/store";

const AuthGuard = ({ children }) => {
    const { state } = useContext(Store);
    const { userInfo } = state;

    return userInfo ? children : <Navigate to="/login" />;
};

export default AuthGuard;
