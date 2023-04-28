import { Hr } from "../../styled-components";
import { HeaderContainer } from "./style";

const HeaderTop = (props) => {
  return (
    <>
      <HeaderContainer>{props.children}</HeaderContainer>
    </>
  );
};

export default HeaderTop;
