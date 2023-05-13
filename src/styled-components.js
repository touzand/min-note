import styled, {keyframes} from 'styled-components';

const heightOpen = keyframes`
0%{max-height:5px}
100%{max-height:100%}
`;

export const Hr = styled.hr`
  width: 100%;
  border-top: none;
  border-color: ${props => (props.tc ? props.tc : 'var(--divisor-line-color)')};
  margin-top: 0rem;
  margin-bottom: 0;
  position: relative;
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
  background-color: red;
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
    ${props => (props.left || props.both ? props.tc : 'transparent')};
  border-right: solid thin
    ${props => (props.right || props.both ? props.tc : 'transparent')};
  transition: none !important;
padding:0;

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
    color: ${props => (props.tc ? props.tc : 'var(--font-color)')};
    margin:.75rem;
  }

  & svg {
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .option-container {
    background-color: var(--option-background);
    position: absolute;
    top: 70px;
    display: flex;
    flex-direction: column;
    border-radius: 0.25rem;
    animation: ${heightOpen} 0.5s ease-in-out both;

    article * {
      pointer-events: none;
    }

    article {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      position: relative;
      padding: 0.5rem;
      transition: none;
    }

    article:hover {
      background-color: red;
    }
  }

  .color-picker {
    div {
      width: 2rem;
      height: 2rem;
    }
  }

  .option-container::before {
    content: '';
    width: 10px;
    height: 10px;
    background-color: var(--option-background);
    position: absolute;
    top: -5px;
    left: 45px;
    transform: rotate(45deg);
  }
`;
