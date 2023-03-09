import AuthNav from 'modules/NavBar/AuthNav';
import UserMenu from 'modules/NavBar/UserMenu';
import Navigation from 'modules/Navigation/Navigation';
import { Header } from 'shared/SharedLayout/SharedLayot.styled';

import { useSelector } from "react-redux";

import { selectIsLoggedIn } from 'redux/auth/auth-selectors';




const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn)
  return (
    <Header>
          <Navigation/>
          {isLoggedIn ? <UserMenu/>:<AuthNav/>}
    </Header>
  );
};

export default AppBar;