import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: min(100%, 800px);
  position:relative;
margin-top:${props=>props.home ? '1rem' : '0'};

  & .up-header {
    animation: upHeaderTop .5s ease both;
  }

  & .down-header {
    animation: downHeaderTop .5s ease both;
  }

  h1 {
    margin: 0;
    color: var(--font-color);
  }

  .header-subsection {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
