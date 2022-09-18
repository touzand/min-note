import { userAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Note from "../components/Notes/Note";
import { Link } from "react-router-dom";
import {collection, doc, getDocs, orderBy, query} from "firebase/firestore";
import {db} from '../firebase.config'
import { useEffectOnce } from '../hooks/useEffectOnce'

const NotesGeneralContainer = styled.div`
  padding: 1rem;
  width: 100%;

  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .header-subsection{
    display:flex;
    gap:.5rem;
    }
  }

  .masonry-grid {
    max-width: 1200px;
    margin: 0 auto;
    columns:5 120px;
    column-gap:.5rem;
  }

  .add {
    position: fixed;
    right: 1.5rem;
    bottom: 1.5rem;
    text-decoration: none;
    color: whitesmoke;
    background-color: #2b2b2b;
  }
`;

const Notes = ({ children }) => {
  const [data,setData] = useState([])
  const { user, SignOut,GetDocs } = userAuth();
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

    const AddDoc = async () => {
      const querySnapshot = await getDocs(collection(db,`${user.uid}`))
      setData(querySnapshot.docs.map((doc)=>({...doc.data(),id:doc.id})))
    }

  useEffect(()=>{
      AddDoc()
  },[])

  return (
    <NotesGeneralContainer>
      <Loader start='1s' />
      <header>
        <h1>Notes</h1>
        <div className="header-subsection">
          <div className="icon-button">
            <span className="material-symbols-outlined">search</span>
          </div>
          <div className="icon-button" onClick={handdleSignOut}>
            <span className="material-symbols-outlined">logout</span>
          </div>
        </div>
      </header>
      <div className="masonry-grid">
        {data.map(note=><Note bg={note.bg} title={note.title} date={note.date} key={note.id} id={note.id}/>)}
      </div>
      <Link to="/new" className="icon-button add">
        <span className="material-symbols-outlined">add</span>
      </Link>
      <div>{children}</div>
    </NotesGeneralContainer>
  );
};

export default Notes;
