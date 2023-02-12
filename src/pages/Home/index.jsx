import { Link } from "react-router-dom";
import Loader from "../../components/Loader";
import {WellcomeContainer} from "./style";

const Home = () => {
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
          <p>Min notes is a simple and easy to use web application. focused on a minimalist user providing the function to save notes, ideas, recipes or whatever you need in basic notes stored in the cloud. giving you the option to view, edit or delete these notes quickly and easily</p>
          <div className="img">
            <img src='http://imgfz.com/i/bCtYDjB.png'/>
          </div>
        </article>
        <article className="side">
          <p>In addition to giving the option to change the color of the cards or notes, being able to easily differentiate them. 5 colors, 5 different types or themes if you want</p>
          <div className="img">
            <img src='http://imgfz.com/i/M2RDcIu.png'/>
          </div>
        </article>
        <article className="side">
          <p>When having multiple notes stored, it's easy to take time to find a specific one or directly miss a note. But Min notes offers an easy-to-use search filter with which you can search for titles or words written in the body of notes to find the note you are looking for faster.</p>
          <div className="img">
            <img src='http://imgfz.com/i/Ra3OBtz.png'/>
          </div>
        </article>
      </div>
      <footer>build by Alan G. Alonso ( <a href='https://github.com/touzand' target='_blank'>Touzand</a> ) a few seconds ago</footer>
    </WellcomeContainer>
  );
};

export default Home;
