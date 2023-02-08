import { Link } from "react-router-dom";
import Loader from "../../components/Loader";
import {WellcomeContainer} from "./style";

const Wellcome = () => {
  return (
    <WellcomeContainer>
      <Loader start=".5s" />
      <div className="main-content">
        <div>
          <h1>Min note</h1>
          <p>A minimal notes application where you can save any idea quickly and easily.</p>
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
      <footer>build by Alan G. Alonso ( <a href='https://github.com/touzand' target='_blank'>Touzand</a> ) a few seconds ago</footer>
    </WellcomeContainer>
  );
};

export default Wellcome;
