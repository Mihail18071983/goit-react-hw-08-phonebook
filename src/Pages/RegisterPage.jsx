import React from 'react';
import RegistrationForm from 'modules/RegisterForm/RegisterForm';

import { selectIsLoggedIn } from 'redux/auth/auth-selectors';  
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { FormHead } from 'shared/components/Page.styled';
import { StyledBox } from 'shared/components/Page.styled';


const Register = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
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
