//... React
import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
//... React Iconc
import {MdKeyboardArrowDown} from 'react-icons/md';
import {RiDeleteBinLine} from 'react-icons/ri';
import {VscNote} from 'react-icons/vsc';
import {RxLetterCaseToggle} from 'react-icons/rx';
//... Context
import {userAuth} from '../../../../contexts/AuthContext';
//... Styles
import {
  Upgrade,
  BackgroundContainer,
  ContentContainer,
  FigureColor,
  AccountStatus,
  Row,
} from './style';

import {buttonContent} from './bgCount';
import Count from './Count';

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
          <Count text={characterCount} icon={RxLetterCaseToggle} />
          <Count text={data.length} icon={VscNote} />
          <button className="delete" onClick={() => handdleDeleteAll()}>
            <h3>Delete all</h3>
            <RiDeleteBinLine />
          </button>
        </article>
        <hr />
        <article>
          <Row onClick={handdleAdd} hover={true}>
            <div>
              <MdKeyboardArrowDown />
              <h3>Your notes</h3>
            </div>
            <div className="add-button">+</div>
          </Row>
          {buttonContent.map(button => (
            <button>
              <div>
                <FigureColor bg={button.hex_code} />
                <h3>{button.color_name}</h3>
              </div>
              <h3>{bgCounts[button.hex_code] ?? 0}</h3>
            </button>
          ))}
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
              <span>Upgrade</span>
            </Upgrade>
          )}
        </article>
      </ContentContainer>
    </BackgroundContainer>
  );
};

export default Menu;
