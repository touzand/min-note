import styled, { keyframes } from "styled-components";

const fadeOut = keyframes`
0%{opacity:1;}
100%{opacity:0;visibility:hidden}
`;

const LoaderContainer = styled.div`
  position: fixed;
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
  animation: ${fadeOut} 0.3s ${props=>props.start} ease both;
`;

const Loader = (props) => {
  return (
    <LoaderContainer start={props.start}>
      <span className="loader"></span>
    </LoaderContainer>
  );
};

export default Loader;
