import { Outlet } from 'react-router-dom';

import AppNavBar from 'modules/AppNavBar/AppBar';

import { Container} from './SharedLayot.styled';



const SharedLayout = () => {
  return (
    <Container>
        <AppNavBar/>
      <Outlet />
    </Container>
  );
};

export default SharedLayout;
