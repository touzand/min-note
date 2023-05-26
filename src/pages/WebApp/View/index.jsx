import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { db } from "../../../firebase.config";
import { userAuth } from "../../../contexts/AuthContext";
import { getDocs, collection } from "firebase/firestore";
import { useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../../../components/loader";
import { useNavigate } from "react-router-dom";
import { ViewContainer } from "./style";
import OptionMessage from "../../../components/optionMessage";
import Notification from "../../../components/notification";
import Header from "./header";
import NoteContent from "./noteContent";
import {Hr} from "../../../styled-components";
import Title from "../../../components/Title";

const View = () => {
  //const [data, setData] = useState([]);
  const [noteContent, setNoteContent] = useState({});
  const { id } = useParams();
  const { user, UpdateDoc, DeleteDoc } = userAuth();
  const [activeEdit, setActiveEdit] = useState(false);
  //const [title, setTitle] = useState(data.title);
  const [body, setBody] = useState("");
  const [deleteMessage, setDeleteMessage] = useState(false);
  const [successNotification, setSuccessNotification] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const AddDoc = async () => {
      const querySnapshot = await getDocs(collection(db, `${user.uid}`));
      querySnapshot.docs.map((doc) => doc.id === id && setNoteContent(doc.data()));
    };
    AddDoc();
  }, []);

  //const handdleUpdate = async () => {
    //await UpdateDoc(
      //user.uid,
      //id,
      //body ? body : data.body,
      //title ? title : data.title
    //);
    //setActiveEdit(!activeEdit);
    //setSuccessNotification(true);

    //setTimeout(() => {
      //setSuccessNotification(false);
    //}, 2000);
  //};

  //const handdleDelete = async () => {
    //try {
      //await DeleteDoc(id);
      //await navigate("/");
    //} catch (err) {
      //console.log(err);
    //}
    //setDeleteMessage(false);
  //};

  //useEffect(() => {
    //(() => {
      //if (activeEdit) {
        //document.querySelector(".title").textContent = title
          //? title
          //: data.title;
      //} else {
        //return;
      //}
    //})();
  //}, [activeEdit]);

  return (
    <ViewContainer bg={noteContent.background_color} tc={noteContent.text_color_contrast}>
      {console.log(noteContent)}
      {
      //<Loader start=".5s" />
          //{deleteMessage && (
            //<OptionMessage
              //message="Are you sure that do u wanna delete this note?"
              //action={handdleDelete}
              //setState={setDeleteMessage}
            ///>
      //)}
              //<div className="general-container" style={{width:"100vw"}}>
          //{successNotification && (
            //<Notification final="success">Note updated successfully</Notification>
              //)}
              //<Header
                //setDeleteMessage={setDeleteMessage}
                //handdleUpdate={handdleUpdate}
                //setActiveEdit={setActiveEdit}
                //activeEdit={activeEdit}
                //data={data}
              ///>
          //{activeEdit ? (
            //<NoteContent
              //data={data}
              //setTitle={setTitle}
              //setBody={setBody}
              //activeEdit={activeEdit}
            ///>
          //) : (
              //<div className="note-content">
              //<Title content={title ? title : data.title} editable={false} textAlign={data.align}/>
              //<span className="date" style={{textAlign:data.align}}>{data.date}</span>
              //<p className="body" style={{textAlign:data.align}}>{body ? body : data.body}</p>
            //</div>
              //)}
              //</div>
      }
    </ViewContainer>
  );
};

export default View;
