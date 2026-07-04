import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../components/Context/AuthContext";

function PrivateRoute({ children }) {

    const { autenticado } = useContext(AuthContext);

    if (!autenticado) {
        return <Navigate to="/login" />;
    }

    return children;
}

export default PrivateRoute;