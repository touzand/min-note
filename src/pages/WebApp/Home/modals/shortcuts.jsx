import styled, {keyframes} from 'styled-components';

const fadeIn = keyframes`
0%{transform:translate(-50%,-50%) scale(.9);opacity:0}
100%{transform:translate(-50%,-50%) scale(1);opacity:1}
`;

const fadeOut = keyframes`
0%{transform:translate(-50%,-50%) scale(1);opacity:1}
100%{transform:translate(-50%,-50%) scale(.9);opacity:0}
`;

const ShortcutsModalContainer = styled.div`
background-color:red;
height:200px;
width:200px;

border-radius:.5rem;
position:absolute;
top:50%;
left:50%;
transform:translate(-50%,-50%);
transition:all .3s ease-in-out both;
animation:${fadeIn} .3s ease-in-out;

&.close{
animation:${fadeOut} .3s ease-in-out both;
}
`;

const ShortcutsModal = props => {
  const {setShortcutsModal, shortcutsModal} = props;

  const onClose = e => {
    e.target.classList.add('close');
    setTimeout(() => {
      setShortcutsModal(false);
    }, 300);
  };

  return (
    <ShortcutsModalContainer
      onClick={e => onClose(e)}
      shortcutsModal={shortcutsModal}></ShortcutsModalContainer>
  );
};

export default ShortcutsModal;
