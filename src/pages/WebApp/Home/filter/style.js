import styled, {keyframes} from 'styled-components';

export const FilterContainer = styled.article`
  width: min(100%, var(--max-width-desktop));
  margin: 1rem auto 1rem auto;
  display: flex;
  gap: 0.5rem;
  box-sizing: border-box;
  position: relative;
  animation: downHeader 0.5s ease both;

  button,
  div {
    border: none;
    outline: none;
    border-radius: 0.5rem;
  }

  button {
    flex: 1;
  }

  *:focus {
    outline: none;
  }

  &.up-header {
    animation: upHeader 0.5s ease both;
  }
`;

export const FilterButton = styled.button`
  color: var(--font-color);
  font-size: 24px;
  background-color: #262626;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 1.25rem;

  svg {
    font-size: inherit;
  }

  &:hover {
    background-color: var(--complement-color);
  }
`;

export const InputSearchBar = styled.div`
  flex: 5;
  background-color: #262626;
  padding: 0.75rem;
  display: flex;

  svg {
    color: #787878;
    font-size: 1.5rem;
    margin-right: 0.5rem;
  }

  input {
    height: 100%;
    padding: 0;
    border: none;
    font-size: 1.25rem;
    background-color: transparent;
    color: var(--font-color);

    &::placeholder {
      color: #787878;
    }
  }
`;
