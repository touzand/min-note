import styled,{keyframes} from 'styled-components';

const FilterContainer = styled.article`
  width: min(100%, 800px);
  margin: 0.5rem auto;
  display: flex;
  gap: 0.5rem;
  box-sizing: border-box;
  position: relative;
animation:downHeader .5s ease both;

&.up-header{
animation:upHeader .5s ease both;
}

  button,
  div {
    flex: 1;
    border: none;
    outline: none;
    border-radius: 0.5rem;
  }

  *:focus {
    outline: none;
  }

  button {
    color: var(--font-color);
    font-size: 24px;
    background-color: #262626;
  }

  button:hover {
    background-color: var(--complement-color);
  }

  .input {
    flex: 5;
    background-color: #262626;
    padding: 0.75rem;

    svg {
      color: #787878;
      font-size: 1.5rem;
    }

    input {
      height: 100%;
      padding: 0;
      border: none;
      font-size: 24px;
      caret-color: var(--complement-color);
      color: var(--font-color);

      &::placeholder {
        color: #787878;
      }
    }
  }
`;
export default FilterContainer;
