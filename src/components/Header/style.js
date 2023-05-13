import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: min(100%, 800px);
  position:relative;
margin-top:${props=>props.home ? '1rem' : '0'};

  & .up-header {
    animation: upHeaderTop .5s ease both;
  }

  & .down-header {
    animation: downHeaderTop .5s ease both;
  }

  h1 {
    margin: 0;
    //color:#787878;
    color: var(--font-color);
  }

  //& div button {
    //padding: 0.75rem;
  //}

  & a {
    //padding: 0.75rem;
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

  &:hover * {
    //color: ${props => props.color && props.color} !important;
  }
`;
