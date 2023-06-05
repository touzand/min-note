import { Button, ButtonsContainer } from "./style"
import {AiOutlineTag} from 'react-icons/ai'
import {BsFillPersonFill} from 'react-icons/bs'
import {FaRegKeyboard} from 'react-icons/fa'
const Buttons = props => {
  const {setShortcutsModal} = props

let buttonsData = [
  {
    placeHolder:'Shortcuts',
    action:setShortcutsModal,
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
        buttonsData.map(btn=><Button onClick={()=>setShortcutsModal(true)}>
          {btn.icon}
          <span>{ btn.placeHolder }</span>
          </Button>)
      }
    </ButtonsContainer>
  )
}

export default Buttons;
