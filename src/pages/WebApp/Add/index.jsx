import {useState} from 'react';
import {userAuth} from '../../../contexts/AuthContext';
import {useNavigate} from 'react-router-dom';
import Notification from '../../../components/notification';
import {useEffect} from 'react';
import {NewNote} from './style';
import Header from './header';
//import ColorPicker from './configurations/colorPicker';
import BodyContent from './noteContent';
import {Hr} from '../../../styled-components';
import ConfigPanel from './configPanel';

const New = () => {
  const [noteError, setNoteError] = useState('');
  const [color, setColor] = useState('#DDDDDD');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [textContrast, setTextContrast] = useState('#1b1b1b');
  const [visible, setVisible] = useState(false);
  const {AddDoc} = userAuth();
  const navigate = useNavigate();
  const [textAlign, setTextAlign] = useState('left');
  const [configPanelOpen,setConfigPanelOpen] = useState(false)

  const formatDate = date => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();

    return `${month} ${day}, ${year}`;
  };

  const handdleColorPicker = e => {
    setColor(e.target.getAttribute('value'));
    setVisible(false);
    e.target.classList.add('color-picker-expand');
  };

  const handdleAddDoc = async () => {
    if (title && body && color) {
      const date = formatDate(new Date());
      await AddDoc(title, body, color, date, textContrast, textAlign);
      navigate('/');
    } else {
      setNoteError('You cannot save a note without title or body');
      setTimeout(() => {
        setNoteError('');
      }, 5000);
    }
  };

  useEffect(() => {
    if (color === '#7BD5E1' || color === '#DDE595' || color === '#DDDDDD') {
      setTextContrast('#1b1b1b');
    } else if (
      color === '#F5A38A' ||
      color === '#F3C57D' ||
      color === '#C78DD0'
    ) {
      setTextContrast('#F6F1E9');
    }
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
            handdleColorPicker={handdleColorPicker}
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
      <ConfigPanel setColor={setColor} setTextAlign={setTextAlign}/>
    </>
  );
};

export default New;
