
import { useAuth } from 'shared/hooks/useAuth';
import { StyledNavLink } from 'shared/components/StyledLink.styled';
import HomeIcon from '@mui/icons-material/Home';

import { AuthNavBoxDesktop } from 'shared/SharedLayout/SharedLayot.styled';

const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <AuthNavBoxDesktop >
      <StyledNavLink to="/"><HomeIcon/>Home</StyledNavLink>
      {isLoggedIn && <StyledNavLink to="/contacts">Contacts Page</StyledNavLink>}
    </AuthNavBoxDesktop>
  );
};

export default Navigation;
