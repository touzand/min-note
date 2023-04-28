import {DeleteMessage} from "./style"

const OptionMessage = (props) => {
  return(
    <div>
        <DeleteMessage onClick={() => props.setState(false)}>
          <div className="content-container">
            <p>{props.message}</p>
            <div>
              <button onClick={props.action}>Yes</button>
              <button onClick={() =>  props.setState(false)}>No</button>
            </div>
          </div>
        </DeleteMessage>
    </div>
    )
}

export default OptionMessage
