import styled from "styled-components";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";

const WellcomeContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  width: 100%;
  gap: 3rem;

  h1 {
    font-size: 4rem;
  }

  h1,
  p {
    margin: 0 0;
  }

  .buttons-container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    a {
      padding: 0.75rem;
      border: none;
      border-radius: 0.25rem;
      text-align: center;
      text-decoration: none;
    }

    a:nth-child(1) {
      background-color: whitesmoke;
      color: #141414;
    }

    a:nth-child(2) {
      background-color: transparent;
      color: whitesmoke;
      border: thin solid whitesmoke;
    }
  }

  .figure-logo {

    article {
      display: flex;
      width: 100%;
      gap:.25rem;


      div {
        width: 20px;
        height: 20px;
        background-color: red;
      }

      div:nth-child(1){
      background-color:#F5A38A;
      }
      div:nth-child(2){
      background-color:#f3C57D;
      }
      div:nth-child(3){
      background-color:#DDE595;
      }
      div:nth-child(4){
      background-color:#7BD5E1;
      }
      div:nth-child(5){
      background-color:#C78DD0;
      }
    }
  }

  .main-content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;

const Wellcome = () => {
  return (
    <WellcomeContainer>
      <Loader start=".5s" />
      <div className="figure-logo">
        <article>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </article>
      </div>
      <div className="main-content">
        <div>
          <span>wellcome to</span>
          <h1>Min note</h1>
          <p>A minimal note app where you can save any idea quick and easy</p>
        </div>
        <div className="buttons-container">
          <Link to="/signin">Sig in</Link>
          <Link to="/signup">Sig up</Link>
        </div>
      </div>
    </WellcomeContainer>
  );
};

export default Wellcome;
