import { useState } from "react";
import { userAuth } from "../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Notification from "../../../components/notification";
import { useEffect } from "react";
import { NewNote } from "./style";
import Header from "./header";
import ColorPicker from "./configurations/colorPicker";
import BodyContent from "./noteContent";
import { Hr } from "../../../styled-components";

const New = () => {
  const [noteError, setNoteError] = useState("");
  const [color, setColor] = useState("#DDE595");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [textContrast, setTextContrast] = useState("#F6F1E9");
  const [visible, setVisible] = useState(false);
  const { AddDoc } = userAuth();
  const navigate = useNavigate();
  const [textAlign, setTextAlign] = useState("left");

  const handdleColorPicker = (e) => {
    setColor(e.target.getAttribute("value"));
    setVisible(false);
    e.target.classList.add("color-picker-expand");
  };

  const handdleAddDoc = async () => {
    if (title && body && color) {
      const date = new Date().toLocaleDateString();
      await AddDoc(title, body, color, date, textContrast,textAlign);
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
      setTextContrast("#F6F1E9");
    }
  }, [color]);

  useEffect(() => {
    setTimeout(() => {
      //document.querySelector("header").classList.add("start");
      //document.querySelector(".form").classList.add("start");
      //document.querySelector("hr").classList.add("start");
      //document.querySelector(".color-picker-container").classList.add("start");
    }, 100);
  }, []);

  //<Hr className="hr" opac={true} tc={`${ textContrast }70`}/>

  return (
    <NewNote bg={color} tc={textContrast} id="new">
      {noteError && <Notification>{noteError}</Notification>}
      <div className="general-container">
        <Header
          textContrast={textContrast}
          setVisible={setVisible}
          handdleAddDoc={handdleAddDoc}
          color={color}
          setTextAlign={setTextAlign}
          handdleColorPicker={handdleColorPicker}
        />
        {visible && (
          <ColorPicker
            handdleColorPicker={handdleColorPicker}
            setVisible={setVisible}
          />
        )}
        <BodyContent
          textContrast={textContrast}
          setTitle={setTitle}
          setBody={setBody}
          textAlign={textAlign}
        />
      </div>
    </NewNote>
  );
};

export default New;
