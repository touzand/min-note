import styled, { keyframes } from "styled-components";

const DeleteMessageFade = keyframes`
0%{opacity:0}
100%{opacity:1;}
`;

export const DeleteMessage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1b1b1b90;
  filter:blur(1rem);
  animation: ${DeleteMessageFade} 0.2s ease both;

  .content-container {
    background-color: #2b2b2b;
    padding: 2rem;
    margin: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1rem;
    border-radius: 0.5rem;

    div {
      display: flex;
      gap: 0.5rem;

      button {
        width: 8rem;
        height: 2rem;
        background-color: #1b1b1b;
        border: none;
        color: whitesmoke;
        font-weight: bold;
        border-radius: 0.25rem;
        cursor: pointer;
      }

      button:nth-child(1) {
        background-color: #dc3545;
      }
    }
  }
`;

export const ViewContainer = styled.div`
  padding: 1rem;
  background-color: ${(props) => props.bg};
  min-height: 100vh;

  header {
    display: flex;
    justify-content: space-between;

    div {
      display: flex;
      gap: 0.25rem;
    }
  }

  .note-content {
    color: ${(props) => props.tc};
  }

  h1 {
    line-height: 2rem;
    line-break: break-word;
  }

  span {
    color: whitesmoke;
  }

  a {
    text-decoration: none;
  }

  .body {
    white-space: pre-wrap;
  }

  .edit-enable {
    display: flex;
    flex-direction: column;
  }

  .title {
    font-size: 2rem;
    content: "Title";
    margin: 3rem 0;
    line-height: 1;
    font-weight: bold;
    margin: 21.44px 0;
    outline: none;
    color: ${(props) => props.tc}70;
    transition: color 1s ease;
  }

  .title:focus {
    color: ${(props) => props.tc};
  }

  .body:focus {
    color: ${(props) => props.tc};
  }

  .title[contenteditable]:empty::before {
    content: "Title";
    color: ${(props) => props.tc}70;
  }

  .date {
    color: ${(props) => props.tc};
  }

  .date-edit {
    color: ${(props) => props.tc}70;
  }

  textarea {
    margin: 16px 0;
    width: 100%;
    height: 49vh;
    resize: none;
    padding-bottom: 2rem;
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 1rem;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    color: ${(props) => props.tc}70;
    transition: color 1s ease;
  }

  textarea::placeholder {
    color: ${(props) => props.tc}70;
  }

  textarea:focus {
    color: ${(props) => props.tc};
  }

  @media (min-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    header {
      justify-content: space-between;
    }

    .general-container {
      width: 700px;
      max-height: auto;
      //position:relative;
    }
  }
`;

