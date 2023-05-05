import {BackgroundContainer, ContentContainer, FigureColor} from './style';

const Menu = props => {
  let red = [],
  orange = [],
  green = [],
  blue = [],
  purple = [],
  white =  []

  for (let i = 0; i < props.data; i++) {
    switch (props.data[i].bg){
      case "#DDDDDD"
      case "#F5A38A"
      case "#f3C57D"
      case "#DDE595"
      case "#7BD5E1"
      case "#C78DD0"
    }
}

  return (
    <BackgroundContainer onClick={() => props.setMenu(false)} menu={props.menu}>
      <ContentContainer>
        {console.log(props.data[2].bg)}
        <article>
          <div className="row">
            <h3>All notes</h3>
            <h3>{props.data.length}</h3>
            {console.log( props.data )}
          </div>
          <div className="row"></div>
          <button>
            <div>
              <FigureColor bg='#f5a38a'/>
              <h3>Nombre del color</h3>
            </div>
            <h3>{props.data.length}</h3>
          </button>
          <button>
            <div>
              <FigureColor bg='#f3c57d'/>
              <h3>Nombre del color</h3>
            </div>
            <h3>{props.data.length}</h3>
          </button>
          <button>
            <div>
              <FigureColor bg='#dde595'/>
              <h3>Nombre del color</h3>
            </div>
            <h3>{props.data.length}</h3>
          </button>
          <button>
            <div>
              <FigureColor bg='#7bd5e1'/>
              <h3>Nombre del color</h3>
            </div>
            <h3>{props.data.length}</h3>
          </button>
          <button>
            <div>
              <FigureColor bg='#c78dd0'/>
              <h3>Nombre del color</h3>
            </div>
            <h3>{props.data.length}</h3>
          </button>
          <button>
            <div>
              <FigureColor bg='#dddddd'/>
              <h3>Nombre del color</h3>
            </div>
            <h3>{props.data.length}</h3>
          </button>
        </article>

        <hr />
      </ContentContainer>
    </BackgroundContainer>
  );
};

export default Menu;
