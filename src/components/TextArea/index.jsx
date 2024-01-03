import React from 'react';
import {TextAreaComponent} from './style';

const MIN_TEXTAREA_HEIGHT = 32;

const TextArea = props => {
  const {
    placeholder,
    spellCheck,
    defaultValue,
    textAlign,
    setNoteContent,
    noteContent,
    textColorContrast,
  } = props;
  const textareaRef = React.useRef(null);
  const [value, setValue] = React.useState('');
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
    <>
      <TextAreaComponent
        onChange={handleValue}
        spellCheck={spellCheck}
        ref={textareaRef}
        placeholder={placeholder}
        textColorContrast={
          textColorContrast || props.noteContent.text_color_contrast
        }
        textAlign={textAlign || props.noteContent.text_align}
        defaultValue={defaultValue || value}
        style={{
          minHeight: MIN_TEXTAREA_HEIGHT,
          resize: 'none',
        }}
        onKeyUp={e => {
          setNoteContent(prevState => ({...prevState, body: value}));
        }}
      />
    </>
  );
};
export default TextArea;
