import styled, { keyframes } from "styled-components";

const transitionExpand = keyframes`
0%{width:0%}
100%{width:100%}
`;

export const NotesGeneralContainer = styled.div`
  width: 100%;
  padding:0 1rem;

  .add_background_transition {
    background-color: #DDDDDD;
    top: 0;
    bottom: 0;
    right: 0;
    width: 0%;
    position: absolute;
    z-index: 2;
  }

  .background_transition_expand {
    animation: ${transitionExpand} 0.5s ease-in both;
  }

  .up_header {
    animation: upHeader 0.5s ease both;
  }

  .down_header {
    animation: downHeader 0.5s ease both;
  }

  .masonry_grid {
    width:min(100%,800px);
    margin: 0 auto;
    columns: 5 180px;
    column-gap: 0.5rem;
    position: relative;
  }

  .add {
    position: fixed;
    right: 1rem;
    bottom: 1rem;
  }

  .no_notes {
    width:100%;
    text-align:center;

    h3 {
      color: #3b3b3b;
    }
  }

  .no_notes_cont{
    height:5rem;
    display:flex;
    justify-content:center;
    align-items:center;
  }

  .desktop_add {
    display: none;
  }

  @media (min-width: 700px) {
    width:100%;
    margin:auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  padding:0 0;

    header {
      justify-content: space-between;
    }

    .add {
      position: absolute;
      bottom: 1rem;
    }

    .general_container {
      max-height: auto;
    }

    .mobile_add {
      display: none;
    }

    .desktop_add {
      display: flex;
    }
  }
`;
