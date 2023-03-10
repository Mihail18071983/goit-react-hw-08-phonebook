import LoginForm from 'modules/LoginForm/LoginForm';

import { StyledBox } from 'shared/components/Page.styled';

import { FormHead } from 'shared/components/Page.styled';

import { selectIsLoggedIn } from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';


const LoginPage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  if (isLoggedIn) {
    return <Navigate to="/contacts" />;
  }
  return (
    <StyledBox>
      <FormHead>LOGIN FORM</FormHead>
      <LoginForm />
    </StyledBox>
  );
};

export default LoginPage;


