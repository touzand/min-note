import { Hr } from "../../styled-components";
import { HeaderContainer } from "./style";

const HeaderTop = (props) => {
  return (
    <>
      <HeaderContainer className={props.query & "up-header"}>{props.children}</HeaderContainer>
    </>
  );
};

export default HeaderTop;
