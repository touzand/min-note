import styled, { keyframes } from "styled-components";

const FadeIn = keyframes`
  0%{opacity:0}
100%{opacity:1}
`

export const NewNote = styled.div`
  background-color: ${(props) => props.bg};
  min-height: 100vh;
  transition: background-color 1s ease;
  font-family:Outfit;

  *{
    animation:${FadeIn} 1s ease;
  }

  header *,
  .form,.hr {
    //opacity: 0;
    transition: all 0.8s ease-in-out;
  }

  //.hr{
    //transition: all 0.8s ease-in-out;
  //}

  //.start {
    //opacity: 1 !important;
  //}

  //.start * {
    //opacity: 1 !important;
  //}

  //header {
    //display: flex;
    //justify-content: space-between;
    //margin-bottom: 1rem;
  //}

  //.body {
  //width: 100%;
  //height: 49vh;
  //padding-bottom: 2rem;
  //border: none;
  //outline: none;
  //font-size: 1rem;
  //font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
  //Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  //color: ${(props) => props.tc}70;
  //transition: color 1s ease;
  //}

  //.body::placeholder {
  //color: ${(props) => props.tc}70;
  //transition: color 1s ease;
  //}

  //.body:focus {
  //color: ${(props) => props.tc};
  //}

  @media (min-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    header {
      justify-content: space-between;
    }

    .general-container {
      width: 100%;
      max-height: auto;
      //position:relative;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;
