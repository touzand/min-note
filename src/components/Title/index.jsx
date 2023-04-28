import {TitleContainer} from "./style";

const Title = (props) => {
  return (
    <TitleContainer
      tc={props.tc}
      role="textbox"
      contentEditable={props.editable && true}
      spellCheck="false"
      onKeyUp={(e) => props.setTitle(e.target.textContent)}
      textAlign={props.textAlign}
    >{props.content && props.content}</TitleContainer>
  );
};

export default Title;
