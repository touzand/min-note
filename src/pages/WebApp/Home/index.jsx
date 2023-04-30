import { userAuth } from "../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../../../components/loader";
import Note from "../../../components/Card/Note.jsx";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase.config.js";
import { NotesGeneralContainer } from "./style";
import Header from "./header";
import InputSearch from "./inputSearch";
import NoNotes from "./noNotes";
import useIsMobile from "../../../hooks/useIsMobile";
import { Hr } from "../../../styled-components";
import Filter from "./filter";

const Notes = ({ children }) => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const { user } = userAuth();
  const navigate = useNavigate();
  const isMobile = useIsMobile(800);

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
    document
      .querySelector(".add-background-transition")
      .classList.add("background-transition-expand");
    setTimeout(() => {
      navigate("/new");
    }, 600);
  };

        //<Hr tc={`var(--font-color)`} className={`${searchVisible ? "up-header" : "down-header"}`} />

  return (
    <>
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
          searchVisible={searchVisible}
          setSearchVisible={setSearchVisible}
        />
        <Filter/>
        <div
          className={` masonry-grid ${
            searchVisible ? "up-header" : "down-header"
          } ${data.length === 0 ? "no-notes-cont" : "with-notes-cont"}`}
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
            <NoNotes />
          )}
        </div>
        {isMobile && (
          <button
            onClick={handdleAdd}
            className="icon-button add"
            translate="no"
          >
            <span className="material-symbols-outlined">add</span>
          </button>
        )}
        <div>{children}</div>
      </NotesGeneralContainer>
    </>
  );
};

export default Notes;
