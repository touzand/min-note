import styled from "styled-components";

export const TextArea = styled.textarea`
    background-color: transparent;
    border: none;
    outline: none;
    width: 100%;
    display: block;
    resize: none;
    overflow:hidden;
    width: 100%;
    height: 49vh;
    padding-bottom: 2rem;
    border: none;
    outline: none;
    font-size: 1rem;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    color: ${(props) => props.tc}70;
    transition: color 1s ease;

  &::placeholder {
    color: ${(props) => props.tc}70;
    transition: color 1s ease;
  }

  &:focus {
    color: ${(props) => props.tc};
  }

`
