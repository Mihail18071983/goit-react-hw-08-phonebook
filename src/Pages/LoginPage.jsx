import LoginForm from 'modules/LoginForm/LoginForm';

import { selectIsLoggedIn } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const LoginPage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  if (isLoggedIn) {
    return <Navigate to="/contacts" />;
  }
  return (
    <>
      <h1>Login page</h1>
      <LoginForm />
    </>
  );
};

export default LoginPage;
