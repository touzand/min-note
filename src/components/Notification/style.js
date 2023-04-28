import styled, { keyframes } from "styled-components";

const PopUp = keyframes`
  0%{bottom:5rem;opacity:0;}
  100%{bottom:1rem;opacity:1;}
`;

export const NotificationContainer = styled.div`
  position: fixed;
  width: 300px;
  right: 1rem;
  bottom: 5rem;
  opacity: 0;
  height: auto;
  font-weight: bold;
  text-align: center;
  animation: ${PopUp} 0.2s ease-in-out both;

  p {
    margin: 0;
    padding: 1rem;
    border-radius: 0.25rem;
  }

  & .error {
    background-color: red;
  }

  & .success {
    background-color: green;
  }
`;
