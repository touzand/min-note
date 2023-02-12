import { userAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader";
import Note from "../../components/Card-Nts/Note";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase.config";
import {NotesGeneralContainer} from "./style";
import MessageNotification from "../../components/OptionNotification";

const Notes = ({ children }) => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [messageNotification, setMessageNotification] = useState(false);
  const { user, SignOut } = userAuth();
  const navigate = useNavigate();

  const handdleSignOut = async () => {
    try {
      await SignOut();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (user === null) {
      navigate("/signin");
    }
  }, [user]);

  useEffect(() => {
    (async () => {
      const querySnapshot = await getDocs(collection(db, `${user.uid}`));
      setData(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    })();
  }, [user]);

  const dataFilter =
    data.filter((nota) =>
      nota.title.toLowerCase().includes(query.toLowerCase())
    ) &&
    data.filter((nota) =>
      nota.body.toLowerCase().includes(query.toLowerCase())
    );

  const handdleAdd = () => {
    document.querySelector('.add-background-transition').classList.add('background-transition-expand')
    setTimeout(()=>{
      navigate('/new')
    },600)
  }

  const handdleSearch = (e) => {
    setQuery(e.target.value)
  }

  const enterControl = (e) => {
    if(e.keyCode === 13){
      setSearchVisible(false)
    }
  }

  return (
    <NotesGeneralContainer>
      {messageNotification && (
      <MessageNotification message='Do you wanna sign out ?' action={handdleSignOut} setState={setMessageNotification}/>
      )}
      <div className="add-background-transition"></div>
      <Loader start="1s" />
      {searchVisible && (
        <div className="search-container">
          <textarea
            autoFocus
            className="search-input"
            role="textbox"
            defaultValue={query}
          onKeyUp={handdleSearch}
          onKeyDown={enterControl}
            placeholder="Search something..."
          />
          <div className="icon-button" onClick={() => setSearchVisible(false)} translate='no'>
            <span className="material-symbols-outlined">check</span>
          </div>
        </div>
      )}
        <div className="general-container">

      <header className={`${searchVisible ? "up-header" : "down-header"}`}>
        <h1>Notes</h1>
        <div className="header-subsection">
      <button onClick={handdleAdd} className="icon-button desktop-add" translate='no'>
        <span className="material-symbols-outlined">add</span>
      </button>
          <div
            className="icon-button search"
          onClick={() => setSearchVisible(true)}
          translate='no'
          >
            <span className="material-symbols-outlined">search</span>
          </div>
          <div className="icon-button" onClick={() => setMessageNotification(true)} translate='no'>
            <span className="material-symbols-outlined">logout</span>
          </div>
        </div>
      </header>
      <div
        className={` masonry-grid ${
          searchVisible ? "up-header" : "down-header"
        } ${data.length === 0 ? 'no-notes-cont' : 'with-notes-cont'}`}
      >
        {data.length !== 0 ? (
          dataFilter.map((note) => (
            <Note
              bg={note.bg}
              title={note.title}
              date={note.date}
              key={note.id}
              id={note.id}
            />
          ))
        ) : (
        <div className="no-notes">
          <h3>You dont have any notes :(</h3>
        </div>
        )}
      </div>
      <button onClick={handdleAdd} className="icon-button add mobile-add" translate='no'>
        <span className="material-symbols-outlined">add</span>
      </button>
      <div>{children}</div>

        </div>
    </NotesGeneralContainer>
  );
};

export default Notes;
