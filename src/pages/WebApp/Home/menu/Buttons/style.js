import styled from 'styled-components'

export const ButtonsContainer = styled.div`
position:absolute;
bottom:0;
width:100%;
display:flex;
flex-direction:column;
padding:1rem;

button{
  display:flex;
  align-items:center;
  justify-content:start;
  gap:1rem;
}
`

export const Button = styled.button`
font-size:1.5rem;
border-radius:.75rem;

&:hover{
  background-color:red !important;
}

svg{
  font-size:1.5rem;
}
`
