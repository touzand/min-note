import { userAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import { useEffect, useState } from "react";
import styled,{keyframes} from "styled-components";
import Note from "../components/Notes/Note";
import { Link } from "react-router-dom";
import { collection, doc, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../firebase.config";
import { useEffectOnce } from "../hooks/useEffectOnce";
import { addDoc } from "firebase/firestore";

const upHeader = keyframes`
0%{top:0}
100%{top:-4rem}
`
const downHeader = keyframes`
0%{top:-4rem}
100%{top:0}
`

const NotesGeneralContainer = styled.div`
  padding: 1rem;
  width: 100%;

  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    position:relative;

    h1 {
      margin: 0;
    }

    .header-subsection {
      display: flex;
      gap: 0.5rem;
    }
  }

  .up-header{
    animation:${upHeader} .5s ease both;
  }

  .down-header{
    animation:${downHeader} .5s ease both;
  }

  .masonry-grid {
    max-width: 1200px;
    margin: 0 auto;
    columns: 5 180px;
    column-gap: 0.5rem;
    position:relative;
  }

  .add {
    position: fixed;
    right: 1.5rem;
    bottom: 1.5rem;
    text-decoration: none;
    color: whitesmoke;
    background-color: #2b2b2b;
  }

  .no-notes {
    color: #3b3b3b;
  }

  .search-container {
    position: fixed;
    background-color: #0009;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    display: flex;
    items-align: center;

    textarea {
      width: 100%;
      background-color: transparent;
      font-size: 3rem;
      color: white;
      font-weight: bold;
      padding: 1rem;
      line-height: 2.5rem;
      resize:none;
      border:none;
      outline:none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    }

    textarea::placeholder{
    color:#fff9;
    }

    div {
      align-items: start;
      border-radius:0;
      width:100px;

      span{
      font-size:3rem;
      }
    }
  }
`;

const Notes = ({ children, props }) => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const { user, SignOut, GetDocs, firstUser, setFirstUser } = userAuth();
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

  const dataFilter = data.filter((nota)=> nota.title.toLowerCase().includes(query.toLowerCase()))

  return (
    <NotesGeneralContainer>
      <Loader start="1s" />
      {searchVisible && (
        <div className="search-container">
          <textarea
          autoFocus
            className="search-input"
            role="textbox"
          contentEditable
          defaultValue={query}
            onKeyUp={(e) => setQuery(e.target.value)}
            placeholder='Search something...'
          ></textarea>
          <div className="icon-button" onClick={() => setSearchVisible(false)}>
            <span className="material-symbols-outlined">check</span>
          </div>
        </div>
      )}
        <header className={`${searchVisible ? 'up-header' : 'down-header'}`}>
          <h1>Notes</h1>
          <div className="header-subsection">
            <div
              className="icon-button search"
              onClick={() => setSearchVisible(true)}
            >
              <span className="material-symbols-outlined">search</span>
            </div>
            <div className="icon-button" onClick={handdleSignOut}>
              <span className="material-symbols-outlined">logout</span>
            </div>
          </div>
        </header>
      <div className={` masonry-grid ${searchVisible ? 'up-header' : 'down-header'}`}>
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
          <h3 className="no-notes">You dont have any notes :(</h3>
        )}
      </div>
      <Link to="/new" className="icon-button add">
        <span className="material-symbols-outlined">add</span>
      </Link>
      <div>{children}</div>
    </NotesGeneralContainer>
  );
};

export default Notes;
