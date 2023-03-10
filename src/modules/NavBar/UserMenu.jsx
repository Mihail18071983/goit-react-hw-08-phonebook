import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


import { logOut } from 'redux/auth/auth-operations';
import {  useDispatch } from 'react-redux';
import { useAuth } from 'shared/hooks/useAuth';

import LogoutIcon from '@mui/icons-material/Logout';



const UserMenu = () => {
  const { user } = useAuth()
  const dispatch = useDispatch();
  const handleLogOut = () => { dispatch(logOut()) }
  return (

    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent:'space-evenly',
        maxWidth: 400,
        gap: '10px',
      }}
    >
      <p>{user.email}</p>
      <Button variant="contained" size="small" type="button" onClick={handleLogOut}>
        <LogoutIcon/>
      </Button>

    </Box>
  );
};
export default UserMenu;
