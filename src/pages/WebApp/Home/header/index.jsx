//... React
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
//... Styled
import {HeaderContainer} from './style';
//... Hooks
import useIsMobile from '../../../../hooks/useIsMobile';
// ... Context
import {userAuth} from '../../../../contexts/AuthContext';
//... React icons
import {IoMdAdd} from 'react-icons/io';
import {BsSearch} from 'react-icons/bs';
import {GoSignOut} from 'react-icons/go';
import {CgMenuGridO} from 'react-icons/cg';
//... Components
import HeaderTop from '../../../../components/Header';
import OptionMessage from '../../../../components/optionMessage';
import {HeaderButton, Hr, IconButtom} from '../../../../styled-components';

const Header = props => {
  const {query, searchVisible, setSearchVisible, setMenu} = props;
  const [messageNotification, setOptionMessage] = useState(false);
  const navigate = useNavigate();
  const {user, SignOut} = userAuth();
  const isMobile = useIsMobile(800);

  const handdleSignOut = async () => {
    try {
      await SignOut();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {messageNotification && (
        <OptionMessage
          message="Do you wanna sign out ?"
          action={handdleSignOut}
          setState={setOptionMessage}
        />
      )}
      <HeaderTop className={query && 'up-header'} home={true}>
        <article
          className={`${searchVisible ? 'up-header' : 'down-header'}`}
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'relative',
          }}>
          <h1>All notes 0000</h1>
          <div className="header-subsection">
            <HeaderButton
              tc={`#F6F1E9`}
              onClick={() => setMenu(true)}
              translate="no">
              <CgMenuGridO />
            </HeaderButton>
          </div>
        </article>
      </HeaderTop>
    </>
  );
};

export default Header;
