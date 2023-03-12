import styled from 'styled-components';



export const HeaderContainer = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 767px) {
    height: 60px;
    display: flex;
    gap: 20px;
  }
  @media screen and (min-width: 768px) {
    height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;

export const Header = styled.header`

  @media screen and (min-width: 768px) {
    margin-left: auto;
    margin-right: auto;
    height: 100px;
  }
    height: 60px;
    background-color: #6495ed;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

export const AuthNavBoxMobile = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const AuthNavBoxDesktop = styled.nav`
  @media screen and (max-width: 767px) {
    display: none;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 30px;
  }
`;

// export const MenuBtn = styled(StyledBtn)`
// color: #fff;
// @media screen and (min-width:768px) {
//   display: none;
// }
// `