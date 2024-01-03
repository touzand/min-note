import {useParams} from 'react-router-dom';
import {useEffect} from 'react';
import {db} from '../../../firebase.config';
import {userAuth} from '../../../contexts/AuthContext';
import {getDocs, collection} from 'firebase/firestore';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import Loader from '../../../components/Loader';
import {useNavigate} from 'react-router-dom';
import {
  BodyProp,
  Date,
  NoteContentContainer,
  TitleProp,
  ViewContainer,
} from './style';
import OptionMessage from '../../../components/OptionMessage';
import Notification from '../../../components/Notification';
import Header from './header';
import NoteContent from './noteContent';
import {Hr} from '../../../styled-components';
import Title from '../../../components/Title';
import formatDate from '../../../helpers/helpFormatDate';
import {ConfigPanelContainer, MainConfig} from '../Add/configPanel/style';

const View = () => {
  const [data, setData] = useState([]);
  const [noteContent, setNoteContent] = useState({});
  const {id} = useParams();
  const {user, UpdateDoc, DeleteDoc} = userAuth();
  const [activeEdit, setActiveEdit] = useState(false);
  const [title, setTitle] = useState(noteContent.title);
  const [body, setBody] = useState('');
  const [lastUpdate, setLastUpdate] = useState(noteContent.last_update);
  const [lastUp, setLastUp] = useState();
  const [deleteMessage, setDeleteMessage] = useState(false);
  const [successNotification, setSuccessNotification] = useState(false);
  const [historyLastUpdateOpen, setHistoryLastUpdateOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const AddDoc = async () => {
      const querySnapshot = await getDocs(collection(db, `${user.uid}`));
      querySnapshot.docs.map(
        doc => doc.id === id && setNoteContent(doc.data()),
      );
    };
    AddDoc();
  }, []);

  useEffect(() => {
    console.log(noteContent.last_update);
  }, [noteContent.last_update]);

  const datePush = () => {
    const newDate = formatDate(new window.Date());

    if (noteContent.last_update.includes(newDate)) {
      const newLastUpdate = noteContent.last_update.filter(
        date => date !== newDate,
      );
      newLastUpdate.push(newDate);
      noteContent.last_update = newLastUpdate;
    } else {
      noteContent.last_update.push(newDate);
    }
  };

  const handdleUpdate = async () => {
    await datePush();

    await UpdateDoc(
      user.uid,
      id,
      title ? title : noteContent.title,
      body ? body : noteContent.body,
      lastUpdate ? lastUpdate : noteContent.last_update,
    );

    setActiveEdit(!activeEdit);
    setSuccessNotification(true);

    setTimeout(() => {
      setSuccessNotification(false);
    }, 2000);
  };

  const handdleDelete = async () => {
    try {
      await DeleteDoc(id);
      await navigate('/');
    } catch (err) {
      console.log(err);
    }
    setDeleteMessage(false);
  };

  return (
    <ViewContainer
      backgroundColor={noteContent.background_color}
      textColorContrast={noteContent.text_color_contrast}>
      {!data && <Loader start="5s" />}
      <ConfigPanelContainer open={historyLastUpdateOpen}>
        <MainConfig>
          <h3>last update history</h3>
          <p>Here you can see the date when you do any change of this note</p>
          <div>
            {noteContent.last_update &&
              noteContent.last_update
                .slice()
                .reverse()
                .map(dateItem => <figure>{dateItem}</figure>)}
          </div>
        </MainConfig>
      </ConfigPanelContainer>
      {deleteMessage && (
        <OptionMessage
          message="Are you sure that do you want to delete this note?"
          action={handdleDelete}
          setState={setDeleteMessage}
        />
      )}
      <div style={{width: '100vw'}}>
        {successNotification && (
          <Notification final="success">Note updated successfully</Notification>
        )}
        <Header
          setDeleteMessage={setDeleteMessage}
          handdleUpdate={handdleUpdate}
          activeEdit={activeEdit}
          noteContent={noteContent}
          setActiveEdit={setActiveEdit}
          setHistoryLastUpdateOpen={setHistoryLastUpdateOpen}
          historyLastUpdateOpen={historyLastUpdateOpen}
        />
        {activeEdit ? (
          <NoteContent
            noteContent={noteContent}
            setNoteContent={setNoteContent}
            activeEdit={activeEdit}
          />
        ) : (
          <NoteContentContainer
            textColorContrast={noteContent.text_color_contrast}>
            <TitleProp textAlign={noteContent.text_align}>
              {title ?? noteContent.title}
            </TitleProp>
            <Date
              textAlign={noteContent.text_align}
              textColorContrast={noteContent.text_color_contrast}
              backgroundColor={noteContent.background_color}>
              {noteContent.last_update &&
                noteContent.last_update[noteContent.last_update.length - 1]}
            </Date>
            <BodyProp textAlign={noteContent.text_align}>
              {body ? body : noteContent.body}
            </BodyProp>
          </NoteContentContainer>
        )}
      </div>
    </ViewContainer>
  );
};

export default View;
