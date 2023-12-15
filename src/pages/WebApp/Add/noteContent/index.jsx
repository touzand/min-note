import TextArea from '../../../../components/TextArea';
import Title from '../../../../components/Title';
import {BodyContentContainer} from './style';

const BodyContent = props => {
  //const {textContrast, setTitle, setBody, textAlign} = props;
  const {setNoteContent, noteContent} = props;

  return (
    <BodyContentContainer>
      <form>
        <Title
          editable={true}
          spellCheck="false"
          //tc={textContrast}
          //setTitle={setTitle}
          //textAlign={textAlign}
          setNoteContent={setNoteContent}
          noteContent={noteContent}
        />
        <TextArea
          placeholder="Type something..."
          spellCheck="false"
          //tc={textContrast}
          //setBody={setBody}
          //textAlign={textAlign}
          setNoteContent={setNoteContent}
          noteContent={noteContent}
        />
      </form>
    </BodyContentContainer>
  );
};

export default BodyContent;
