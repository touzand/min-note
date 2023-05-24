import styled, { keyframes } from "styled-components";

const FadeIn = keyframes`
  0%{opacity:0}
100%{opacity:1}
`

export const NewNote = styled.div`
  background-color: ${(props) => props.backgroundColor};
  min-height: 100vh;
  transition: background-color 1s ease;
  font-family:Outfit;

  *{
    animation:${FadeIn} 1s ease;
  }

  header *,
  .form,.hr {
    transition: all 0.2s ease-in-out;
  }

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
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;
