import { Link } from "react-router-dom";
import { useState } from "react";
import { userAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Notification from "../../components/Notification";
import { useEffect } from "react";
import {ColorPicker, NewNote} from "./style";

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

  useEffect(() => {
    setTimeout(() => {
      document.querySelector("header").classList.add("start");
      document.querySelector(".form").classList.add("start");
      //document.querySelector(".color-picker-container").classList.add("start");
    }, 100);
  }, []);

  return (
    <NewNote bg={color} tc={textContrast} id="new">
      {noteError && <Notification>{noteError}</Notification>}
      <div className="general-container">
        <header>
          <Link to="/" className="icon-button" translate="no">
            <span className="material-symbols-outlined">
              arrow_back_ios_new
            </span>
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
            <div className="icon-button" onClick={handdleAddDoc} translate="no">
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
            spellCheck="false"
          ></span>
          <textarea
            onChange={(e) => setBody(e.target.value)}
            placeholder="Type something..."
            className="note-component body"
            spellCheck="false"
          ></textarea>
        </div>
      </div>
    </NewNote>
  );
};

export default New;
