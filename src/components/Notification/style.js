import styled,{keyframes} from "styled-components";

const PopUp = keyframes`
  0%{bottom:5rem;opacity:0;}
  100%{bottom:1rem;opacity:1;}
`

export const NotificationContainer = styled.div`
position:absolute;
width:300px;
//top:50%;
//left:50%;
//top:5rem;
  //transform:translate(-50%,-50%);
  right:1rem;
  bottom:5rem;
  opacity:0;
height:auto;
//background-color:#dc3545;
font-weight:bold;
text-align:center;
//outline:solid thin whitesmoke;
//outline-offset:-3px;
animation:${PopUp} .2s ease-in-out both;
//border-radius:.5rem;
  //margin-top:3rem;
  //padding:1rem
  
  p{
    margin:0;
    padding:1rem;
    border-radius:.25rem;
  }

  & .error{
    background-color:red;
  }

  & .success{
    background-color:green;
  }
`;

