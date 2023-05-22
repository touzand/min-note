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
  const [color, setColor] = useState('#DDDDDD');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [textContrast, setTextContrast] = useState('#1b1b1b');
  const [textAlign, setTextAlign] = useState('left');

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

    darkFontColorValidation.includes(color)
      ? setTextContrast('#1b1b1b')
      : setTextContrast('#F6F1E9');
  }, [color]);

  return (
    <>
      <NewNote bg={color} tc={textContrast} id="new">
        {noteError && <Notification>{noteError}</Notification>}
        <div className="general-container">
          <Header
            textContrast={textContrast}
            setVisible={setVisible}
            handdleAddDoc={handdleAddDoc}
            color={color}
            setTextAlign={setTextAlign}
            setConfigPanelOpen={setConfigPanelOpen}
            configPanelOpen={configPanelOpen}
          />
          <BodyContent
            textContrast={textContrast}
            setTitle={setTitle}
            setBody={setBody}
            textAlign={textAlign}
          />
        </div>
      </NewNote>
      <ConfigPanel
        setColor={setColor}
        setTextAlign={setTextAlign}
        configPanelOpen={configPanelOpen}
      />
    </>
  );
};

export default New;
