import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


import { selectUser } from 'redux/auth/selectors';
import { logOut } from 'redux/auth/operations';
import { useSelector, useDispatch } from 'react-redux';



const UserMenu = () => {
  const { email } = useSelector(selectUser)
  const dispatch = useDispatch();
  const handleLogOut=()=>{dispatch(logOut())}
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
      <p>{email}</p>
      <Button variant="contained" size="small" type="button" onClick={handleLogOut}>
        Log out
      </Button>

    </Box>
  );
};
export default UserMenu;
