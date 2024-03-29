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
import Loader from '../../../components/Loader';
import Card from './card';
//... Styles
import {
  BackgroundTransition,
  MasonryGrid,
  NotesGeneralContainer,
} from './style';

const Home = ({children}) => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [menu, setMenu] = useState(false);
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
      <Menu {...menuProps} />
      <NotesGeneralContainer>
        <BackgroundTransition
          id="add_background_transition"
          addTransition={addTransition}
        />
        {
          //{searchVisible && <InputSearch {...inputSearchProps} />}
        }
        <Header {...headerProps} />
        <Filter {...filterProps} />
        <MasonryGrid query={query} dataLength={data.length}>
          {data.length !== 0 ? (
            dataFilter.map(note => <Card key={note.id + 1} {...note} />)
          ) : (
            <NoNotes />
          )}
        </MasonryGrid>
      </NotesGeneralContainer>
    </>
  );
};

export default Home;
