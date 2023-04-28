import TextArea from "../../../../components/textArea"
import Title from "../../../../components/Title"
import {BodyContentContainer} from "./style"

const BodyContent = (props) => {
  return(
    <BodyContentContainer>
        <div className="form">
          <Title 
            tc={ props.textContrast }
            setTitle={props.setTitle}
            editable={true}
            textAlign={props.textAlign}
          />
          <TextArea
            placeholder="Type something..."
            spellCheck="false"
            tc={ props.textContrast }
            setBody={props.setBody}
            textAlign={props.textAlign}
          />
        </div>
    </BodyContentContainer>
  )
}

export default BodyContent
