import styled,{keyframes} from "styled-components";

const PopUp = keyframes`
0%{right:100%;}
10%{right:0%;}
90%{right:0%;}
100%{right:100%;}
`

const NotificationContainer = styled.div`
position:absolute;
width:300px;
height:auto;
top:5rem;
right:100%;
background-color:#1b1b1b;
text-align:center;
padding:2rem;
outline:solid thin whitesmoke;
outline-offset:-3px;
animation:${PopUp} 4s ease-in-out both;
border-radius:.5rem;
margin:1rem;
`;

const Notification = ({ children }) => {

  return (
    <NotificationContainer>
      {children}
    </NotificationContainer>
  );
};

export default Notification;
