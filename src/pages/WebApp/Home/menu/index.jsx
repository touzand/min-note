import {BackgroundContainer, ContentContainer} from './style';

const Menu = props => {
  return (
    <BackgroundContainer onClick={() => props.setMenu(false)} menu={props.menu}>
      <ContentContainer>
        <article>
          <div className='row'>
            <h3>All notes</h3>
            <h3>{props.data.length}</h3>
          </div>
          <div className='row'></div>
          <div className='row'></div>
          <div className='row'></div>
          <div className='row'></div>
          <div className='row'></div>
          <div className='row'></div>
          <div className='row'></div>
          <div className='row'></div>
          <div className='row'></div>
        </article>

        <hr />
      </ContentContainer>
    </BackgroundContainer>
  );
};

export default Menu;
