import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import { LOGIN } from "../shared/RouterConstant";

export default function ProtectedRoute(props) {

    const { isSessionValid } = useSelector(dt => dt.login)

    if (isSessionValid) {
        return <Outlet />
    } else {
        return <Navigate to={LOGIN} />
    }
}
