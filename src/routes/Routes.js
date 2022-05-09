import Home from "../components/Home";
import DashboardContainer from "../containers/DashboardContainer";
import LoginContainer from "../containers/LoginContainer";
import SignupContainer from "../containers/SignupContainer";
import ProtectedRoute from "../authentication/ProtectedRoute";
import { Route, Routes } from "react-router";
import AboutComponent from "../components/AboutComponent";
import ProductServiceComponent from "../components/ProductServiceComponent";
import { ABOUT, HOME, LOGIN, PROFILE, REGISTER, SERVICE, USERS } from "../shared/RouterConstant";
import UserListContainer from "../containers/UserListContainer";


const Routers = () => {
    const rout = <Routes>
        <Route element={<ProtectedRoute />}>
            <Route path={PROFILE} element={<DashboardContainer />} />
            <Route path={SERVICE} element={<ProductServiceComponent />} />
            <Route path={USERS} element={<UserListContainer />} />
        </Route>
        <Route exact path={HOME} element={<Home />} />
        <Route path={LOGIN} element={<LoginContainer />} />
        <Route path={REGISTER} element={<SignupContainer />} />
        <Route path={ABOUT} element={<AboutComponent />} />
    </Routes>

    return rout;
}
export default Routers;