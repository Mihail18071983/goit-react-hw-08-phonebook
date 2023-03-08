import { NavLink } from 'react-router-dom';
import { Box } from '@mui/material';

const AuthNav = () => {
  return (
    <Box style={{ display: 'flex', gap: '10px' }}>
      <NavLink to="/register">register</NavLink>
      <NavLink to="/login">Login</NavLink>
    </Box>
  );
};
export default AuthNav;
