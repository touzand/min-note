import {useState} from 'react';
import {userAuth} from '../../../contexts/AuthContext';
import {useNavigate} from 'react-router-dom';
import Notification from '../../../components/Notification';
import {useEffect} from 'react';
import {GeneralContainer, NewNote} from './style';
import Header from './header';
import BodyContent from './noteContent';
import {Hr} from '../../../styled-components';
import ConfigPanel from './configPanel';
import formatDate from '../../../helpers/helpFormatDate';

const New = () => {
  const [noteError, setNoteError] = useState('');
  const [visible, setVisible] = useState(false);
  const [configPanelOpen, setConfigPanelOpen] = useState(false);
  const {AddDoc} = userAuth();
  const navigate = useNavigate();
  const [errorNotification, setErrorNotification] = useState(false);
  const [noteContent, setNoteContent] = useState({
    date: '',
    title: '',
    body: '',
    background_color: '#DDDDDD',
    text_color_contrast: '#1b1b1b',
    text_align: 'left',
  });

  const handdleAddDoc = async () => {
    if (noteContent.title && noteContent.body) {
      noteContent.date = formatDate(new Date());
      await AddDoc(noteContent);
      navigate('/');
    } else {
      setErrorNotification(true);

      setTimeout(() => {
        setErrorNotification(false);
      }, 3000);
    }
  };

  useEffect(() => {
    const darkFontColorValidation = [
      '#7BD5E1',
      '#DDE595',
      '#DDDDDD',
      '#F3C57D',
    ];

    darkFontColorValidation.includes(noteContent.background_color)
      ? setNoteContent(prevState => ({
          ...prevState,
          text_color_contrast: '#1b1b1b',
        }))
      : setNoteContent(prevState => ({
          ...prevState,
          text_color_contrast: '#F6F1E9',
        }));
  }, [noteContent.background_color]);

  const headerProps = {
    setVisible,
    handdleAddDoc,
    setConfigPanelOpen,
    configPanelOpen,
    setNoteContent,
    noteContent,
  };

  const bodyContentProps = {
    setNoteContent,
    noteContent,
  };

  const configPanelProps = {
    configPanelOpen,
    setNoteContent,
    noteContent,
  };

  return (
    <>
      {errorNotification && (
        <Notification final="error">
          You can´t save a note witout title or body
        </Notification>
      )}
      <NewNote
        backgroundColor={noteContent.background_color}
        textAlign={noteContent.text_align}>
        <GeneralContainer>
          <Header {...headerProps} />
          <BodyContent {...bodyContentProps} />
        </GeneralContainer>
      </NewNote>
      <ConfigPanel {...configPanelProps} />
    </>
  );
};

export default New;
