import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import { useState } from "react";
import { userAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Notification from "../components/Notification";
import { useEffect } from "react";

const upColorPicker = keyframes`
0%{top:5rem;opacity:0}
100%{top:0;opacity:1;}
`;

const BlueColorPickerFade = keyframes`
0%{opacity:0}
100%{opacity:1}
`;

const ColorPicker = styled.div`
  position: absolute;
  z-index: 3;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #0009;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${BlueColorPickerFade} 0.4s linear both;
  padding: 2rem;
  cursor: pointer;

  div {
    width: 325px;
    display: flex;
    justify-content: space-between;
    padding: 1rem;

    article {
      width: 50px;
      height: 50px;
      border-radius: 0.25rem;
      position: relative;
    }

    article:nth-child(1) {
      background-color: #f5a38a;
      animation: ${upColorPicker} 0.3s 0s ease-in-out both;
    }

    article:nth-child(2) {
      background-color: #f3c57d;
      animation: ${upColorPicker} 0.3s 0.1s ease-in-out both;
    }

    article:nth-child(3) {
      background-color: #dde595;
      animation: ${upColorPicker} 0.3s 0.2s ease-in-out both;
    }

    article:nth-child(4) {
      background-color: #7bd5e1;
      animation: ${upColorPicker} 0.3s 0.3s ease-in-out both;
    }

    article:nth-child(5) {
      background-color: #c78dd0;
      animation: ${upColorPicker} 0.3s 0.4s ease-in-out both;
    }
  }
`;

const NewNote = styled.div`
  padding: 1rem;
  background-color: ${(props) => props.bg};
  min-height: 100vh;
  transition: background-color 1s ease;

  header *,.form{
  opacity:.0;
  transition:all .8s ease-in-out;
  }

  .start{
  opacity:1 !important;
  }

  .start *{
  opacity:1 !important;
  }

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
  }

  .note-component {
    background-color: transparent;
    border: none;
    outline: none;
    width: 100%;
    display: block;
    resize: none;
  }

  .title {
    line-height: 1;
    font-size: 2rem;
    font-weight: bold;
    line-height: 1;
    margin: 21.44px 0;
    color: ${(props) => props.tc}70;
    transition: color 1s ease;
  }

  .title:focus {
    color: ${(props) => props.tc};
  }

  .title[contenteditable]:empty::before {
    content: "Title";
    color: ${(props) => props.tc}70;
    transition: color 1s ease;
  }

  .header-subsection {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
  }

  .color-picker div {
    width: 48px;
    height: 48px;
    border-radius: .5rem;
    border: solid 3px #3b3b3b;
    cursor:pointer;
  }

  .body {
    width: 100%;
    height: 49vh;
    padding-bottom: 2rem;
    border: none;
    outline: none;
    font-size: 1rem;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    color: ${(props) => props.tc}70;
    transition: color 1s ease;
  }

  .body::placeholder {
    color: ${(props) => props.tc}70;
    transition: color 1s ease;
  }

  .body:focus {
    color: ${(props) => props.tc};
  }
`;

const New = () => {
  const [noteError, setNoteError] = useState("");
  const [color, setColor] = useState("#C78DD0");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [textContrast, setTextContrast] = useState("#ffffff");
  const [visible, setVisible] = useState(false);
  const { AddDoc } = userAuth();
  const navigate = useNavigate();

  const handdleColorPicker = (e) => {
    setColor(e.target.getAttribute("value"));
    setVisible(false);
    e.target.classList.add("color-picker-expand");
  };

  const handdleAddDoc = async () => {
    if (title && body && color) {
      const date = new Date().toLocaleDateString();
      await AddDoc(title, body, color, date, textContrast);
      navigate("/");
    } else {
      setNoteError("You cannot save a note without title or body");
      setTimeout(() => {
        setNoteError("");
      }, 5000);
    }
  };

  useEffect(() => {
    if (color === "#7BD5E1" || color === "#DDE595") {
      setTextContrast("#1b1b1b");
    } else if (
      color === "#F5A38A" ||
      color === "#F3C57D" ||
      color === "#C78DD0"
    ) {
      setTextContrast("#ffffff");
    }
  }, [color]);

  useEffect(()=>{
    setTimeout(()=>{
    document.querySelector('header').classList.add('start')
      document.querySelector('.form').classList.add('start')
      document.querySelector('.color-picker-container').classList.add('start')
    },100)
  },[])

  return (
    <NewNote bg={color} tc={textContrast} id='new'>
      {noteError && <Notification>{noteError}</Notification>}
      <header>
        <Link to="/" className="icon-button" translate='no'>
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </Link>
        <div className="header-subsection">
          <div className="color-picker" onClick={() => setVisible(true)}>
            <div
              style={{
                backgroundColor: color,
                transition: "background-color 1s ease",
              }}
            ></div>
          </div>
          <div className="icon-button" onClick={handdleAddDoc} translate='no'>
            <span className="material-symbols-outlined">push_pin</span>
          </div>
        </div>
      </header>
      {visible && (
        <ColorPicker onClick={() => setVisible(false)}>
          <div className="color-picker-container">
            <article value="#F5A38A" onClick={handdleColorPicker}></article>
            <article value="#f3C57D" onClick={handdleColorPicker}></article>
            <article value="#DDE595" onClick={handdleColorPicker}></article>
            <article value="#7BD5E1" onClick={handdleColorPicker}></article>
            <article value="#C78DD0" onClick={handdleColorPicker}></article>
          </div>
        </ColorPicker>
      )}
      <div className="form">
        <span
          className="note-component title"
          role="textbox"
          contentEditable
          onKeyUp={(e) => setTitle(e.target.textContent)}
        ></span>
        <textarea
          onChange={(e) => setBody(e.target.value)}
          placeholder="Type something..."
          className="note-component body"
        ></textarea>
      </div>
    </NewNote>
  );
};

export default New;
