import { NavLink } from 'react-router-dom';
// import { useAuth } from 'hooks';

const Navigation = () => {
  //   const { isLoggedIn } = useAuth();
  const isLoggedIn = true;
  return (
      <nav style={{ display: 'flex', gap:'10px'}}>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts Page</NavLink>}
    </nav>
  );
};

export default Navigation;
