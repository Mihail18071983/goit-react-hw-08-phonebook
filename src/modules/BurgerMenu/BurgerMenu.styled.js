import styled from 'styled-components';

export const BurgerBox = styled.div`
  @media screen and (max-width: 767px) {
   display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 200px;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
