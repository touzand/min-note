import {BackgroundContainer, ContentContainer} from './style';

const Menu = (props) => {
  return <BackgroundContainer onClick={()=>props.setMenu(false)}>

    <ContentContainer>
    </ContentContainer>

    </BackgroundContainer>;
};

export default Menu;
