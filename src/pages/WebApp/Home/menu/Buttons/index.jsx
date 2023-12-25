import {Button, ButtonsContainer} from './style';
import {AiOutlineTag} from 'react-icons/ai';
import {MdFullscreenExit} from 'react-icons/md';
import {BsFillPersonFill} from 'react-icons/bs';
import {FaRegKeyboard} from 'react-icons/fa';
import {IoLogOutOutline} from 'react-icons/io5';
import {useState} from 'react';
import OptionMessage from '../../../../../components/OptionMessage';
import {userAuth} from '../../../../../contexts/AuthContext';
import {CloseFullS, LaunchFullS} from '../../../../../helpers/helpFullScreen';
import {handdleSignOut} from '../../../../../helpers/helpSignOut';
import {MdFullscreen} from 'react-icons/md';
import {GoSignOut} from 'react-icons/go';

const Buttons = props => {
  const {setShortcutsModal, setMenu, setTagsModal} = props;
  const [messageNotification, setOptionMessage] = useState(false);
  const {user, SignOut} = userAuth();
  const [fullScreen, setFullScreen] = useState(false);

  return (
    <>
      {messageNotification && (
        <OptionMessage
          message="Do you wanna sign out ?"
          action={() => handdleSignOut(SignOut)}
          setState={setOptionMessage}
        />
      )}
      <ButtonsContainer>
        <Button onClick={e => setOptionMessage(true)}>
          <GoSignOut />
          <span>Log out</span>
        </Button>

        <Button
          onClick={e => {
            fullScreen ? CloseFullS(setFullScreen) : LaunchFullS(setFullScreen);
          }}>
          <MdFullscreenExit />
          <span>{fullScreen ? 'Exit full Screen' : 'Full screen'}</span>
        </Button>
      </ButtonsContainer>
    </>
  );
};

export default Buttons;
