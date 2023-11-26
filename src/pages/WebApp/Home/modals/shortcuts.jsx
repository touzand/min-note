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
background-color:#1a1c20;

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
gap:.25rem;
}

b{

  background-color: rgb(243,243,243);
    color: rgb(33,33,33);
    margin-left: 2px;
    padding-top: 1px;
    padding-bottom: 1px;
    padding-left: 4px;
    padding-right: 4px;
    border-radius: 3px;
    border: solid 1px #ccc;
    border-bottom-color: #bbb;
    box-shadow: inset 0 -1px 0 #bbb;
    font-family: monospace;
    font-size: 11px;

    background-color: #1d1d1f;
    border: solid 1px black;
    box-shadow: none;
    color: white;
`

const shortcutsList = [
  '<span><b>o</b>,<b>j</b> New note</span>',
  '<span><b>o</b>,<b>j</b> New note</span>',
  '<span><b>o</b>,<b>j</b> New note</span>',
  '<span><b>o</b>,<b>j</b> New note</span>',
  '<span><b>o</b>,<b>j</b> New note</span>',
  '<span><b>o</b>,<b>j</b> New note</span>',
  '<span><b>o</b>,<b>j</b> New note</span>',
]

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

        {
          shortcutsList.map(shortcut=>
      <Shortcut dangerouslySetInnerHTML={{ __html: shortcut }}>
      </Shortcut>
          )
        }

    </ShortcutsModalContainer>
  );
};

export default ShortcutsModal;
