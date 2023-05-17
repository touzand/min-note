import {TitleContainer} from './style';

const Title = props => {
  const {tc, editable, setTitle, textAlign, content} = props;

  return (
    <TitleContainer
      tc={tc}
      role="textbox"
      contentEditable={editable && true}
      spellCheck="false"
      onKeyUp={e => setTitle(e.target.textContent)}
      textAlign={textAlign}>
      {content && content}
    </TitleContainer>
  );
};

export default Title;
