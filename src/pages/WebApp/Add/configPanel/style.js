import styled from 'styled-components'

export const ConfigPanelContainer = styled.figure`
position:fixed;
bottom:1rem;
right:1rem;
margin:0;
color:white;
width:300px;

* {
  margin:0; 
  }
`

export const MainConfig = styled.main`
background-color:#1a1c20;
padding:1rem;
border-radius:.5rem;
color:var(--font-color);

span{
  font-size:.9rem;
  opacity:.4;
}
`

export const BackgroundConfig = styled.article`

  .background_option_section{
  display:flex;
  flex-direction:column;
    margin-top:.5rem;
}
`


export const TextConfig = styled.article`

`

export const FooterConfig = styled.footer`
background-color:blue
`
