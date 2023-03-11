import AuthNav from 'modules/NavBar/AuthNav';
import UserMenu from 'modules/NavBar/UserMenu';
import Navigation from 'modules/Navigation/Navigation';
import { Header } from 'shared/SharedLayout/SharedLayot.styled';
import AppName from 'shared/components/AppName/AppName';

import { useAuth } from 'shared/hooks/useAuth';

const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Header>
      <AppName title='PHONEBOOK'/>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};

export default AppBar;
