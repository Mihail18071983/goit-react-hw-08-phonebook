import {Navigate, Outlet} from "react-router-dom";

import { useAuth } from "shared/hooks/useAuth";

const PublicRoute = () => {
    const {isLoggedIn, token} = useAuth();

    if(!isLoggedIn && token) {
        return <p>...Loading</p>
    }

    if(isLoggedIn) {
        return <Navigate to="/contacts" />
    }

    return <Outlet />
}

export default PublicRoute;