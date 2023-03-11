
import { useAuth } from 'shared/hooks/useAuth';
import { StyledNavLink } from 'shared/components/StyledLink.styled';
import HomeIcon from '@mui/icons-material/Home';

const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav style={{ display: 'flex', gap: '10px' }}>
      <StyledNavLink to="/"><HomeIcon  /><span>Home</span></StyledNavLink>
      {isLoggedIn && <StyledNavLink to="/contacts">Contacts Page</StyledNavLink>}
    </nav>
  );
};

export default Navigation;
