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
import {BackgroundContainer, ContentContainer} from './style';
//import Count from './Count';
import backgroundData from '../../../../helpers/backgroundData';
import KnowledgePanel from './knowledgePanel';
import CountByColor from './CountByColor';
import Buttons from './Buttons';
import {sumCharacters} from '../../../../helpers/helpSumCharacters';
import {sumWords} from '../../../../helpers/helpSumWords';
import {countBgOccurrences} from '../../../../helpers/helpCountBgOccurences';

const Menu = props => {
  const {setMenu, menu, data, handdleAdd} = props;

  const [bgCounts, setBgCounts] = useState({});
  const [shortcutsModal, setShortcutsModal] = useState(false);
  const [tagsModal, setTagsModal] = useState(false);
  const {user, DeleteAllDoc} = userAuth();
  const navigate = useNavigate();
  const [countForKnowledge, setCountForKnowledge] = useState({
    quantity: 0,
    words: 0,
    characters: 0,
    countByColor: {},
  });

  useEffect(() => {
    if (data.length != 0) {
      setCountForKnowledge(prevState => ({
        ...prevState,
        quantity: data.length,
        words: sumWords(data),
        characters: sumCharacters(data),
        countByColor: countBgOccurrences(data),
      }));
    }
  }, [data]);

  const handdleClickOnMenu = e => {
    setMenu(false);
    setShortcutsModal(false);
    setTagsModal(false);
  };

  //... Falta terminar la funcionalidad de eliminar todas la notas
  //const handdleDeleteAll = async () => {
    //try {
      //await DeleteAllDoc();
      //await navigate('/');
    //} catch (err) {
      //console.error(err);
    //}
    //setDeleteMessage(false);
  //};

  return (
    <>
      <BackgroundContainer onClick={handdleClickOnMenu} menu={menu}>
        <ContentContainer>
          <KnowledgePanel countForKnowledge={countForKnowledge} />
          <CountByColor countForKnowledge={countForKnowledge} />
          {
            <Buttons
              setTagsModal={setTagsModal}
              setShortcutsModal={setShortcutsModal}
              setMenu={setMenu}
            />
          }
        </ContentContainer>
      </BackgroundContainer>
    </>
  );
};

export default Menu;
