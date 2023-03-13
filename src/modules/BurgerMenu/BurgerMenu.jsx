import React from 'react';
import { useState, useEffect } from 'react';

import { useAuth } from 'shared/hooks/useAuth';

import useWindowDimensions from '../../shared/hooks/useWindowDimensions';

import { StyledNavLink } from 'shared/components/StyledLink.styled';

import { UserMenuMobile } from 'modules/NavBar/UserMenu';

import MenuIcon from '@mui/icons-material/Menu';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { BurgerBox } from './BurgerMenu.styled';
import { AuthNavMobile } from 'modules/NavBar/AuthNav';

export default function BurgerMenu() {
  const [isShown, setIsShown] = useState(false);
  const { isLoggedIn } = useAuth();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const currentWidth = useWindowDimensions().width;

  useEffect(() => {
    currentWidth > 768 ? setIsShown(false) : setIsShown(true);
  }, [currentWidth]);

  return (
    <>
      
        <BurgerBox>
          <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <MenuIcon />
          </Button>
        {isShown && <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleClose}>
            <StyledNavLink to="/">Home</StyledNavLink>
          </MenuItem>
          {isLoggedIn && (
            <MenuItem onClick={handleClose}>
              <StyledNavLink to="/contacts">Contacts Page</StyledNavLink>
            </MenuItem>
          )}
          <MenuItem onClick={handleClose}>
            {isLoggedIn ? <UserMenuMobile /> : <AuthNavMobile />}
          </MenuItem>
        </Menu>}
        </BurgerBox>
      
    </>
  );
}
