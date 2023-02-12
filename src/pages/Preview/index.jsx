import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { db } from "../../firebase.config";
import { userAuth } from "../../context/AuthContext";
import { getDocs, collection } from "firebase/firestore";
import { useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader";
import { useNavigate } from "react-router-dom";
import {ViewContainer} from "./style";
import MessageNotification from "../../components/OptionNotification";
import Notification from "../../components/Notification";

const View = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const { user, UpdateDoc, DeleteDoc } = userAuth();
  const [activeEdit, setActiveEdit] = useState(false);
  const [title, setTitle] = useState(data.title);
  const [body, setBody] = useState("");
  const [deleteMessage, setDeleteMessage] = useState(false);
  const [successNotification,setSuccessNotification] = useState(false)
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
    setSuccessNotification(true)

    setTimeout(()=>{
    setSuccessNotification(false)
    },2000)
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
      <MessageNotification message='Are you sure that do u wanna delete this note?' action={handdleDelete} setState={setDeleteMessage}/>
      )}
      <div className="general-container">
      {successNotification && <Notification final='success'>Note updated successfully</Notification>}
        <header>
          <Link to="/" className="icon-button" translate="no">
            <span className="material-symbols-outlined">
              arrow_back_ios_new
            </span>
          </Link>
          <div>
            <div
              translate="no"
              to="/"
              className="icon-button"
              onClick={() => setDeleteMessage(true)}
            >
              <span className="material-symbols-outlined">delete</span>
            </div>
            {activeEdit ? (
              <div
                to="/"
                className="icon-button"
                onClick={handdleUpdate}
                translate="no"
              >
                <span className="material-symbols-outlined">save</span>
              </div>
            ) : (
              <div
                to="/"
                className="icon-button"
                onClick={() => setActiveEdit(!activeEdit)}
                translate="no"
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
              spellCheck="false"
            ></textarea>
          </div>
        ) : (
          <div className="note-content">
            <h1>{title ? title : data.title}</h1>
            <span className="date">{data.date}</span>
            <p className="body">{body ? body : data.body}</p>
          </div>
        )}
      </div>
    </ViewContainer>
  );
};

export default View;
