import React from 'react';
import RegistrationForm from 'modules/RegisterForm/RegisterForm';

import { Navigate } from 'react-router-dom';

import { FormHead } from 'shared/components/Page.styled';
import { StyledBox } from 'shared/components/Page.styled';

import { useAuth } from 'shared/hooks/useAuth';


const Register = () => {
const { isLoggedIn } = useAuth();
  if (isLoggedIn) {
    return (<Navigate to="/contacts"/>)
  }
  return (
    <StyledBox>
      <FormHead>USER REGISTRATION</FormHead>
      <RegistrationForm />
    </StyledBox>
  );
};
export default Register;
