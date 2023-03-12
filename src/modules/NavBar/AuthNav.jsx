import { AuthNavBox } from 'shared/SharedLayout/SharedLayot.styled';

import { StyledNavLink } from 'shared/components/StyledLink.styled';

const AuthNav = () => {
  return (
    <AuthNavBox
    >
      <StyledNavLink to="/register">Sign up</StyledNavLink>
      <StyledNavLink to="/login">Log in</StyledNavLink>
    </AuthNavBox>
  );
};
export default AuthNav;
