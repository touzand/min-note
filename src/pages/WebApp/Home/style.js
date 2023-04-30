import styled, { keyframes } from "styled-components";

const upHeader = keyframes`
0%{top:0}
100%{top:-4rem}
`;

const downHeader = keyframes`
0%{top:-4rem}
100%{top:0}
`;

const transitionExpand = keyframes`
0%{width:0%}
100%{width:100%}
`;

export const NotesGeneralContainer = styled.div`
  width: 100%;
  padding:0 1rem;

  .add-background-transition {
    background-color: #DDE595;
    top: 0;
    bottom: 0;
    right: 0;
    width: 0%;
    position: absolute;
    z-index: 2;
  }

  .background-transition-expand {
    animation: ${transitionExpand} 0.5s ease-in both;
  }

  //header {
    //display: flex;
    //justify-content: space-between;
    //align-items: center;
    //position: relative;

    //h1 {
      //margin: 0;
    //}

    //.header-subsection {
      //display: flex;
      //gap: 0.25rem;
    //}
  //}

  .up-header {
    animation: ${upHeader} 0.5s ease both;
  }

  .down-header {
    animation: ${downHeader} 0.5s ease both;
  }

  .masonry-grid {
    //max-width: 1200px;
    //width: min(100%, 700px);
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

  .no-notes {
    width:100%;
    text-align:center;

    h3 {
      color: #3b3b3b;
    }
  }

  .no-notes-cont{
    height:5rem;
    display:flex;
    justify-content:center;
    align-items:center;
  }

  .desktop-add {
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

    .general-container {
      //width: 1000px;
      max-height: auto;
      //position:relative;
    }

    .mobile-add {
      display: none;
    }

    .desktop-add {
      display: flex;
    }
  }
`;
