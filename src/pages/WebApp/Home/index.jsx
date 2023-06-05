//... React
import {useNavigate} from 'react-router-dom';
import {useEffect, useState} from 'react';
//... Hooks
import useIsMobile from '../../../hooks/useIsMobile';
//... Context
import {userAuth} from '../../../contexts/AuthContext';
//... Firebase
import {collection, getDocs} from 'firebase/firestore';
import {db} from '../../../firebase.config.js';
//... Components
import Header from './header';
import InputSearch from './inputSearch';
import NoNotes from './noNotes';
import Filter from './filter';
import Menu from './menu';
import Loader from '../../../components/loader';
import Card from './card';
//... Styles
import {
  BackgroundTransition,
  MasonryGrid,
  NotesGeneralContainer,
} from './style';
import ShortcutsModal from './modals/shortcuts';

const Home = ({children}) => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [shortcutsModal,setShortcutsModal] = useState(false)
  const [menu, setMenu] = useState(true);
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');
  const [addTransition, setAddTransition] = useState(false);
  const {user} = userAuth();
  const navigate = useNavigate();
  const isMobile = useIsMobile(800);

  useEffect(() => {
    if (user === null) {
      navigate('/signin');
    }
  }, [user]);

  useEffect(() => {
    (async () => {
      const querySnapshot = await getDocs(collection(db, `${user.uid}`));
      setData(querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id})));
    })();
  }, [user]);

  const dataFilter =
    data.filter(nota =>
      nota.title.toLowerCase().includes(query.toLowerCase()),
    ) &&
    data.filter(nota => nota.body.toLowerCase().includes(query.toLowerCase()));

  const handdleAdd = () => {
    setAddTransition(true);
    setTimeout(() => {
      navigate('/new');
    }, 600);
  };

  const menuProps = {
    setMenu,
    menu,
    data,
    handdleAdd,
    setShortcutsModal
  };

  const filterProps = {
    query,
    setQuery,
    data,
    handdleAdd,
  };

  const headerProps = {
    query,
    searchVisible,
    setSearchVisible,
    setMenu,
  };

  const inputSearchProps = {
    query,
    setQuery,
    setSearchVisible,
  };

  return (
    <>
      {shortcutsModal && <ShortcutsModal setShortcutsModal={setShortcutsModal} shortcutsModal={shortcutsModal}/>}
      
      <Menu {...menuProps} />
      <NotesGeneralContainer>
        <BackgroundTransition
          id="add_background_transition"
          addTransition={addTransition}
        />
        <Loader start=".5s" />
        {searchVisible && <InputSearch {...inputSearchProps} />}
        <Header {...headerProps} />
        <Filter {...filterProps} />
        <MasonryGrid query={query} dataLength={data.length}>
          {data.length !== 0 ? (
            dataFilter.map(note => (
              //[> Aqui hace falta resolver el atributo key<]
              <Card key={note.id} {...note} />
            ))
          ) : (
            <NoNotes />
          )}
        </MasonryGrid>
        {isMobile && (
          <button
            onClick={handdleAdd}
            className="icon_button add"
            translate="no">
            <span className="material_symbols_outlined">add</span>
          </button>
        )}
        <div>{children}</div>
      </NotesGeneralContainer>
    </>
  );
};

export default Home;
