import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { useEffect } from 'react';
import PrivateRoute from 'modules/PrivateRoute/PrivateRoute';
import PublicRoute from 'modules/PublicRoute/PublicRoute';

import { refreshUser } from 'redux/auth/auth-operations';

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
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    <>
      <GlobalStyle />
      <Suspense fallback={<p>...loading</p>}>
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
