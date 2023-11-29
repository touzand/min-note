import styled from 'styled-components';

export const ButtonsContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 0.5rem;
zoom:.8;

  button {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 1rem;
    border: solid thin #fff5;
    color: #fff5;
    cursor: pointer;
  border-radius: 0.5rem;
  }
`;

export const Button = styled.button`
  font-size: 1.5rem;

  &:hover {
    background-color: var(--font-color) !important;
    color: black;
  }

  svg {
    font-size: 1.5rem;
  }
`;
