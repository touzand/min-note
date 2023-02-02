import styled, { keyframes } from "styled-components";

const upColorPicker = keyframes`
0%{top:5rem;opacity:0}
100%{top:0;opacity:1;}
`;

const BlueColorPickerFade = keyframes`
0%{opacity:0}
100%{opacity:1}
`;

export const ColorPicker = styled.div`
  position: absolute;
  z-index: 3;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #0009;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${BlueColorPickerFade} 0.4s linear both;
  padding: 2rem;
  cursor: pointer;

  div {
    width: 325px;
    display: flex;
    justify-content: space-between;
    padding: 1rem;

    article {
      width: 50px;
      height: 50px;
      border-radius: 0.25rem;
      position: relative;
    }

    article:nth-child(1) {
      background-color: #f5a38a;
      animation: ${upColorPicker} 0.3s 0s ease-in-out both;
    }

    article:nth-child(2) {
      background-color: #f3c57d;
      animation: ${upColorPicker} 0.3s 0.1s ease-in-out both;
    }

    article:nth-child(3) {
      background-color: #dde595;
      animation: ${upColorPicker} 0.3s 0.2s ease-in-out both;
    }

    article:nth-child(4) {
      background-color: #7bd5e1;
      animation: ${upColorPicker} 0.3s 0.3s ease-in-out both;
    }

    article:nth-child(5) {
      background-color: #c78dd0;
      animation: ${upColorPicker} 0.3s 0.4s ease-in-out both;
    }
  }
`;

export const NewNote = styled.div`
  padding: 1rem;
  background-color: ${(props) => props.bg};
  min-height: 100vh;
  transition: background-color 1s ease;

  header *,
  .form {
    opacity: 0;
    transition: all 0.8s ease-in-out;
  }

  .start {
    opacity: 1 !important;
  }

  .start * {
    opacity: 1 !important;
  }

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
  }

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

  .header-subsection {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
  }

  .color-picker div {
    width: 48px;
    height: 48px;
    border-radius: 0.5rem;
    border: solid 3px #3b3b3b;
    cursor: pointer;
  }

  .body {
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
  }

  .body::placeholder {
    color: ${(props) => props.tc}70;
    transition: color 1s ease;
  }

  .body:focus {
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

