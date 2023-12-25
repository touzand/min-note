import styled from 'styled-components';

export const NoteContaier = styled.article`
  background-color: ${props => props.bg};
  border-radius: 0.25rem;
  text-align: left;
  color: #141414;
  margin-bottom: 0.5rem;
  break-inside: avoid;

  * {
    margin: 0;
  }

  p {
    margin-bottom: 0.5rem;
    line-height: 1.1rem;
    padding: 1rem 1rem 0 1rem;
  }

  span {
    color: #0009;
    font-size: 0.8rem;
    display: block;
    padding: 0.5rem 1rem 1rem 1rem;
  }
`;

