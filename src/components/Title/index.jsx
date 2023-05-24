import {TitleContainer} from './style';

const Title = props => {
  //const {tc, editable, setTitle, textAlign, content,setNoteContent} = props;
  const {setNoteContent,noteContent,editable,content} = props;

  return (
    <TitleContainer
      spellCheck="false"
      role="textbox"
      textColorContrast={noteContent.text_color_contrast}
      contentEditable={editable && true}
      onKeyUp={e => setNoteContent(prevState=>( {...prevState,title:e.target.textContent} ))}
      textAlign={noteContent.text_align}>
      {content && content}
    </TitleContainer>
  );
};

export default Title;
