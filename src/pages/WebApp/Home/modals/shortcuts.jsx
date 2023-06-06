import styled, {keyframes} from 'styled-components'

const fadeIn = keyframes`
0%{background-color:red;}
100%{background-color:yellow;}
`

const fadeOut = keyframes`
0%{background-color:green;}
100%{background-color:blue;}
`

const ShortcutsModalContainer = styled.div`
background-color:red;
height:200px;
width:200px;

position:absolute;
top:50%;
left:50%;
transform:translate(-50%,-50%);
animation:${ fadeIn } 2s ease-in-out both;
transition:all 1s ease-in-out;

&.close{
animation:${ fadeOut } 2s ease-in-out both;
//background-color:blue !important;
}
`

const ShortcutsModal = props => {
  const {setShortcutsModal,shortcutsModal} = props;

  const onClose = (e) => {
    e.target.classList.add('close')
    setTimeout(()=>{
      setShortcutsModal(false)
    },2000)
  }

  return(
    <ShortcutsModalContainer onClick={(e)=>onClose(e)} shortcutsModal={shortcutsModal}>
    </ShortcutsModalContainer>
  )
}

export default ShortcutsModal;
