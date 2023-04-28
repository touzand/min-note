import styled, {keyframes} from 'styled-components'

const upColorPicker = keyframes`
0%{top:5rem;opacity:0}
100%{top:0;opacity:1;}
`;

const BlueColorPickerFade = keyframes`
0%{opacity:0}
100%{opacity:1}
`;

export const ColorPickerContainer = styled.div`
  //position: absolute;
  //z-index: 3;
  //top: 0;
  //left: 0;
  //right: 0;
  //bottom: 0;
  //background-color: #0009;
  //display: flex;
  //justify-content: center;
  //align-items: center;
  //animation: ${BlueColorPickerFade} 0.4s linear both;
  //padding: 2rem;
  //cursor: pointer;

  //div {
    //width: 325px;
    //display: flex;
    //justify-content: space-between;
    //padding: 1rem;

    //article {
      //width: 50px;
      //height: 50px;
      //border-radius: 0.25rem;
      //position: relative;
    //}

    //article:nth-child(1) {
      //background-color: #f5a38a;
      //animation: ${upColorPicker} 0.3s 0s ease-in-out both;
    //}

    //article:nth-child(2) {
      //background-color: #f3c57d;
      //animation: ${upColorPicker} 0.3s 0.1s ease-in-out both;
    //}

    //article:nth-child(3) {
      //background-color: #dde595;
      //animation: ${upColorPicker} 0.3s 0.2s ease-in-out both;
    //}

    //article:nth-child(4) {
      //background-color: #7bd5e1;
      //animation: ${upColorPicker} 0.3s 0.3s ease-in-out both;
    //}

    //article:nth-child(5) {
      //background-color: #c78dd0;
      //animation: ${upColorPicker} 0.3s 0.4s ease-in-out both;
    //}
  //}
`;

