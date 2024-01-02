import React,{useRef,useState} from 'react';
import {TitleContainer} from './style';

const MIN_TEXTAREA_HEIGHT = 32;

const Title = props => {
  const {setNoteContent, noteContent, editable, content} = props;

  const titu = useRef(content);

  const textareaRef = React.useRef(null);
  const [value, setValue] = useState('');
  const handleValue = event => setValue(event.target.value);

  React.useLayoutEffect(() => {
    // Reset height - important to shrink on delete
    textareaRef.current.style.height = 'inherit';
    // Set height
    textareaRef.current.style.height = `${Math.max(
      textareaRef.current.scrollHeight,
      MIN_TEXTAREA_HEIGHT,
    )}px`;
  }, [value]);

  const handdleUpdate = e => {
      console.log(e.target.innerText.slice(-1));
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
        onChange={handleValue}
      spellCheck="false"
      role="textbox"
        ref={textareaRef}
      textColorContrast={noteContent.text_color_contrast}
      contentEditable={editable}
      suppressContentEditableWarning={true}
      textAlign={noteContent.text_align}
      defaultValue={content}
        style={{
          minHeight: MIN_TEXTAREA_HEIGHT,
          resize: 'none',
        }}
        onKeyUp={e => {
          setNoteContent(prevState => ({...prevState, title: value}));
        }}
    >
      {
      //content ? (titu.current ? titu.current : content) : ''
      }
      {console.log(content)}
    </TitleContainer>
  );
};

export default Title;
