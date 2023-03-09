import React from 'react';
import RegistrationForm from 'modules/RegisterForm/RegisterForm';

import { selectIsLoggedIn } from 'redux/auth/auth-selectors';  
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';


const Register = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  if (isLoggedIn) {
    return (<Navigate to="/contacts"/>)
  }
  return (
    <>
      <h1>Register Page</h1>
      <RegistrationForm />
    </>
  );
};
export default Register;
