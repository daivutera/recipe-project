import styled from 'styled-components';

export const Tag = styled.span`
  background: ${(props) => props.type.background};
  border-radius: 0.75rem;
  color: ${(props) => props.type.color};
  display: inline-block;
  font-size: 0.75rem;
  padding: 0.15rem 0.5rem;
`;
