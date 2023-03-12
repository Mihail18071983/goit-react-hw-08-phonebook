import styled from 'styled-components';



export const HeaderContainer = styled.div`
  max-width: 1200px;
  height: 100px;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 449px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  @media screen and (min-width: 450px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;

  }
`;

export const Header = styled.header`
  margin-left: auto;
  margin-right: auto;
  min-height: 100px;
  background-color: #6495ed;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

export const AuthNavBox = styled.div`
@media screen and (max-width: 449px) {
  display: flex;
  flex-direction: column;
  gap:10px;
}
@media screen and (min-width: 450px) {
  display: flex;
  flex-direction: row;
  gap:10px;
  
}
`