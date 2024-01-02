import {useRef} from 'react';
import {TitleContainer} from './style';

const Title = props => {
  const {setNoteContent, noteContent, editable, content} = props;

  const titu = useRef(content);

  const handdleUpdate = e => {
      console.log(e.target.innerText);
    if (e.keyCode === 46 || e.keyCode === 8) {
      console.log(e.target.textContent);
      setNoteContent(prevState => ({
        ...prevState,
        title: e.target.textContent,
      }));
    } else {
      console.log(e.target);
      setNoteContent(prevState => ({
        ...prevState,
        title: e.target.textContent,
      }));
    }
  };

  return (
    <TitleContainer
      spellCheck="false"
      role="textbox"
      textColorContrast={noteContent.text_color_contrast}
      contentEditable={editable}
      suppressContentEditableWarning={true}
      textAlign={noteContent.text_align}
      onKeyUp={e => handdleUpdate(e)}>
      {
      content ? (titu.current ? titu.current : content) : ''
      }
      {console.log(content)}
    </TitleContainer>
  );
};

export default Title;
