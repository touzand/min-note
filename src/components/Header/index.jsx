import { Hr } from "../../styled-components";
import { HeaderContainer } from "./style";

const HeaderTop = (props) => {
  return (
    <>
      <HeaderContainer home={props.home} className={props.className ? 'up-header': 'down-header'}>{props.children}</HeaderContainer>
    </>
  );
};

export default HeaderTop;
