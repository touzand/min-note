import styled, {keyframes} from 'styled-components';

const ShowMenu = keyframes`
0%{right:-300px}
100%{right:0;}
`;
const BackgroundOpacity = keyframes`
0%{opacity:0}
100%{opacity:1;}
`;

export const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  opacity: 0;
pointer-events:none;
  background-color: #00000000;
transition:all .5s ease both;
${props =>
  props.menu &&
  `
  opacity: 1;
pointer-events:auto;
  background-color: #00000080;
  `}

  > div {
  right:-300px;
transition:all .5s ease both;
${props =>
  props.menu &&
  `
  right:0;
  `}
  }

& .open{
  //opacity: 1;
//pointer-events:none;
  //background-color: #00000080;
  //animation: ${BackgroundOpacity} 0.5s ease both;
}

  & .open div{
  }

& .close{
  //opacity: 0;
  //background-color: #00000000;
  //animation: ${BackgroundOpacity} 0.5s ease both;
}

  & .close div{
  //right:-300px;
  }
`;

export const ContentContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: -300px;
  background-color: red;
  width: 300px;
`;
