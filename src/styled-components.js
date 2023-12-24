import styled, {keyframes} from 'styled-components';

const heightOpen = keyframes`
0%{max-height:5px}
100%{max-height:100%}
`;

export const Hr = styled.hr`
  width: 100%;
  border-top: none;
  border-color: ${props =>
    props.textColorContrast
      ? props.textColorContrast
      : 'var(--divisor-line-color)'};
  margin-top: 0rem;
  margin-bottom: 0;
  position: relative;
  ${props => props.downHeader && 'animation: downHeader 0.5s ease both'}
`;

export const HeaderButton = styled.button`
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  transition: none !important;
  border: none;
  color: var(--font-color);
  //padding:0 !important;

  & svg {
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const IconButtom = styled.button`
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  border: none;
  border-left: solid thin
    ${props =>
      props.left || props.both
        ? props.textColorContrast + '70'
        : 'transparent'};
  border-right: solid thin
    ${props =>
      props.right || props.both
        ? props.textColorContrast + '70'
        : 'transparent'};
  transition: none !important;
padding:0;

color: ${props => props.configOpen && props.textColorContrast};
background-color: ${props =>
  props.configOpen && props.textColorContrast + '20'};

a{
  padding:0;
}

  button {
    background-color: red;
  }

  &:active {
    background-color: red;
  }

  &  svg {
    color: ${props =>
      props.textColorContrast
        ? props.textColorContrast + '70'
        : 'var(--font-color)'};
    margin:.75rem;
    transition:none !important;
  }


  &:hover svg{
    //color: ${props =>
      props.textColorContrast ? props.textColorContrast : 'var(--font-color)'};
  }

  &:hover{
    background-color:${props =>
      props.textColorContrast ? props.textColorContrast + '20' : 'red'};
  }

  & svg {
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .option-container {
    background-color: var(--option-background);
    position: fixed;
    top: 70px;
    display: flex;
    flex-direction: column;
    border-radius: 0.25rem;
    //height:${props => (props.open ? '5px' : '100%')};
    animation: ${heightOpen} 0.5s ease-in-out both;
    border: solid thin #2d2f33;
    color:var(--font-color);
    width:150px;
    padding:.5rem;

    article * {
      pointer-events: none;
    }

    article svg{
      color:red;
    color:var(--font-color);
      margin:0;
      width: 20px;
      height: 20px;
    }

    article {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      position: relative;
      padding: 0.5rem;
      transition: none;
      border-radius:.25rem;
    }

    article:hover {
      background-color: #262626;
    }
  }

  .color-picker {
    div {
      width: 20px;
      height: 20px;
    }
  }

  //.option-container::before {
    //content: '';
    //width: 10px;
    //height: 10px;
    //background-color: var(--option-background);
    //position: absolute;
    //top: -5px;
    //left: 45px;
    //transform: rotate(45deg);
  //}
`;

export const HelloContainerDesktop = styled.div`
  display: none;
  color: var(--font-color);

  @media (min-width: 800px) {
    display: grid;
    place-items: center;
    flex: 1;
    overflow: hidden;

    article {
      width: 300px;
      position: absolute;
      z-index: 4;
    }
  }
`;

export const SignForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  padding-bottom: 0rem;
  width: 100%;

  @media (min-width: 800px) {
    width: 350px;
    padding: 0;
  }
`;

export const SignFormSubsection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  padding: 1rem;

  div:nth-child(2) {
    width: 100% !important;
  }

  article {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 0;

    p {
      color: var(--font-color);
    }

    a {
      color: var(--font-color);
      font-weight: bold;
    }
  }

  @media (min-width: 800px) {
    width: 350px;
    padding: 0;
    padding-top: 1rem;
  }
`;
