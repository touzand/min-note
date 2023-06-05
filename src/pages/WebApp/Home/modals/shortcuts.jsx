import styled, {keyframes} from 'styled-components'

const fadeIn = keyframes`
0%{}
100%{}
`

const fadeOut = keyframes`
0%{}
100%{}
`

const ShortcutsModalContainer = styled.div`
background-color:red;
height:200px;
width:200px;

position:absolute;
top:50%;
left:50%;
transform:translate(-50%,-50%);
//transition:all .5s ease-in;

//animation:${props=>props.shortcutsModal ? fadeIn : fadeOut} 1s ease-in-out both;

//animation:${fadeIn} 1s ease-in-out both;
`

const ShortcutsModal = props => {
  const {setShortcutsModal,shortcutsModal} = props;

  return(
    <ShortcutsModalContainer onClick={()=>setShortcutsModal(false)} shortcutsModal={shortcutsModal}>
    </ShortcutsModalContainer>
  )
}

export default ShortcutsModal;
