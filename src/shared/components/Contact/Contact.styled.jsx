import styled from 'styled-components';

const StyledContact = styled.li`
  margin: 0;
  padding: 0;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 400px;
`;

export default StyledContact
