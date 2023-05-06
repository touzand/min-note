import {useEffect} from 'react';
import {BackgroundContainer, ContentContainer, FigureColor} from './style';

const Menu = props => {
  useEffect(() => {}, []);

  return (
    <BackgroundContainer onClick={() => props.setMenu(false)} menu={props.menu}>
      <ContentContainer>
        <article>
          <div className="row">
            <h3>All notes</h3>
            <h3>{props.data.length}</h3>
            {console.log(props.data)}
          </div>
          <div className="row"></div>
          <button>
            <div>
              <FigureColor bg="#F5A38A" />
              <h3>Nombre del color</h3>
            </div>
            <h3></h3>
          </button>
          <button>
            <div>
              <FigureColor bg="#f3C57D" />
              <h3>Nombre del color</h3>
            </div>
            <h3></h3>
          </button>
          <button>
            <div>
              <FigureColor bg="#dde595" />
              <h3>Nombre del color</h3>
            </div>
            <h3></h3>
          </button>
          <button>
            <div>
              <FigureColor bg="#7bd5e1" />
              <h3>Nombre del color</h3>
            </div>
            <h3></h3>
          </button>
          <button>
            <div>
              <FigureColor bg="#c78dd0" />
              <h3>Nombre del color</h3>
            </div>
            <h3></h3>
          </button>
          <button>
            <div>
              <FigureColor bg="#dddddd" />
              <h3>Nombre del color</h3>
            </div>
            <h3></h3>
          </button>
        </article>

        <hr />
      </ContentContainer>
    </BackgroundContainer>
  );
};

export default Menu;
