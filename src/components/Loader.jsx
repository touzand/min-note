import styled, { keyframes } from "styled-components";

const fadeOut = keyframes`
0%{opacity:1;}
100%{opacity:0;visibility:hidden}
`;

const LoaderContainer = styled.div`
  position: absolute;
  z-index:3;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #0009;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(0.5rem);
  animation: ${fadeOut} 0.3s 1s ease both;
`;

const Loader = () => {
  return (
    <LoaderContainer>
      <span className="loader"></span>
    </LoaderContainer>
  );
};

export default Loader;
