import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import SharedLayout from 'shared/SharedLayout/SharedLayout';

import GlobalStyle from 'globalStyles';
const Home = lazy(() => import('Pages/Home'));
const LoginPage = lazy(() => import('Pages/LoginPage'));
const Register = lazy(() => import('Pages/RegisterPage'));
const ContactsPage = lazy(() => import('./Pages/ContactPage'));
const NotFound = lazy(() => import('./Pages/NotFoundPage'));

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Suspense fallback={<p>...loading</p>}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
