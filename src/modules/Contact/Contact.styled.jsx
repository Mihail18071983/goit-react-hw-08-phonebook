import styled from 'styled-components';

export const StyledContact = styled.li`
  margin: 0;
  padding: 5px 10px;
  border-radius: 5px;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
  display: flex;
  justify-content: space-between;
  gap: 20px;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const ConctactName = styled.p`
  margin-left: 20px;
  font-size: 18px;
`;

export const ContactNumber = styled.a`
color: #000;
  margin-left: auto;
  font-size: 18px;
  text-decoration: none;
  transition: all 250ms ease-in-out;

  :hover,
  :focus {
    color: #39b0ff;
  }
`;
