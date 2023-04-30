import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: min(100%, 800px);

  h1{
    margin:0;
    color:var( --font-color );
  }

  & div button{
    padding:.75rem;
  }

  & a{
    padding:.75rem;
  }

  * {
    //font-size:32px !important;
  }

  .header-subsection {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  //.color-picker div {
    //width: 28px;
    //height: 28px;
    //border-radius: 0.5rem;
    //border: solid 3px #3b3b3b;
    //cursor: pointer;
  //}

  &:hover *{
    color:${props=>props.color && props.color} !important;
  }
`;
