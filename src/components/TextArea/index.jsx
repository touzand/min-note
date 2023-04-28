import React from "react";
import {TextAreaComponent} from "./style";

const MIN_TEXTAREA_HEIGHT = 32;

const TextArea = (props) => {
  const textareaRef = React.useRef(null);
  const [value, setValue] = React.useState("");
  const onChange = (event) => setValue(event.target.value);

  React.useLayoutEffect(() => {
    // Reset height - important to shrink on delete
    textareaRef.current.style.height = "inherit";
    // Set height
    textareaRef.current.style.height = `${Math.max(
      textareaRef.current.scrollHeight,
      MIN_TEXTAREA_HEIGHT
    )}px`;
  }, [value]);

  return (
    <TextAreaComponent
      onChange={onChange}
      placeholder={props.placeholder}
      ref={textareaRef}
      spellCheck={props.spellCheck}
      onKeyUp={(e)=>{props.setBody(value)}}
      tc={props.tc}
      style={{
        minHeight: MIN_TEXTAREA_HEIGHT,
        resize: "none"
      }}
      defaultValue={props.defaultValue || value}
      textAlign={props.textAlign}
    />
  );
}
export default TextArea
