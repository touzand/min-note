import styled, {keyframes} from 'styled-components';

export const BackgroundContainer = styled.div`
  @media (max-width: 700px) {
    position: fixed;
  }

  color: var(--font-color);
  position: absolute;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  justify-content: right;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  pointer-events: none;
  background-color: #00000000;
  transition: all 0.5s ease;
  ${props =>
    props.menu &&
    `
  opacity: 1;
pointer-events:auto !important;
  background-color: #00000080;
  `}

  > div {
    pointer-events: auto;
    right: -350px;
    transition: all 0.5s ease;
    ${props =>
      props.menu &&
      `
  right:0;
  `}
  }
`;

export const ContentContainer = styled.div`
  position: relative;
  top: 0;
  bottom: 0;
  right: -350px;
  background-color: #1a1c20;
  width: 275px;
  overflow-y: scroll;

  .color_count_container {
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 0.5rem;
  }

  .color_count {
    display: inline !important;
    width: auto;
    padding: 0;
  }

  .patterns_container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0.5rem;

    div {
      height: 40px;
      background-color: red;
      border-radius: 0.25rem;
    }
  }
`;
