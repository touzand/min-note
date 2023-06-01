import { Button, ButtonsContainer } from "./style"
import {AiOutlineTag} from 'react-icons/ai'
import {BsFillPersonFill} from 'react-icons/bs'
import {FaRegKeyboard} from 'react-icons/fa'

let buttonsData = [
  {
    placeHolder:'Shortcuts',
    action:'',
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

const Buttons = () => {
  return(
    <ButtonsContainer>
      {
        buttonsData.map(btn=><Button>
          <span>{ btn.placeHolder }</span>
          {btn.icon}
          </Button>)
      }
    </ButtonsContainer>
  )
}

export default Buttons;
