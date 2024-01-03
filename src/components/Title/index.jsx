import React, {useRef, useState} from 'react';
import {TitleContainer} from './style';


const Title = props => {
  const {setNoteContent, noteContent, editable, content,placeholder} = props;
const MIN_TEXTAREA_HEIGHT = 32;

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

  return (
    <TitleContainer
      contentEditable={editable}
      onChange={handleValue}
      spellCheck="false"
      ref={textareaRef}
        placeholder={placeholder}
      textColorContrast={noteContent.text_color_contrast}
      textAlign={noteContent.text_align}
      defaultValue={content}
      style={{
        minHeight: MIN_TEXTAREA_HEIGHT,
        resize: 'none',
      }}
      onKeyUp={e => {
        setNoteContent(prevState => ({...prevState, title: value}));
      }}/>
  );
};

export default Title;
