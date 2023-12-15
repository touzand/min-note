import styled from 'styled-components'

export const NoteContentContainer = styled.div`
  .note-content {
    color: ${(props) => props.tc};
    //margin:5rem;
  }

  h1 {
    line-height: 2rem;
    line-break: break-word;
    font-size:var(--font-size-title);
  }

  span {
    //color: whitesmoke;
  }

  a {
    text-decoration: none;
  }

  .body {
    font-size:var(--font-size-pharag);
    white-space: pre-wrap;
    font-weight:400px;
  }

  .edit-enable {
    display: flex;
    flex-direction: column;
  }

  .title {
    font-size: var(--font-size-title);
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
    white-space: pre-wrap;
    font-weight:400px;
    font-size:var(--font-size-pharag);
  }

  .date-edit {
    color: ${(props) => props.tc}70;
    white-space: pre-wrap;
    font-weight:400px;
    font-size:var(--font-size-pharag);
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
    font-size: var(--font-size-pharag);
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
`
