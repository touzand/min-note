import {DeleteMessage} from "./style"

const OptionMessage = (props) => {
const {setState,message,action} = props;

  return(
    <div>
        <DeleteMessage onClick={() => setState(false)}>
          <div className="content-container">
            <p>{message}</p>
            <div>
              <button onClick={action}>Yes</button>
              <button onClick={() =>  setState(false)}>No</button>
            </div>
          </div>
        </DeleteMessage>
    </div>
    )
}

export default OptionMessage
