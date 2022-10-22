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
      padding: 0.5rem;
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
      gap: 0.25rem;

      div {
        width: 20px;
        height: 20px;
        background-color: red;
      }

      div:nth-child(1) {
        background-color: #f5a38a;
      }
      div:nth-child(2) {
        background-color: #f3c57d;
      }
      div:nth-child(3) {
        background-color: #dde595;
      }
      div:nth-child(4) {
        background-color: #7bd5e1;
      }
      div:nth-child(5) {
        background-color: #c78dd0;
      }
    }
  }

  .main-content {
    display: flex;
    justify-content:center;
    flex-direction: column;
    gap: 2rem;
    min-height:100vh;
  }

  .img{
width: 96%;
max-width: 960px;
margin: 2rem auto;
}

  img{
width: 100%;
height: auto; 
}

  @media (min-width: 800px) {
    justify-content: start;
    align-items: center;
    text-align: center;

    .body{
    width:1000px;
    display:flex;
    flex-direction:column;
    gap:5rem;
    }

    .side{
    display:flex;
   text-align:left;
   gap:2rem;
   align-items:center;

   p{
   width:500px;
   }
    }

   .side:nth-child(2) {
   flex-direction:row-reverse;
   text-align:right;
   }

    .main-content {
      justify-content: center;
      align-items: center;
      gap: 3rem;
      min-height:100vh;

      a {
        width: 200px;
      }

      a:hover {
        transform: scale(1.025);
      }

    }
  }

  footer{
  padding:1rem;
  margin-top:4rem;

  a{
  color:inherit;
  font-weight:bold;
  text-decoration:none;
  display:inline-block;
  }
  }
`;

const Wellcome = () => {
  return (
    <WellcomeContainer>
      <Loader start=".5s" />
      <div className="main-content">
        <div>
          <h1>Min note</h1>
          <p>Um aplicativo de notas mínimo onde você pode salvar qualquer ideia de forma rápida e fácil</p>
        </div>
        <div className="buttons-container">
          <Link to="/signin">Sig in</Link>
          <Link to="/signup">Sig up</Link>
        </div>
      </div>
      <div className="body">
        <article className="side">
          <p>Min notes é um aplicativo web simples e fácil de usar. focado em um usuário minimalista fornecendo a função de salvar notas, ideias, receitas ou o que você precisar em notas básicas armazenadas na nuvem. dando-lhe a opção de visualizar, editar ou excluir essas notas de forma rápida e fácil</p>
          <div className="img">
            <img src='http://imgfz.com/i/bCtYDjB.png'/>
          </div>
        </article>
        <article className="side">
          <p>Além de dar a opção de mudar a cor dos cartões ou notas, podendo diferenciá-los facilmente. 5 cores, 5 tipos ou temas diferentes se desejar</p>
          <div className="img">
            <img src='http://imgfz.com/i/M2RDcIu.png'/>
          </div>
        </article>
        <article className="side">
          <p>Ao ter várias notas armazenadas, é fácil demorar para encontrar uma específica ou perder diretamente uma nota. Mas Min notes oferece um filtro de pesquisa fácil de usar com o qual você pode pesquisar títulos ou palavras escritas no corpo das notas para encontrar a nota que procura mais rapidamente.</p>
          <div className="img">
            <img src='http://imgfz.com/i/Ra3OBtz.png'/>
          </div>
        </article>
      </div>
      <footer>make by Alan G. Alonso ( <a href='https://github.com/touzand' target='_blank'>Touzand</a> )</footer>
    </WellcomeContainer>
  );
};

export default Wellcome;
