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
  ModalBackground,
} from './style';

//import Count from './Count';
import backgroundData from '../../../../helpers/backgroundData';
import KnowledgePanel from './knowledgePanel';
import CountByColor from './CountByColor';
import Buttons from './Buttons';
import ShortcutsModal from './../modals/shortcuts';
import TagsModal from '../modals/tags';

const Menu = props => {
  const {setMenu, menu, data, handdleAdd} = props;

  const [bgCounts, setBgCounts] = useState({});
  const [shortcutsModal, setShortcutsModal] = useState(false);
  const [tagsModal, setTagsModal] = useState(false);

  const [countForKnowledge, setCountForKnowledge] = useState({
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
      setCountForKnowledge(prevState => ({
        ...prevState,
        quantity: data.length,
        words: sumWords(data),
        characters: sumCharacters(data),
        countByColor: countBgOccurrences(data),
      }));

      console.log(data);

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
    if (e.target.parentNode === document.querySelector('#bg-menu')) {
      setMenu(false);
      setShortcutsModal(false)
      setTagsModal(false)
    }
  };

  return (
    <>
      <BackgroundContainer menu={menu} id="bg-menu">
        <ModalBackground onClick={handdleClickOnMenu} menu={menu}>
          {shortcutsModal && (
            <ShortcutsModal
              setShortcutsModal={setShortcutsModal}
              shortcutsModal={shortcutsModal}
            />
          )}
          {tagsModal && (
            <TagsModal setTagsModal={setTagsModal} tagsModal={tagsModal} />
          )}
        </ModalBackground>
        <ContentContainer>
          <KnowledgePanel countForKnowledge={countForKnowledge} />
          <CountByColor countForKnowledge={countForKnowledge} />
          <Buttons
            setTagsModal={setTagsModal}
            setShortcutsModal={setShortcutsModal}
            setMenu={setMenu}
          />
        </ContentContainer>
      </BackgroundContainer>
    </>
  );
};

export default Menu;
