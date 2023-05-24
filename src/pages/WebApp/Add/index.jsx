import {useState} from 'react';
import {userAuth} from '../../../contexts/AuthContext';
import {useNavigate} from 'react-router-dom';
import Notification from '../../../components/notification';
import {useEffect} from 'react';
import {NewNote} from './style';
import Header from './header';
import BodyContent from './noteContent';
import {Hr} from '../../../styled-components';
import ConfigPanel from './configPanel';
import formatDate from '../../../helpers/helpFormatDate';
//import ColorPicker from './configurations/colorPicker';

const New = () => {
  const [noteContent,setNoteContent] = useState({
    background_color:'#DDDDDD',
    title:'',
    body:'',
    text_color_contrast:'#1b1b1b',
    text_align:'left'
  })

  //const [color, setColor] = useState('#DDDDDD');
  //const [title, setTitle] = useState('');
  //const [body, setBody] = useState('');
  //const [textContrast, setTextContrast] = useState('#1b1b1b');
  //const [textAlign, setTextAlign] = useState('left');

  const [noteError, setNoteError] = useState('');
  const [visible, setVisible] = useState(false);
  const [configPanelOpen, setConfigPanelOpen] = useState(false);
  const {AddDoc} = userAuth();
  const navigate = useNavigate();

  const handdleAddDoc = async () => {
    if (title && body && color) {
      const date = formatDate(new Date());
      await AddDoc(title, body, color, date, textContrast, textAlign);
      navigate('/');
    } else {
      //setNoteError('You cannot save a note without title or body');
      //setTimeout(() => {
      //setNoteError('');
      //}, 5000);
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
      ? setNoteContent(prevState=>({...prevState,background_color:'#1b1b1b'}))
      : setNoteContent(prevState=>({...prevState,background_color:'#F6F1E9'}))
  }, [noteContent.background_color]);

  const headerProps = {
    setVisible,
    handdleAddDoc,
    setConfigPanelOpen,
    configPanelOpen,
    setNoteContent,
    noteContent
  };

  const bodyContentProps = {
    //textContrast,
    //setTitle,
    //setBody,
    //textAlign,
    setNoteContent,
    noteContent
  };

  const configPanel = {
    //setColor,
    //setTextAlign,
    configPanelOpen,
    setNoteContent,
    noteContent

  };

  return (
    <>
      <NewNote backgroundColor={noteContent.background_color} textAlign={noteContent.text_align} id="new">
        {noteError && <Notification>{noteError}</Notification>}
        <div className="general-container">
          <Header {...headerProps} />
          <BodyContent {...bodyContentProps} />
        </div>
      </NewNote>
      <ConfigPanel />
    </>
  );
};

export default New;
