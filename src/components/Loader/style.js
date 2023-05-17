import styled, {keyframes} from 'styled-components';

const fadeOut = keyframes`
0%{opacity:1;}
100%{opacity:0;visibility:hidden}
`;

export const LoaderContainer = styled.div`
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #00000099;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fadeOut} 0.3s ${props => props.start} ease both;
`;
