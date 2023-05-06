import {useEffect, useState} from 'react';
import {BackgroundContainer, ContentContainer, FigureColor} from './style';

const Menu = props => {
  const [bgCounts, setBgCounts] = useState({});

  useEffect(() => {
    if (props.data.length != 0) {
      setBgCounts(() => countBgOccurrences(props.data));
    }
  }, [props.data]);

  const countBgOccurrences = arr => {
    return arr.reduce((countMap, obj) => {
      const {bg} = obj;
      countMap[bg] = (countMap[bg] || 0) + 1;
      return countMap;
    }, {});
  };

  return (
    <BackgroundContainer onClick={() => props.setMenu(false)} menu={props.menu}>
      <ContentContainer>
        <article>
          {console.log(bgCounts['#DDDDDD'])}
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
            <h3>{bgCounts['#F5A38A'] ?? 0}</h3>
          </button>
          <button>
            <div>
              <FigureColor bg="#F3C57D" />
              <h3>Nombre del color</h3>
            </div>
            <h3>{bgCounts['#F3C57D'] ?? 0}</h3>
          </button>
          <button>
            <div>
              <FigureColor bg="#DDE595" />
              <h3>Nombre del color</h3>
            </div>
            <h3>{bgCounts['#DDE595'] ?? 0}</h3>
          </button>
          <button>
            <div>
              <FigureColor bg="#7BD5E1" />
              <h3>Nombre del color</h3>
            </div>
            <h3>{bgCounts['#7BD5E1'] ?? 0}</h3>
          </button>
          <button>
            <div>
              <FigureColor bg="#C78DD0" />
              <h3>Nombre del color</h3>
            </div>
            <h3>{bgCounts['#C78DD0'] ?? 0}</h3>
          </button>
          <button>
            <div>
              <FigureColor bg="#DDDDDD" />
              <h3>Nombre del color</h3>
            </div>
            <h3>{bgCounts['#DDDDDD'] ?? 0}</h3>
          </button>
        </article>

        <hr />
      </ContentContainer>
    </BackgroundContainer>
  );
};

export default Menu;
