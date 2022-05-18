import styled from 'styled-components';

export const Button = styled.button`
  padding: 0.5rem;
  background: ${(props) => props.colorAdded};
  border: none;
  cursor: pointer;
  font-size: 20px;
  border-radius: 5px;
  color: blue;
`;
