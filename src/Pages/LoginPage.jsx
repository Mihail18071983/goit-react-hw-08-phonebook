import LoginForm from 'modules/LoginForm/LoginForm';

import { StyledBox } from 'shared/components/Page.styled';
import { FormHead } from 'shared/components/Page.styled';

import { Navigate } from 'react-router-dom';

import { useAuth } from 'shared/hooks/useAuth';


const LoginPage = () => {
const { isLoggedIn } = useAuth();
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


