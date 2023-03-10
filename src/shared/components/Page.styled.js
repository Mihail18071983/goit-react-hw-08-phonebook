import styled from 'styled-components';

import { Box } from '@mui/material';

export const FormHead = styled.h1`
  text-align: center;
  color: #6495ed;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 16px;
  width: 400px;
`;

export const StyledBox = styled(Box)`
  position: absolute;
  top: 30%;
  left: 50%;
  translate: -50%;
  padding-bottom:50px;
`;
