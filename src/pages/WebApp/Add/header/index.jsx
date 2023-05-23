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
    textContrast,
    setVisible,
    handdleAddDoc,
    color,
    setTextAlign,
    setConfigPanelOpen,
    configPanelOpen,
  } = props;

  return (
    <>
      <HeaderTop color={color}>
        <IconButtom both={true} tc={`${textContrast}`}>
          <Link to="/" translate="no">
            <BiArrowBack />
          </Link>
        </IconButtom>
        <div className="header-subsection">
          <IconButtom
            tc={`${textContrast}`}
            left={true}
            translate="no"
            onClick={() => setConfigPanelOpen(!configPanelOpen)}
            configOpen={configPanelOpen}>
            <VscSettingsGear />
          </IconButtom>
          <IconButtom
            tc={`${textContrast}`}
            right={true}
            onClick={handdleAddDoc}
            translate="no">
            <HiOutlineSave />
          </IconButtom>
        </div>
      </HeaderTop>
      <Hr
        fadeIn={true}
        opac={true}
        tc={`${textContrast}`}
        style={{borderColor: `${textContrast}70`}}
      />
    </>
  );
};

export default Header;
