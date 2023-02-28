import styled from 'styled-components';

const StyledContact = styled.li`
  margin: 0;
  padding: 0;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
  display: flex;
  justify-content: space-between;
  gap:20px;
  align-items: center;
  max-width: 1200px;
`;

export default StyledContact
