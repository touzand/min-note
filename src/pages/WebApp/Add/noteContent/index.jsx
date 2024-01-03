import TextArea from '../../../../components/TextArea';
import Title from '../../../../components/Title';
import {BodyContentContainer} from './style';

const BodyContent = props => {
  const {setNoteContent, noteContent} = props;

  return (
    <BodyContentContainer>
      <form>
        <Title
          editable={true}
          spellCheck="false"
          setNoteContent={setNoteContent}
          noteContent={noteContent}
          placeholder="Title"
        />
        <TextArea
          placeholder="Type something..."
          spellCheck="false"
          setNoteContent={setNoteContent}
          noteContent={noteContent}
        />
      </form>
    </BodyContentContainer>
  );
};

export default BodyContent;
