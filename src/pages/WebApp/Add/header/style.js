import styled,{keyframes} from 'styled-components'


export const HeaderContainer = styled.header`
    display: flex;
  justify-content: space-between;
  align-items:center;
  width: min(100%,var(--max-width-desktop));

  .header-subsection {
    display: flex;
    justify-content: center;
    align-items: center;
  }
