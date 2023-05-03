import styled,{keyframes} from 'styled-components'

const ShowMenu = keyframes`
0%{right:-300px}
100%{right:0;}
`
const BackgroundOpacity = keyframes`
0%{opacity:0}
100%{opacity:1;}
`

export const BackgroundContainer = styled.div`
position:fixed;
top:0;
bottom:0;
left:0;
right:0;
z-index:1;
opacity:0;
background-color:#00000080;
animation: ${BackgroundOpacity} .5s ease both;

> div{
  animation:${ShowMenu} .5s ease-in-out both;
}
`

export const ContentContainer = styled.div`
position:fixed;
top:0;
bottom:0;
right:-300px;
background-color:red;
width:300px;

`
