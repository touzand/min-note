//... React
import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
//... React Iconc
import {MdKeyboardArrowDown} from 'react-icons/md';
import {RiDeleteBinLine} from 'react-icons/ri';
import {VscNote} from 'react-icons/vsc';
import {RxLetterCaseToggle} from 'react-icons/rx';
import {AiFillTag} from 'react-icons/ai';
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

import Count from './Count';
import backgroundData from '../../../../helpers/backgroundData';
import KnowledgePanel from './knowledgePanel';
import CountByColor from './CountByColor';
import Buttons from './Buttons';

const Menu = props => {
  const {setMenu, menu, data, handdleAdd} = props;

  const [bgCounts, setBgCounts] = useState({});

  const [countsForKnowledge, setCountForKnowledge] = useState({
    quantity: 0,
    words: 0,
    characters: 0,
    countByColor: {
      //darkSalmon: 0,
      //sandyBrown: 0,
      //khabi: 0,
      //lightSkyBlue: 0,
      //gainsboro: 0,
    },
  });

  const {user, DeleteAllDoc} = userAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (data.length != 0) {
      setCountForKnowledge(prevState=>(
      {...prevState,
        quantity:data.length,
        words:sumWords(data),
        characters: sumCharacters(data),
        countByColor: countBgOccurrences(data),
      }
    ))

        console.log(data)


      //setBgCounts(() => countBgOccurrences(data));
      //setWordCount(() => sumWords(data));
      //setCharacterCount(() => sumCharacters(data));
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
      const {background_color} = obj;
      countMap[background_color] = (countMap[background_color] || 0) + 1;
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

  function sumWords(arr) {
    let sum = 0;

    arr.forEach(obj => {
      if (obj.hasOwnProperty('body') && typeof obj.body === 'string') {
        console.log(obj.body.split(' ').length);
        sum += obj.body.split(' ').length;
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
        <KnowledgePanel countsForKnowledge={countsForKnowledge}/>
        <CountByColor />
        <Buttons/>
        {
          //<article>
          //<Row>
          //<div>
          //<div>
          //<MdKeyboardArrowDown />
          //</div>
          //<h3>Manager</h3>
          //</div>
          //</Row>
          //<Count text={characterCount} icon={RxLetterCaseToggle} />
          //<Count text={data.length} icon={VscNote} />
          //<button className="delete" onClick={() => handdleDeleteAll()}>
          //<h3>Delete all</h3>
          //<RiDeleteBinLine />
          //</button>
          //</article>
          //<hr />
          //<article>
          //<Row onClick={handdleAdd} hover={true}>
          //<div>
          //<MdKeyboardArrowDown />
          //<h3>Your notes</h3>
          //</div>
          //<div className="add-button">+</div>
          //</Row>
          //<article className='color_count_container'>
          //{backgroundData.map(button => (
          //<button className='color_count'>
          //<div>
          //<FigureColor bg={button.hex_code}>
          //<h3>{bgCounts[button.hex_code] ?? 0}</h3>
          //</FigureColor>
          //</div>
          //</button>
          //))}
          //</article>
          //</article>
          //<hr />
          //<article>
          //<Row>
          //<div>
          //<MdKeyboardArrowDown />
          //<h3>Background patterns</h3>
          //</div>
          //<div className="add-button">+</div>
          //</Row>
          //<div className='patterns_container'>
          //<div></div>
          //<div></div>
          //<div></div>
          //<div></div>
          //<div></div>
          //<div></div>
          //</div>
          //</article>
          //<article className="upgrade">
          //<div>
          //<Row>
          //<div>
          //<div>
          //<MdKeyboardArrowDown />
          //</div>
          //<h3>My account</h3>
          //</div>
          //<AccountStatus>
          //<AiFillTag />
          //{user.status === 'premiun' ? 'Premiun' : 'Free'}
          //</AccountStatus>
          //</Row>
          //<p>
          //Unlock your potential with the Premium version. Exclusive benefits
          //that will elevate your experience!
          //</p>
          //{user.status !== 'premiun' && (
          //<Upgrade>
          //<span>Upgrade</span>
          //</Upgrade>
          //)}
          //</div>
          //</article>
        }
      </ContentContainer>
    </BackgroundContainer>
  );
};

export default Menu;
