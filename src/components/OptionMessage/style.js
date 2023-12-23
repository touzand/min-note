import styled, {keyframes} from 'styled-components';

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
  z-index: 2;
  justify-content: center;
  align-items: center;
  background-color: #24242420;
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
        color: whitesmoke !important;
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
