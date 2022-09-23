import { userAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import Note from "../components/Notes/Note";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase.config";

const upHeader = keyframes`
0%{top:0}
100%{top:-4rem}
`;

const downHeader = keyframes`
0%{top:-4rem}
100%{top:0}
`;

const transitionExpand = keyframes`
0%{width:0%}
100%{width:100%}
`

const NotesGeneralContainer = styled.div`
  padding: 1rem;
  width: 100%;

  .add-background-transition{
  background-color:#c78dd0;
  top:0;
  bottom:0;
  right:0;
  width:0%;
  position:absolute;
  z-index:2;
  }

  .background-transition-expand{
  animation:${transitionExpand} .5s ease-in both;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    position: relative;

    h1 {
      margin: 0;
    }

    .header-subsection {
      display: flex;
      gap: 0.25rem;
    }
  }

  .up-header {
    animation: ${upHeader} 0.5s ease both;
  }

  .down-header {
    animation: ${downHeader} 0.5s ease both;
  }

  .masonry-grid {
    max-width: 1200px;
    margin: 0 auto;
    columns: 5 180px;
    column-gap: 0.5rem;
    position: relative;
  }

  .add {
    position: fixed;
    right: 1rem;
    bottom: 1rem;
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
      resize: none;
      border: none;
      outline: none;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    }

    textarea::placeholder {
      color: #fff9;
    }

    div {
      align-items: start;
      border-radius: 0;
      width: 100px;

      span {
        font-size: 3rem;
        font-weight: bold;
      }
    }
  }

  @media (min-width:800px){
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;

  header{
  justify-content:space-between;
  }

  .add{
  position:absolute;
  bottom:1rem;
  }

  .general-container{
  width:1000px;
  max-height:auto;
  //position:relative;
  }
  }
`;

const Notes = ({ children }) => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
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
          <div
            className="icon-button search"
          onClick={() => setSearchVisible(true)}
          translate='no'
          >
            <span className="material-symbols-outlined">search</span>
          </div>
          <div className="icon-button" onClick={handdleSignOut} translate='no'>
            <span className="material-symbols-outlined">logout</span>
          </div>
        </div>
      </header>
      <div
        className={` masonry-grid ${
          searchVisible ? "up-header" : "down-header"
        }`}
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
          <h3 className="no-notes">You dont have any notes :(</h3>
        )}
      </div>
      <button onClick={handdleAdd} className="icon-button add" translate='no'>
        <span className="material-symbols-outlined">add</span>
      </button>
      <div>{children}</div>

        </div>
    </NotesGeneralContainer>
  );
};

export default Notes;
