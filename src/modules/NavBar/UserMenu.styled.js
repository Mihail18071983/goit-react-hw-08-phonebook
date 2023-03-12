import styled from 'styled-components';

import Box from '@mui/material/Box';

export const UserMenuBoxDesktop = styled(Box)`
  @media screen and (max-width: 767px) {
    display: none;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    padding: 0 15px;
  }
`;

export const UserMenuBoxMobile = styled(Box)`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    padding: 0 15px;
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

