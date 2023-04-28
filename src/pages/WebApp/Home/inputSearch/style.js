import styled from "styled-components";

export const InputSearchContainer = styled.div`
  position: fixed;
  background-color: #0009;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  display: flex;
  items-align: center;

  textarea {
    width: 100%;
    background-color: transparent;
    font-size: 3rem;
    color: white;
    font-weight: bold;
    padding: 1rem;
    line-height: 2.5rem;
    resize: none;
    border: none;
    outline: none;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  textarea::placeholder {
    color: #fff9;
  }

  div {
    align-items: start;
    border-radius: 0;
    width: 100px;

    span {
      font-size: 3rem;
      font-weight: bold;
    }
  }
`;
