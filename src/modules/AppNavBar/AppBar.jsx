
import {AuthNavDesktop} from 'modules/NavBar/AuthNav';
import {UserMenuDesktop} from 'modules/NavBar/UserMenu';
import Navigation from 'modules/Navigation/Navigation';
import { Header } from 'shared/SharedLayout/SharedLayot.styled';
import AppName from 'shared/components/AppName/AppName';
import BurgerMenu from 'modules/BurgerMenu/BurgerMenu';

import { useAuth } from 'shared/hooks/useAuth';

import { HeaderContainer } from 'shared/SharedLayout/SharedLayot.styled';

const AppBar = () => {
  const { isLoggedIn } = useAuth();
  
  return (
    <Header>
      <HeaderContainer>
        <AppName title="PHONEBOOK" />
        <Navigation />
        {isLoggedIn ? <UserMenuDesktop /> : <AuthNavDesktop />}
        <BurgerMenu />
      </HeaderContainer>
    </Header>
  );
};

export default AppBar;
