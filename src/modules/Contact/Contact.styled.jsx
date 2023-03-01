import styled from 'styled-components';

const StyledContact = styled.li`
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

export default StyledContact;
