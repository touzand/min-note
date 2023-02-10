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
  padding: 1rem;
  width: 100%;

  .add-background-transition {
    background-color: #c78dd0;
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

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    position: relative;

    h1 {
      margin: 0;
    }

    .header-subsection {
      display: flex;
      gap: 0.25rem;
    }
  }

  .up-header {
    animation: ${upHeader} 0.5s ease both;
  }

  .down-header {
    animation: ${downHeader} 0.5s ease both;
  }

  .masonry-grid {
    max-width: 1200px;
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

  .search-container {
    position: fixed;
    background-color: #0009;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    display: flex;
    items-align: center;

    textarea {
      width: 100%;
      background-color: transparent;
      font-size: 3rem;
      color: white;
      font-weight: bold;
      padding: 1rem;
      line-height: 2.5rem;
      resize: none;
      border: none;
      outline: none;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    }

    textarea::placeholder {
      color: #fff9;
    }

    div {
      align-items: start;
      border-radius: 0;
      width: 100px;

      span {
        font-size: 3rem;
        font-weight: bold;
      }
    }
  }

  .desktop-add {
    display: none;
  }

  @media (min-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    header {
      justify-content: space-between;
    }

    .add {
      position: absolute;
      bottom: 1rem;
    }

    .general-container {
      width: 1000px;
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
