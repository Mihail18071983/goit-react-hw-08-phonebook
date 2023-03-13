import { Outlet } from 'react-router-dom';

import AppBar from 'modules/AppNavBar/AppBar';

import { Box } from '@mui/material';

const SharedLayout = () => {
  return (
    <>
      <AppBar />
      <Box sx={{maxWidth:'1200px'}}>
        <Outlet />
      </Box>
    </>
  );
};

export default SharedLayout;
