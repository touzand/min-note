import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: min(100%, var(--max-width-desktop));
  position: relative;
  margin-top: ${props => (props.home ? '1rem' : '0')};
  animation: downHeader 0.5s ease both;

  &.up-header {
    animation: upHeader 0.5s ease both;
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
