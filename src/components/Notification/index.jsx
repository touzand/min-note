import {NotificationContainer} from "./style";

const Notification = (props) => <NotificationContainer><p className={props.final}>{props.children}</p></NotificationContainer>
export default Notification;
