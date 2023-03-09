import { NavLink } from 'react-router-dom';
import { useAuth } from 'shared/hooks/useAuth';

const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav style={{ display: 'flex', gap: '10px' }}>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts Page</NavLink>}
    </nav>
  );
};

export default Navigation;
