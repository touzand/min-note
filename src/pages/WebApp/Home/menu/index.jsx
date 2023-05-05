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
      case "#DDDDDD":
        white.push(props.data[i])
      case "#F5A38A":
        red.push(props.data[i])
      case "#f3C57D":
        orange.push(props.data[i])
      case "#DDE595":
        green.push(props.data[i])
      case "#7BD5E1":
        blue.push(props.data[i])
      case "#C78DD0":
        purple.push(props.data[i])
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
