import TextArea from '../../../../components/TextArea';
import Title from '../../../../components/Title';
import {NoteContentContainer} from './style';

const NoteContent = props => {
  return (
    <NoteContentContainer noteContent={props.noteContent} activeEdit={props.activeEdit}>
      <div className="note-content">
        <Title
          editable={true}
          setNoteContent={props.setNoteContent}
          noteContent={props.noteContent}
          content={props.noteContent.title}
        />
        <TextArea
          placeholder="Type something..."
          spellCheck="false"
          textColorContrast={props.noteContent.text_color_contrast}
          defaultValue={props.noteContent.body}
          textAlign={props.noteContent.text_align}
          setNoteContent={props.setNoteContent}
        />
      </div>
    </NoteContentContainer>
  );
};

export default NoteContent;
