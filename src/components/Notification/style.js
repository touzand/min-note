import styled,{keyframes} from "styled-components";

const PopUp = keyframes`
0%{transform:translate(-50%,-50%) scale(.5)}
5%{transform:translate(-50%,-50%) scale(1)}
100%{transform:translate(-50%,-50%) scale(1)}
`

export const NotificationContainer = styled.div`
position:absolute;
width:300px;
top:50%;
left:50%;
transform:translate(-50%,-50%);
height:auto;
top:5rem;
background-color:#dc3545;
font-weight:bold;
text-align:center;
padding:1rem;
outline:solid thin whitesmoke;
outline-offset:-3px;
animation:${PopUp} 4s ease-in-out both;
border-radius:.5rem;
margin-top:3rem;
`;

