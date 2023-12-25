import styled from 'styled-components';

export const ButtonsContainer = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 0.5rem;
  zoom: 0.8;
`;

export const Button = styled.button`
  font-size: 1.5rem;
  align-items: center;
  justify-content: start;
  gap: 1rem;
  border: solid thin #fff5;
  color: #fff5;
  cursor: pointer;
  border-radius: 0.25rem;
  display: flex;
  background-color: #242424;
  padding: 0.75rem;

  &:hover {
    background-color: #353535;
  }

  svg {
    font-size: 1.5rem;
  }
`;
