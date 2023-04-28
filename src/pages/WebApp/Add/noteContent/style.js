import styled from "styled-components";

export const BodyContentContainer = styled.div`
  transition: all 0.8s ease-in-out;
  width: min(100%, 800px);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  .note-component {
    background-color: transparent;
    border: none;
    outline: none;
    width: 100%;
    display: block;
    resize: none;
  }

    .title {
      line-height: 1;
      font-size: 2rem;
      font-weight: bold;
      line-height: 1;
      margin: 21.44px 0;
      color: ${(props) => props.tc}70;
      transition: color 1s ease;
    }

    .title:focus {
      color: ${(props) => props.tc};
    }

    .title[contenteditable]:empty::before {
      content: "Title";
      color: ${(props) => props.tc}70;
      transition: color 1s ease;
    }
`;
