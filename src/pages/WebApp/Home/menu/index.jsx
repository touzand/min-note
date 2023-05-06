import {useEffect, useState} from 'react';
import {BackgroundContainer, ContentContainer, FigureColor} from './style';
import {MdKeyboardArrowDown} from 'react-icons/md';
import {VscNote} from 'react-icons/vsc';

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
          <div className="row">
            <div>
              <div>
                <MdKeyboardArrowDown />
              </div>
              <h3>Manager</h3>
            </div>
          </div>
          <button className='count'>
            <div>
              <span>{props.data.length}</span>
              <VscNote/>
            </div> 
          </button>
        </article>
        <hr />
        <article>
          <button className="row" onClick={props.handdleAdd}>
            <div>
              <div>
                <MdKeyboardArrowDown />
              </div>
              <h3>Your notes</h3>
            </div>
            <div className="add-button">+</div>
          </button>
          <button>
            <div>
              <FigureColor bg="#F5A38A" />
              <h3>Dark Salmon</h3>
            </div>
            <h3>{bgCounts['#F5A38A'] ?? 0}</h3>
          </button>
          <button>
            <div>
              <FigureColor bg="#F3C57D" />
              <h3>Sandy Brown</h3>
            </div>
            <h3>{bgCounts['#F3C57D'] ?? 0}</h3>
          </button>
          <button>
            <div>
              <FigureColor bg="#DDE595" />
              <h3>Khaki</h3>
            </div>
            <h3>{bgCounts['#DDE595'] ?? 0}</h3>
          </button>
          <button>
            <div>
              <FigureColor bg="#7BD5E1" />
              <h3>Light Sky Blue</h3>
            </div>
            <h3>{bgCounts['#7BD5E1'] ?? 0}</h3>
          </button>
          <button>
            <div>
              <FigureColor bg="#C78DD0" />
              <h3>Plum</h3>
            </div>
            <h3>{bgCounts['#C78DD0'] ?? 0}</h3>
          </button>
          <button>
            <div>
              <FigureColor bg="#DDDDDD" />
              <h3>Gainsboro</h3>
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
