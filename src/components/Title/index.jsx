import {useRef} from 'react';
import {TitleContainer} from './style';

const Title = props => {
  //const {tc, editable, setTitle, textAlign, content,setNoteContent} = props;
  const {setNoteContent, noteContent, editable, content} = props;

  const titu = useRef(content);

  const handdleUpdate = e => {
    setNoteContent(prevState => ({
      ...prevState,
      title: e.target.textContent,
    }));

    //titu.current = e.target.textContent;
  };

  return (
    <TitleContainer
      spellCheck="false"
      role="textbox"
      textColorContrast={noteContent.text_color_contrast}
      contentEditable={editable}
      suppressContentEditableWarning={true}
      textAlign={noteContent.text_align}
      onKeyPress={
        e => handdleUpdate(e)
        //console.log(titu,e.target.textContent)
      }>
      {content ? (titu.current ? titu.current : content) : ''}
      {
        //console.log(titu.current)
      }
    </TitleContainer>
  );
};

export default Title;
