//... React
import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
//... React Iconc
import {MdKeyboardArrowDown} from 'react-icons/md';
import {VscNote} from 'react-icons/vsc';
import {RiDeleteBinLine} from 'react-icons/ri';
import {RxLetterCaseToggle} from 'react-icons/rx';
//... Context
import {userAuth} from '../../../../contexts/AuthContext';
//... Styles
import {
  Upgrade,
  Count,
  BackgroundContainer,
  ContentContainer,
  FigureColor,
  AccountStatus,
  Row,
} from './style';

const Menu = props => {
  const {setMenu, menu, data, handdleAdd} = props;
  const [bgCounts, setBgCounts] = useState({});
  const [characterCount, setCharacterCount] = useState(0);
  const {user, DeleteAllDoc} = userAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (data.length != 0) {
      setBgCounts(() => countBgOccurrences(data));
    }
  }, [data]);

  useEffect(() => {
    if (data.length != 0) {
      setCharacterCount(() => sumCharacters(data));
    }
  }, [data]);

  //... Falta terminar la funcionalidad de eliminar todas la notas
  const handdleDeleteAll = async () => {
    try {
      await DeleteAllDoc();
      await navigate('/');
    } catch (err) {
      console.error(err);
    }
    //setDeleteMessage(false);
  };

  const countBgOccurrences = arr => {
    return arr.reduce((countMap, obj) => {
      const {bg} = obj;
      countMap[bg] = (countMap[bg] || 0) + 1;
      return countMap;
    }, {});
  };

  function sumCharacters(arr) {
    let sum = 0;

    arr.forEach(obj => {
      if (obj.hasOwnProperty('body') && typeof obj.body === 'string') {
        sum += obj.body.length;
      }
    });

    return sum;
  }

  const handdleClickOnMenu = e => {
    if (e.target === document.querySelector('#bg-menu')) {
      setMenu(false);
    }
  };

  return (
    <BackgroundContainer onClick={handdleClickOnMenu} menu={menu} id="bg-menu">
      <ContentContainer>
        <article>
          <Row>
            <div>
              <div>
                <MdKeyboardArrowDown />
              </div>
              <h3>Manager</h3>
            </div>
          </Row>
          <Count>
            <span>{characterCount}</span>
            <RxLetterCaseToggle />
          </Count>
          <Count>
            <span>{data.length}</span>
            <VscNote />
          </Count>
          <button className="delete" onClick={() => handdleDeleteAll()}>
            <h3>Delete all</h3>
            <RiDeleteBinLine />
          </button>
        </article>
        <hr />
        <article>
          <button className="row" onClick={handdleAdd}>
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
        <article>
          <Row>
            <div>
              <div>
                <MdKeyboardArrowDown />
              </div>
              <h3>My account</h3>
            </div>
            <AccountStatus>
              {user.status === 'premiun' ? 'Premiun' : 'Free'}
            </AccountStatus>
          </Row>
          <p>
            Unlock your potential with the Premium version. Exclusive benefits
            that will elevate your experience!
          </p>
          {user.status !== 'premiun' && (
            <Upgrade>
              <p>Upgrade</p>
            </Upgrade>
          )}
        </article>
      </ContentContainer>
    </BackgroundContainer>
  );
};

export default Menu;
