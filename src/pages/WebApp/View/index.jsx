import {useParams} from 'react-router-dom';
import {useEffect} from 'react';
import {db} from '../../../firebase.config';
import {userAuth} from '../../../contexts/AuthContext';
import {getDocs, collection} from 'firebase/firestore';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import Loader from '../../../components/Loader';
import {useNavigate} from 'react-router-dom';
import {Body, Date, NoteContentContainer, ViewContainer} from './style';
import OptionMessage from '../../../components/OptionMessage';
import Notification from '../../../components/Notification';
import Header from './header';
import NoteContent from './noteContent';
import {Hr} from '../../../styled-components';
import Title from '../../../components/Title';

const View = () => {
  const [data, setData] = useState([]);
  const [noteContent, setNoteContent] = useState({});
  const {id} = useParams();
  const {user, UpdateDoc, DeleteDoc} = userAuth();
  const [activeEdit, setActiveEdit] = useState(false);
  const [title, setTitle] = useState(noteContent.title);
  const [body, setBody] = useState('');
  const [deleteMessage, setDeleteMessage] = useState(false);
  const [successNotification, setSuccessNotification] = useState(false);
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

  const handdleUpdate = async () => {
    console.log(noteContent);
    await UpdateDoc(
      user.uid,
      id,
      body ? body : noteContent.body,
      title ? title : noteContent.title,
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
            <Title
              content={title ?? noteContent.title}
              editable={false}
              textAlign={noteContent.text_align}
              noteContent={noteContent}
            />
            <Date textAlign={noteContent.text_align}>{noteContent.date}</Date>
            <Body textAlign={noteContent.text_align}>
              {body ? body : noteContent.body}
            </Body>
          </NoteContentContainer>
        )}
      </div>
    </ViewContainer>
  );
};

export default View;
