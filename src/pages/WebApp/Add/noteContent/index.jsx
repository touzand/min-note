import TextArea from '../../../../components/textArea';
import Title from '../../../../components/Title';
import {BodyContentContainer} from './style';

const BodyContent = props => {
  const {textContrast, setTitle, setBody, textAlign} = props;

  return (
    <BodyContentContainer>
      <form>
        <Title
          tc={textContrast}
          setTitle={setTitle}
          editable={true}
          textAlign={textAlign}
        />
        <TextArea
          placeholder="Type something..."
          spellCheck="false"
          tc={textContrast}
          setBody={setBody}
          textAlign={textAlign}
        />
      </form>
    </BodyContentContainer>
  );
};

export default BodyContent;
