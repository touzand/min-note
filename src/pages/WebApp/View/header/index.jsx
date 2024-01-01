import {Link} from 'react-router-dom';
import HeaderTop from '../../../../components/Header';
import {Hr, IconButtom} from '../../../../styled-components';
import {HeaderContainer} from './style';
import {BiArrowBack, BiFontFamily} from 'react-icons/bi';
import {RiDeleteBinLine} from 'react-icons/ri';
import {FiEdit} from 'react-icons/fi';
import {HiOutlineSave} from 'react-icons/hi';
import { MdHistoryEdu } from "react-icons/md";

const Header = props => {
  return (
    <>
      <HeaderTop>
        <IconButtom
          both={true}
          textColorContrast={`${props.noteContent.text_color_contrast}`}>
          <Link to="/" translate="no">
            <BiArrowBack />
          </Link>
        </IconButtom>
        <div>

          <IconButtom
            left={true}
            textColorContrast={`${props.noteContent.text_color_contrast}`}
            onClick={() => {
              props.setHistoryLastUpdateOpen(!props.historyLastUpdateOpen)
            }}
            translate="no">
            <MdHistoryEdu/>
          </IconButtom>

          <IconButtom
            textColorContrast={`${props.noteContent.text_color_contrast}`}
            onClick={() => {
              props.activeEdit
                ? props.handdleUpdate()
                : props.setActiveEdit(!props.activeEdit);
            }}
            translate="no">
            {props.activeEdit ? <HiOutlineSave /> : <FiEdit />}
          </IconButtom>

          <IconButtom
            right={true}
            textColorContrast={`${props.noteContent.text_color_contrast}`}
            translate="no"
            to="/"
            onClick={() => props.setDeleteMessage(true)}>
            <RiDeleteBinLine />
          </IconButtom>
        </div>
      </HeaderTop>
      <Hr
        downHeader={true}
        textColorContrast={`${props.noteContent.text_color_contrast}`}
      />
    </>
  );
};

export default Header;
