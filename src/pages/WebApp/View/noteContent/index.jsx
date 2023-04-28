import TextArea from "../../../../components/textArea";
import { NoteContentContainer } from "./style";

const NoteContent = (props) => {
  return (
    <NoteContentContainer className="note-content edit-enable">
      <div className="note-content edit-enable">
        <span
          className="new-note title"
          id="title"
          role="textbox"
          contentEditable
          onKeyUp={(e) => props.setTitle(e.target.textContent)}
          span={props.data.title}
          spellCheck="false"
          textAlign={props.data.align}
        ></span>
        <span className={`${props.activeEdit ? "date-edit" : "date"}`}>
          {props.data.date}
        </span>
        <TextArea
          placeholder="Type something..."
          spellCheck="false"
          tc={props.data.text}
          setBody={props.setBody}
          defaultValue={props.data.body}
          textAlign={props.data.align}
        />
      </div>
    </NoteContentContainer>
  );
};

export default NoteContent;
