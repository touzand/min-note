import {Link} from 'react-router-dom';
import {Hr, IconButtom} from '../../../../styled-components';
import {HeaderContainer} from './style';
import {BiArrowBack, BiFontFamily} from 'react-icons/bi';
import {VscSettingsGear} from 'react-icons/vsc';
import {HiOutlineColorSwatch, HiOutlineSave} from 'react-icons/hi';
import HeaderTop from '../../../../components/Header';
import {FaAlignJustify, FaAlignLeft, FaAlignRight} from 'react-icons/fa';
import {useState} from 'react';
//import ColorPicker from '../configurations/colorPicker';

const Header = props => {
  const [textAlignVisible, setTextAlignVisible] = useState(false);
  const [colorPicker, setColorPicker] = useState(false);
  const {
    setVisible,
    handdleAddDoc,
    setConfigPanelOpen,
    configPanelOpen,
    noteContent,
  } = props;

  const handdleSetConfigPanel = () => {
    setConfigPanelOpen(!configPanelOpen);
  };

  const buttonsData = [
    {
      icon: <VscSettingsGear />,
      func: handdleSetConfigPanel,
    },
    {
      icon: <HiOutlineSave />,
      func: handdleAddDoc,
    },
  ];
  return (
    <>
      <HeaderTop color={noteContent.background_color}>
        <IconButtom
          both={true}
          textColorContrast={`${noteContent.text_color_contrast}`}>
          <Link to="/" translate="no">
            <BiArrowBack />
          </Link>
        </IconButtom>
        <div className="header-subsection">
          {buttonsData.map((button, index) => (
            <IconButtom
              textColorContrast={`${noteContent.text_color_contrast}`}
              onClick={button.func}
              left={index === 0 && true}
              right={index === 1 && true}
              translate="no">
              {button.icon}
            </IconButtom>
          ))}
        </div>
      </HeaderTop>
      <Hr
        fadeIn={true}
        opac={true}
        textColorContrast={`${noteContent.text_color_contrast}`}
        style={{borderColor: `${noteContent.text_color_contrast}70`}}
      />
    </>
  );
};

export default Header;
