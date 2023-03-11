import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const StyledNavLink = styled(NavLink)`
  display: flex;
  gap:5px;
  padding: 12px 20px;
  font-weight: 400;
  font-size: 20px;
  color: #dcdcdc;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    text-shadow: 1px 0 11px rgba(255 255 255 / 80%);
  }
  &.active {
    color: #a52a2a;
    text-shadow: 1px 0 11px rgb(52, 152, 219);
  }
`;