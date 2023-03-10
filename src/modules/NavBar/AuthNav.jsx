
import { Box } from '@mui/material';

import { StyledNavLink } from 'shared/components/StyledLink.styled';

const AuthNav = () => {
  return (
    <Box style={{ display: 'flex', gap: '10px' }}>
      <StyledNavLink to="/register">Sign up</StyledNavLink>
      <StyledNavLink to="/login">Log in</StyledNavLink>
    </Box>
  );
};
export default AuthNav;
