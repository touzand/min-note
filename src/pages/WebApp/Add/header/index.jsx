import { Link } from "react-router-dom";
import { Hr, IconButtom } from "../../../../styled-components";
import { HeaderContainer } from "./style";
import { BiArrowBack, BiFontFamily } from "react-icons/bi";
import { HiOutlineColorSwatch, HiOutlineSave } from "react-icons/hi";
import HeaderTop from "../../../../components/Header";
import { FaAlignJustify, FaAlignLeft, FaAlignRight } from "react-icons/fa";
import { useState } from "react";
import ColorPicker from "../configurations/colorPicker";

const Header = (props) => {
  const [textAlignVisible, setTextAlignVisible] = useState(false);
  const [colorPicker, setColorPicker] = useState(false);

  return (
    <>
      <HeaderTop color={props.color}>
        <IconButtom both={true} tc={`${props.textContrast}70`}> <Link to="/" translate="no">
            <BiArrowBack />
          </Link>
        </IconButtom>
        <div className="header-subsection">
          <IconButtom
            left={true}
            tc={`${props.textContrast}70`}
            onClick={(e) => setTextAlignVisible(!textAlignVisible)}
          >
            <BiFontFamily />
            {textAlignVisible && (
              <div className="option-container text-align">
                <article onClick={(e) => props.setTextAlign("left")}>
                  <FaAlignLeft />
                  <span>Left</span>
                </article>
                <article onClick={(e) => props.setTextAlign("center")}>
                  <FaAlignJustify />
                  <span>Center</span>
                </article>
                <article onClick={(e) => props.setTextAlign("right")}>
                  <FaAlignRight />
                  <span>Right</span>
                </article>
              </div>
            )}
          </IconButtom>
          <IconButtom
            tc={`${props.textContrast}70`}
            onClick={(e) => setColorPicker(!colorPicker)}
            //onClick={() => props.setVisible(true)}
          >
            <HiOutlineColorSwatch />
            {colorPicker &&
            <div className="option-container color-picker">
              <article value="#F5A38A" onClick={props.handdleColorPicker}>
                <div style={{backgroundColor:"#F5A38A"}}></div>
                <span>Dark Salmon</span>
              </article>
              <article value="#f3C57D" onClick={props.handdleColorPicker}>
                <div style={{backgroundColor:"#f3C57D"}}></div>
                <span>Sandy Brown</span>
              </article>
              <article value="#DDE595" onClick={props.handdleColorPicker}>
                <div style={{backgroundColor:"#DDE595"}}></div>
                <span>Khabi</span>
              </article>
              <article value="#7BD5E1" onClick={props.handdleColorPicker}>
                <div style={{backgroundColor:"#7BD5E1"}}></div>
                <span>Light Sky Blue</span>
              </article>
              <article value="#C78DD0" onClick={props.handdleColorPicker}>
                <div style={{backgroundColor:"#C78DD0"}}></div>
                <span>Plum</span>
              </article>
              <article value="#DDDDDD" onClick={props.handdleColorPicker}>
                <div style={{backgroundColor:"#DDDDDD"}}></div>
                <span>Gainsboro</span>
              </article>
            </div>
            }
          </IconButtom>
          <IconButtom
            tc={`${props.textContrast}70`}
            right={true}
            onClick={props.handdleAddDoc}
            translate="no"
          >
            <HiOutlineSave />
          </IconButtom>
        </div>
      </HeaderTop>
      <Hr
        fadeIn={true}
        opac={true}
        tc={`${props.textContrast}70`}
        style={{ borderColor: `${props.textContrast}70` }}
      />
    </>
  );
};

export default Header;
