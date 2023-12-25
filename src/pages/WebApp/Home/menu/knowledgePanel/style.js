import styled from 'styled-components';

export const KnowledgePanelContainer = styled.figure`
  padding: 1rem;
  margin: 1rem;
  background-color: #e75332;
  border-radius: 0.5rem;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  gap: 0;
  zoom: 0.8;

  * {
    padding: 0;
    margin: 0;
  }

  header {
  }

  main {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .main_top {
      display: flex;
      align-items: end;
      gap: 0.5rem;

      h1 {
        font-size: 5rem;
        position: relative;
        top: 20px;
        font-weight: 300;
      }
    }

    .main_bottom {
      h2 {
        font-weight: 300;
      }
    }

    .grid {
      display: flex;
      justify-content: space-between;
    }
  }

  footer {
    margin-top: 1rem;
    margin-bottom: 1rem;
    height: 60px;
    border-radius: 0.5rem;
    border: dashed thin white;
  }

  p {
    font-size: 0.8rem;
  }
`;
