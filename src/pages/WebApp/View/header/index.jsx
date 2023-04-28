import { Link } from "react-router-dom";
import HeaderTop from "../../../../components/Header";
import { Hr, IconButtom } from "../../../../styled-components";
import { HeaderContainer } from "./style";
import { BiArrowBack, BiFontFamily } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { HiOutlineSave } from "react-icons/hi";

const Header = (props) => {
  return (
    <>
      <HeaderTop>
        <IconButtom both={true} tc={`${props.data.text}70`}>
          <Link to="/" translate="no">
            <BiArrowBack />
          </Link>
        </IconButtom>
        <div>
          <IconButtom left={true} tc={`${props.data.text}70`}>
            <div
              translate="no"
              to="/"
              onClick={() => props.setDeleteMessage(true)}
            >
              <RiDeleteBinLine />
            </div>
          </IconButtom>
          {props.activeEdit ? (
            <IconButtom right={true} tc={`${props.data.text}70`}>
              <div to="/" onClick={props.handdleUpdate} translate="no">
                <HiOutlineSave />
              </div>
            </IconButtom>
          ) : (
            <IconButtom right={true} tc={`${props.data.text}70`}>
              <div
                to="/"
                onClick={() => props.setActiveEdit(!props.activeEdit)}
                translate="no"
              >
                <FiEdit />
              </div>
            </IconButtom>
          )}
        </div>
      </HeaderTop>
      <Hr tc={`${props.data.text}70`}/> 
    </>
  );
};

export default Header;
