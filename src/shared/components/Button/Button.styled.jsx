import styled from 'styled-components';

const StyledBtn = styled.button`
  border: ${({ type }) =>
    type === 'submit' ? 'none' : '1px solid grey'};;
  outline: none;
  cursor: pointer;
  background-color: ${({ type }) =>
    type === 'submit' ? '#0000ff' : 'transparent'};
  border-radius: 5px;
  padding: 5px 10px;
  max-width: 100px;
  transition: background-color .25s cubic-bezier(.05,.97,1,.08), color .25s cubic-bezier(.05,.97,1,.08);

  &:hover {
    background-color:${({ type }) =>
  type === 'submit' ? '#ff0000' : '#0000ff'};
    color:#ffffff;
  }
`;

export default StyledBtn;
