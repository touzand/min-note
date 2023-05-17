import {Hr} from '../../styled-components';
import {HeaderContainer} from './style';

const HeaderTop = props => {
const {home,className, children} = props;

  return (
    <>
      <HeaderContainer
        home={home}
        className={className ? 'up-header' : 'down-header'}>
        {children}
      </HeaderContainer>
    </>
  );
};

export default HeaderTop;
