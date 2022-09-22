import styled, { keyframes } from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { db } from "../firebase.config";
import { userAuth } from "../context/AuthContext";
import { getDocs, collection } from "firebase/firestore";
import { useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import { useNavigate } from "react-router-dom";

const DeleteMessageFade = keyframes`
0%{opacity:0}
100%{opacity:1;}
`;

const DeleteMessage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1b1b1b90;
  animation: ${DeleteMessageFade} 0.2s ease both;

  .content-container {
    background-color: #2b2b2b;
    padding: 2rem;
    margin: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1rem;
    border-radius: 0.5rem;

    div {
      display: flex;
      gap: 0.5rem;

      button {
        width: 8rem;
        height: 2rem;
        background-color: #1b1b1b;
        border: none;
        color: whitesmoke;
        font-weight: bold;
        border-radius: 0.25rem;
        cursor: pointer;
      }

      button:nth-child(1) {
        background-color: #dc3545;
      }
    }
  }
`;

const ViewContainer = styled.div`
  padding: 1rem;
  background-color: ${(props) => props.bg};
  min-height: 100vh;

  header {
    display: flex;
    justify-content: space-between;

    div {
      display: flex;
      gap: 0.25rem;
    }
  }

  .note-content {
    color: ${(props) => props.tc};
  }

  h1 {
    line-height: 2rem;
    line-break: break-word;
  }

  span {
    color: whitesmoke;
  }

  a {
    text-decoration: none;
  }

  .body {
    white-space: pre-wrap;
  }

  .edit-enable {
    display: flex;
    flex-direction: column;
  }

  .title {
    font-size: 2rem;
    content: "Title";
    margin: 3rem 0;
    line-height: 1;
    font-weight: bold;
    margin: 21.44px 0;
    outline: none;
    color: ${(props) => props.tc}70;
    transition: color 1s ease;
  }

  .title:focus {
    color: ${(props) => props.tc};
  }

  .body:focus {
    color: ${(props) => props.tc};
  }

  .title[contenteditable]:empty::before {
    content: "Title";
    color: ${(props) => props.tc}70;
  }

  .date-edit {
    color: ${(props) => props.tc}70;
  }

  textarea {
    margin: 16px 0;
    width: 100%;
    height: 49vh;
    resize: none;
    padding-bottom: 2rem;
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 1rem;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    color: ${(props) => props.tc}70;
    transition: color 1s ease;
  }

  textarea::placeholder {
    color: ${(props) => props.tc}70;
  }

  textarea:focus {
    color: ${(props) => props.tc};
  }
`;

const View = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const { user, UpdateDoc, DeleteDoc } = userAuth();
  const [activeEdit, setActiveEdit] = useState(false);
  const [title, setTitle] = useState(data.title);
  const [body, setBody] = useState("");
  const [deleteMessage, setDeleteMessage] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const AddDoc = async () => {
      const querySnapshot = await getDocs(collection(db, `${user.uid}`));
      querySnapshot.docs.map((doc) => doc.id === id && setData(doc.data()));
    };
    AddDoc();
  }, []);

  const handdleUpdate = async () => {
    await UpdateDoc(
      user.uid,
      id,
      body ? body : data.body,
      title ? title : data.title
    );
    setActiveEdit(!activeEdit);
  };

  const handdleDelete = async () => {
    try {
      await DeleteDoc(id);
      await navigate("/");
    } catch (err) {
      console.log(err);
    }
    setDeleteMessage(false);
  };

  useEffect(() => {
    (() => {
      if (activeEdit) {
        document.querySelector(".title").textContent = title
          ? title
          : data.title;
      } else {
        return;
      }
    })();
  }, [activeEdit]);

  return (
    <ViewContainer bg={data.bg} tc={data.text}>
      <Loader start=".5s" />
      {deleteMessage && (
        <DeleteMessage onClick={() => setDeleteMessage(false)}>
          <div className="content-container">
            <p>Are you sure that do u wanna delete this note?</p>
            <div>
              <button onClick={handdleDelete}>Yes</button>
              <button onClick={() => setDeleteMessage(false)}>No</button>
            </div>
          </div>
        </DeleteMessage>
      )}
      <header>
        <Link to="/" className="icon-button">
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </Link>
        <div>
          <div
            to="/"
            className="icon-button"
            onClick={() => setDeleteMessage(true)}
          >
            <span className="material-symbols-outlined">delete</span>
          </div>
          {activeEdit ? (
            <div to="/" className="icon-button" onClick={handdleUpdate}>
              <span className="material-symbols-outlined">save</span>
            </div>
          ) : (
            <div
              to="/"
              className="icon-button"
              onClick={() => setActiveEdit(!activeEdit)}
            >
              <span className="material-symbols-outlined">edit</span>
            </div>
          )}
        </div>
      </header>
      {activeEdit ? (
        <div className="note-content edit-enable">
          <span
            className="new-note title"
            id="title"
            role="textbox"
            contentEditable
            onKeyUp={(e) => setTitle(e.target.textContent)}
            span={data.title}
          ></span>
          <span className={`${activeEdit ? "date-edit" : "date"}`}>
            {data.date}
          </span>
          <textarea
            className="body"
            defaultValue={data.body}
            onKeyUp={(e) => setBody(e.target.value)}
            placeholder="Type something..."
          ></textarea>
        </div>
      ) : (
        <div className="note-content">
          <h1>{title ? title : data.title}</h1>
          <span className="date">{data.date}</span>
          <p className="body">{body ? body : data.body}</p>
        </div>
      )}
    </ViewContainer>
  );
};

export default View;
