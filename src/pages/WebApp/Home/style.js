import styled, {keyframes} from 'styled-components';

export const MasonryGrid = styled.div`
  width: min(100%, var(--max-width-desktop));
  margin: 0 auto;
  columns: 5 180px;
  column-gap: 0.5rem;
  position: relative;
  animation: ${props => (props.query ? `upHeader` : `downHeader`)} 0.5s ease
    both;

  ${props =>
    !props.dataLength &&
    `
    height:5rem;
    display:flex;
    justify-content:center;
    align-items:center;
  `}

  @media (max-width: 700px) {
    columns: 5 140px;
    margin-bottom: 1rem;
  }
`;

export const NotesGeneralContainer = styled.div`
  width: 100%;
  padding: 0 1rem;

  @media (min-width: 700px) {
    width: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 0;

    header {
      justify-content: space-between;
    }

    .general_container {
      max-height: auto;
    }
  }
`;

export const BackgroundTransition = styled.div`
  background-color: #dddddd;
  top: 0;
  bottom: 0;
  right: 0;
  width: 0%;
  position: absolute;
  z-index: 2;
  transition: width 0.5s ease-in-out;
  ${props => props.addTransition && 'width:100%'}
`;
