import { useContext } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Loading from "./Loading";


const PrivateRoute = ({ children }) => {

    const { user, loader } = useContext(AuthContext)
    const location = useLocation()
    if (loader) {
        return <Loading />
    }

    if (user && user?.email) {
        return children;
    }

    return <Navigate state={location.pathname} to={'/private/login'}></Navigate>



};

export default PrivateRoute;