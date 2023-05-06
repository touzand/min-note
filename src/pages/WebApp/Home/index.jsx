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
  const [countData, setCountData] = useState({
    orange: 0,
    blue: 0,
    purple: 0,
    red: 0,
    white: 0,
    green: 0,
  });
  const [query, setQuery] = useState('');
  const {user} = userAuth();
  const navigate = useNavigate();
  const isMobile = useIsMobile(800);

  useEffect(() => {
    if (data.length != 0) {
      data.forEach(item => {
        switch (item.bg) {
          case '#F5A38A':
            const addAcount1 = {...countData, red: countData.red + 1};
            setCountData(addAcount1);
            console.log('rojo');
            console.log(item.bg);
            break;
          case '#DDDDDD':
            const addAcount2 = {...countData, white: countData.white + 1};
            setCountData(addAcount2);
            console.log('blanco');
            console.log(item.bg);
            break;
          case '#f3C57D':
            const addAcount3 = {...countData, orange: countData.orange + 1}
            setCountData(addAcount3);
            console.log('naranja');
            console.log(item.bg);
            break;
          case '#DDE595':
            const addAcount4 = {...countData, green: countData.green + 1}
            setCountData(addAcount4);
            console.log('verde');
            console.log(item.bg);
            break;
          case '#7BD5E1':
            const addAcount5 = {...countData, blue: countData.blue + 1}
            setCountData(addAcount5);
            console.log('azul');
            console.log(item.bg);
            break;
          default:
            const addAcount6 = {...countData, purple: countData.purple + 1}
            setCountData(addAcount6);
            console.log('morado');
            console.log(item.bg);
            break;
        }
      });
    }
  }, [data]);

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

  //{menu && <Menu setMenu={setMenu} menu={menu}/>}
  return (
    <>
      {console.log(countData)}
      <Menu setMenu={setMenu} menu={menu} data={data} countData={countData} handdleAdd={handdleAdd} />
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
        <Filter query={query} setQuery={setQuery} data={data}/>
        <div
          className={` masonry-grid ${query ? 'up-header' : 'down-header'} ${
            data.length === 0 ? 'no-notes-cont' : 'with-notes-cont'
          }`}>
          {data.length !== 0 ? (
            dataFilter.map(note => (
              <Note
                bg={note.bg}
                title={note.title}
                date={note.date}
                key={note.id}
                id={note.id}
              />
            ))
          ) : (
            <NoNotes />
          )}
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
