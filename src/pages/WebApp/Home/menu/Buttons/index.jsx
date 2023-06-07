import { Button, ButtonsContainer } from "./style"
import {AiOutlineTag} from 'react-icons/ai'
import {BsFillPersonFill} from 'react-icons/bs'
import {FaRegKeyboard} from 'react-icons/fa'
const Buttons = props => {
  const {setShortcutsModal, setMenu} = props

  const onShortcutsModalOpen = () =>{
    setMenu(false)
    setShortcutsModal(true)
  }

let buttonsData = [
  {
    placeHolder:'Shortcuts',
    action:onShortcutsModalOpen,
    icon:<FaRegKeyboard/>
  },
  {
    placeHolder:'Tags',
    action:'',
    icon:<AiOutlineTag/>
  },
  {
    placeHolder:'Account',
    action:'',
    icon:<BsFillPersonFill/>
  }
]

  return(
    <ButtonsContainer>
      {
        buttonsData.map(btn=><Button onClick={()=>btn.action()}>
          {btn.icon}
          <span>{ btn.placeHolder }</span>
          </Button>)
      }
    </ButtonsContainer>
  )
}

export default Buttons;
