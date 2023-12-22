import {Button, ButtonsContainer} from './style';
import {AiOutlineTag} from 'react-icons/ai';
import { MdFullscreen } from "react-icons/md";
import { MdFullscreenExit } from "react-icons/md";
import {BsFillPersonFill} from 'react-icons/bs';
import {FaRegKeyboard} from 'react-icons/fa';
import {IoLogOutOutline} from 'react-icons/io5';
import {GoSignOut} from 'react-icons/go';
import {useState} from 'react';
import OptionMessage from '../../../../../components/OptionMessage';
import {userAuth} from '../../../../../contexts/AuthContext';

const Buttons = props => {
  const {setShortcutsModal, setMenu, setTagsModal} = props;

  const onShortcutsModalOpen = () => {
    //setMenu(false)
    setShortcutsModal(true);
    setTagsModal(false);
  };

  const onTagsModalOpen = () => {
    //setMenu(false)
    setShortcutsModal(false);
    setTagsModal(true);
  };

  let buttonsData = [
    {
      placeHolder: 'Shortcuts',
      action: onShortcutsModalOpen,
      icon: <FaRegKeyboard />,
    },
    {
      placeHolder: 'Tags',
      action: onTagsModalOpen,
      icon: <AiOutlineTag />,
    },
    {
      placeHolder: 'Account',
      action: '',
      icon: <BsFillPersonFill />,
    },
  ];

  const [messageNotification, setOptionMessage] = useState(false);
  const {user, SignOut} = userAuth();
  const [fullScreenl, setFullScreen] = useState(false);

  const handdleSignOut = async () => {
    try {
      await SignOut();
    } catch (err) {
      console.log(err);
    }
  };

  const LuanchFullScreen = () => {
    setFullScreen(true);
    if (document.documentElement.requestFullScreen) {
      document.documentElement.requestFullScreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullScreen) {
      document.documentElement.webkitRequestFullScreen();
    }
  };

  const CloseFullScreen = () => {
    if (document.cancelFullScreen) {
      document.cancelFullScreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
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
      <ButtonsContainer>
        {
          //buttonsData.map(btn=><Button onClick={()=>btn.action()}>
          //{btn.icon}
          //<span>{ btn.placeHolder }</span>
          //</Button>)
        }
        <Button onClick={e => setOptionMessage(true)}>
          <GoSignOut />
          <span>Log out</span>
        </Button>
        {fullScreenl ? (
          <Button onClick={e => CloseFullScreen()}>
            <MdFullscreenExit />
            <span>Exit full Screen</span>
          </Button>
        ) : (
          <Button onClick={e => LuanchFullScreen()}>
            <MdFullscreen />
            <span>Full Screen</span>
          </Button>
        )}
      </ButtonsContainer>
    </>
  );
};

export default Buttons;
