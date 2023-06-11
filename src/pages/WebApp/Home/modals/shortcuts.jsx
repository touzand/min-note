import styled, {keyframes} from 'styled-components';

const fadeIn = keyframes`
0%{transform:scale(.9);opacity:0}
100%{transform:scale(1);opacity:1}
`;

const fadeOut = keyframes`
0%{transform:scale(1);opacity:1}
100%{transform:scale(.9);opacity:0}
`;

const ShortcutsModalContainer = styled.div`
background-color:red;

border-radius:.5rem;
position:relative;
//top:50%;
//left:50%;
//transform:translate(-50%,-50%);
transition:all .3s ease-in-out both;
animation:${fadeIn} .3s ease-in-out;

&.close{
animation:${fadeOut} .3s ease-in-out both;
}
`;

const Shortcut = styled.figure`
span{
display:flex;
  align-items:end;
gap:1rem;
}

b{
  background-color:#1d1d1f;
  border:solid thin black;
  padding:.25rem .5rem;
  border-radius:.25rem;
}

`

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
      shortcutsModal={shortcutsModal}>

      <Shortcut>
        <span><b>o</b>,<b>j</b> New note</span>
      </Shortcut>

    </ShortcutsModalContainer>
  );
};

export default ShortcutsModal;