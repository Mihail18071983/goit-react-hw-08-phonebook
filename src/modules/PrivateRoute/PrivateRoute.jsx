import { Navigate, Outlet } from "react-router-dom";

import { ColorRing } from 'react-loader-spinner';

import { useAuth } from "shared/hooks/useAuth";

const PrivateRoute = () => {
    const {isLoggedIn, token} = useAuth();

    if(!isLoggedIn && token) {
        return <ColorRing
              visible={true}
              height="30"
              width="30"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
    }

    if(!isLoggedIn && !token) {
        return <Navigate to="/login" />
    }

    return <Outlet />
}

export default PrivateRoute;