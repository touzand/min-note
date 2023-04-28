import styled from "styled-components";

export const BackgroundContainer = styled.div`
  width:100%;
  height:100%;
  background-color:var(--background-color);
  position:absolute;
  top:0;
  z-index:1 !important;
  overflow:hidden;

  *{
    pointer-events:none;
    z-index:1 !important;
    //position:relative;
  }
  *::after{
    content: "";
    display: block;
    position:absolute;
    filter: blur(86px);
    border-radius: 50%;
  }
  .top::after {
    background-color: var(--background-bubble-up);
    height: 550px;
    width: 550px;
    left: -415px;
    top: -133px;
  }
  .middle::after {
    background-color: var(--background-bubble-middle);
    height: 494px;
    width: 494px;
    right: -332px;
    top: -324px;
  }
  .bottom::after {
    background-color: var(--background-bubble-down);
    height: 282px;
    width: 282px;
    right: -132px;
    top: 461px;
  }

  @media (min-width:800px){
    //width:100%;
    position:relative;
  }
`;
