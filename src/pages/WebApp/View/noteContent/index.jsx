import TextArea from "../../../../components/TextArea";
import Title from "../../../../components/Title";
import { NoteContentContainer } from "./style";

const NoteContent = (props) => {
  return (
    <NoteContentContainer className="note-content edit-enable" noteContent={props.noteContent}>
      {console.log(props.noteContent)}
      <div className="note-content edit-enable">
        <Title
          editable={true}
          //tc={textContrast}
          //setTitle={setTitle}
          //textAlign={textAlign}
          setNoteContent={props.setNoteContent}
          noteContent={props.noteContent}
          content={props.noteContent.title}
        />
        {
        //<span
          //className="new-note title"
          //id="title"
          //role="textbox"
          //contentEditable
          //onKeyUp={(e) => props.setTitle(e.target.textContent)}
          //span={props.noteContent.title}
          //spellCheck="false"
          //textAlign={props.noteContent.align}
        //></span>
          }
        {
          //<span className={`${props.activeEdit ? "date-edit" : "date"}`}>
          //{props.noteContent.date}
          //</span>
        }
        <TextArea
          placeholder="Type something..."
          spellCheck="false"
          textColorContrast={props.noteContent.text_color_contrast}
          //setBody={props.setBody}
          defaultValue={props.noteContent.body}
          textAlign={props.noteContent.align}
          setNoteContent={props.setNoteContent}
        />
      </div>
    </NoteContentContainer>
  );
};

export default NoteContent;
