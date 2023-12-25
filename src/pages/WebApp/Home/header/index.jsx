//... React
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
//... Hooks
import useIsMobile from '../../../../hooks/useIsMobile';
// ... Context
import {userAuth} from '../../../../contexts/AuthContext';
//... React icons
import {IoMdAdd} from 'react-icons/io';
import {BsSearch} from 'react-icons/bs';
import {CgMenuGridO} from 'react-icons/cg';
//... Components
import HeaderTop from '../../../../components/Header';
import {HeaderButton, Hr, IconButtom} from '../../../../styled-components';

const Header = props => {
  const {query, searchVisible, setSearchVisible, setMenu} = props;
  const navigate = useNavigate();
  const isMobile = useIsMobile(800);

  return (
    <HeaderTop className={query && 'up-header'} home={true}>
      <article
        className={`${searchVisible ? 'up-header' : 'down-header'}`}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'relative',
        }}>
        <h1>All notes</h1>
        <div className="header-subsection">
          <HeaderButton
            tc={`#F6F1E9`}
            onClick={() => setMenu(true)}
            translate="no">
            <CgMenuGridO />
          </HeaderButton>
        </div>
      </article>
    </HeaderTop>
  );
};

export default Header;
