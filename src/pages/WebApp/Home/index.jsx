import {userAuth} from '../../../contexts/AuthContext';
import {useNavigate} from 'react-router-dom';
import {useEffect, useState} from 'react';
import Loader from '../../../components/loader';
import Note from './Card/Note';
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
      .querySelector('.add_background_transition')
      .classList.add('background_transition_expand');
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
        <div className="add_background_transition"></div>
        <Loader start="1s" />
        {searchVisible && <InputSearch {...inputSearchProps} />}
        <Header {...headerProps} />
        <Filter {...filterProps} />
        <div
          className={` masonry_grid ${query ? 'up_header' : 'down_header'} ${
            data.length === 0 ? 'no_notes_cont' : 'with_notes_cont'
          }`}>
          {data.length !== 0 ? (
            dataFilter.map(note => (
              //[> Aqui hace falta resolver el atributo key<]
              <Note key={note.id} {...note} />
            ))
          ) : (
            <NoNotes />
          )}
        </div>
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
