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

  return (
    <>
      <HeaderTop color={props.color}>
        <IconButtom both={true} tc={`${props.textContrast}`}>
          {' '}
          <Link to="/" translate="no">
            <BiArrowBack />
          </Link>
        </IconButtom>
        <div className="header-subsection">
          <IconButtom
            tc={`${props.textContrast}`}
            left={true}
            translate="no"
            onClick={()=>props.setConfigPanelOpen(!props.configPanelOpen)}
            configOpen={props.configPanelOpen}
          >
            <VscSettingsGear />
          </IconButtom>
          <IconButtom
            tc={`${props.textContrast}`}
            right={true}
            onClick={props.handdleAddDoc}
            translate="no">
            <HiOutlineSave />
          </IconButtom>
        </div>
      </HeaderTop>
      <Hr
        fadeIn={true}
        opac={true}
        tc={`${props.textContrast}`}
        style={{borderColor: `${props.textContrast}70`}}
      />
    </>
  );
};

export default Header;
