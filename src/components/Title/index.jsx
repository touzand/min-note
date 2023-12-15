import {useRef} from 'react';
import {TitleContainer} from './style';

const Title = props => {
  //const {tc, editable, setTitle, textAlign, content,setNoteContent} = props;
  const {setNoteContent, noteContent, editable, content} = props;

  const titu = useRef(content);

  const handdleUpdate = e => {
    if (e.keyCode === 46 || e.keyCode === 8) {
      console.log(e.target.textContent)
    setNoteContent(prevState => ({
      ...prevState,
      title: e.target.textContent,
    }));
} else {
      console.log(e.target.textContent)
    setNoteContent(prevState => ({
      ...prevState,
      title: e.target.textContent,
    }));
}

    //setNoteContent(prevState => ({
      //...prevState,
      //title: e.target.textContent,
    //}));

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
      onKeyDown={
        e => handdleUpdate(e)
        //console.log(titu,e.target.textContent)
      }>
      {content ? (titu.current ? titu.current : content) : ''}
      {
      console.log(content)
      }
    </TitleContainer>
  );
};

export default Title;
