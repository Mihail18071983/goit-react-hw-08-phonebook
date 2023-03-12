import Button from '@mui/material/Button';

import { logOut } from 'redux/auth/auth-operations';
import { useDispatch } from 'react-redux';
import { useAuth } from 'shared/hooks/useAuth';

import LogoutIcon from '@mui/icons-material/Logout';

import { UserMenuBoxMobile, UserMenuBoxDesktop } from './UserMenu.styled';

export const UserMenuMobile = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOut());
  };
  return (
    <UserMenuBoxMobile>
      <p>{user.email}</p>
      <Button
        sx={{ maxWidth: '30px', marginLeft: 'auto', marginRight: 'auto' }}
        variant="contained"
        size="small"
        type="button"
        onClick={handleLogOut}
      >
        <LogoutIcon />
      </Button>
    </UserMenuBoxMobile>
  );
};

export const UserMenuDesktop = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOut());
  };
  return (
    <UserMenuBoxDesktop>
      <p>{user.email}</p>
      <Button
        sx={{ maxWidth: '30px', marginLeft: 'auto', marginRight: 'auto' }}
        variant="contained"
        size="small"
        type="button"
        onClick={handleLogOut}
      >
        <LogoutIcon />
      </Button>
    </UserMenuBoxDesktop>
  );
};


