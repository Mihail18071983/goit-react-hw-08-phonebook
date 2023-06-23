import { Route, Routes, useNavigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { useEffect } from 'react';
import PrivateRoute from 'modules/PrivateRoute/PrivateRoute';
import PublicRoute from 'modules/PublicRoute/PublicRoute';
import { ColorRing } from 'react-loader-spinner';

import { getCurrentUser, logOut } from 'redux/auth/auth-operations';
import { isTokenExpired } from 'shared/utils/expiredToken';

import SharedLayout from 'shared/SharedLayout/SharedLayout';

import GlobalStyle from 'globalStyles';
import { useDispatch } from 'react-redux';
import { useAuth } from 'shared/hooks/useAuth';
const Home = lazy(() => import('Pages/Home'));
const LoginPage = lazy(() => import('Pages/LoginPage'));
const Register = lazy(() => import('Pages/RegisterPage'));
const ContactsPage = lazy(() => import('./Pages/ContactPage'));
const NotFound = lazy(() => import('./Pages/NotFoundPage'));

const App = () => {
  const { isRefreshing } = useAuth();
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const refreshToken = localStorage.getItem('refreshToken');
  //   if (isTokenExpired(refreshToken)) {
  //     localStorage.removeItem('refreshToken');
  //     navigate('/login')
  //   }
  // },[dispatch, navigate]);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      <Suspense fallback={  <ColorRing
          visible={true}
          height="40"
          width="40"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />}>
        {!isRefreshing && (
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<Home />} />
              <Route element={<PublicRoute />}>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<LoginPage />} />
              </Route>
              <Route element={<PrivateRoute />}>
                <Route path="/contacts" element={<ContactsPage />} />
              </Route>

              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        )}
      </Suspense>
    </>
  );
};

export default App;
