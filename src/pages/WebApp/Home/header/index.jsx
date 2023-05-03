import {userAuth} from '../../../../contexts/AuthContext';
import OptionMessage from '../../../../components/optionMessage';
import {HeaderContainer} from './style';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import useIsMobile from '../../../../hooks/useIsMobile';
import {Hr, IconButtom} from '../../../../styled-components';
import {IoMdAdd} from 'react-icons/io';
import {BsSearch} from 'react-icons/bs';
import {GoSignOut} from 'react-icons/go';
import {CgMenuGridO} from 'react-icons/cg';
import HeaderTop from '../../../../components/Header';

const Header = props => {
  const [messageNotification, setOptionMessage] = useState(false);
  const navigate = useNavigate();
  const {user, SignOut} = userAuth();
  const isMobile = useIsMobile(800);

  const handdleAdd = () => {
    document
      .querySelector('.add-background-transition')
      .classList.add('background-transition-expand');
    setTimeout(() => {
      navigate('/new');
    }, 600);
  };

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
      <HeaderTop className={props.query && 'up-header'}>
        <article
          className={`${props.searchVisible ? 'up-header' : 'down-header'}`}
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'relative',
          }}>
          <h1>All notes</h1>
          <div className="header-subsection">
            <IconButtom
              tc={`#F6F1E9`}
              onClick={() => props.setMenu(true)}
              translate="no">
              <CgMenuGridO/>
            </IconButtom>
          </div>
        </article>
      </HeaderTop>
    </>
  );
};

export default Header;

//{!isMobile && (
//<IconButtom
//tc={`#F6F1E9`}
//left={true}
//onClick={handdleAdd}
//translate="no"
//>
//<IoMdAdd/>
//</IconButtom>
//)}

//<IconButtom
//className="search"
//onClick={() => props.setSearchVisible(true)}
//translate="no"
//tc={`#F6F1E9`}
//>
//<BsSearch/>
//</IconButtom>
//<IconButtom
//tc={`#F6F1E9`}
//onClick={() => setOptionMessage(true)}
//translate="no"
//right={!isMobile && true}
//>
//<GoSignOut/>
//</IconButtom>
