import {userAuth} from '../../../contexts/AuthContext';
import {useNavigate} from 'react-router-dom';
import {useEffect, useState} from 'react';
import Loader from '../../../components/loader';
import Note from '../../../components/Card/Note.jsx';
import {collection, getDocs} from 'firebase/firestore';
import {db} from '../../../firebase.config.js';
import {NotesGeneralContainer} from './style';
import Header from './header';
import InputSearch from './inputSearch';
import NoNotes from './noNotes';
import useIsMobile from '../../../hooks/useIsMobile';
import Filter from './filter';
import Menu from './menu';

const Home = ({children}) => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [menu, setMenu] = useState(true);
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');
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
    document
      .querySelector('.add-background-transition')
      .classList.add('background-transition-expand');
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

  const noteProps = {
    bg,
    title,
    date,
    key,
    id,
  };

  return (
    <>
      <Menu {...menuProps} />
      <NotesGeneralContainer>
        <div className="add-background-transition"></div>
        <Loader start="1s" />
        {searchVisible && (
          <InputSearch
            query={query}
            setQuery={setQuery}
            setSearchVisible={setSearchVisible}
          />
        )}
        <Header
          query={query}
          searchVisible={searchVisible}
          setSearchVisible={setSearchVisible}
          setMenu={setMenu}
        />
        <Filter {...filterProps} />
        <div
          className={` masonry-grid ${query ? 'up-header' : 'down-header'} ${
            data.length === 0 ? 'no-notes-cont' : 'with-notes-cont'
          }`}>
          {data.length !== 0 ? dataFilter.map(note => <Note {...noteProps} />) : <NoNotes />}
        </div>
        {isMobile && (
          <button
            onClick={handdleAdd}
            className="icon-button add"
            translate="no">
            <span className="material-symbols-outlined">add</span>
          </button>
        )}
        <div>{children}</div>
      </NotesGeneralContainer>
    </>
  );
};

export default Home;
