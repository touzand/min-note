import styled from 'styled-components'

export const CountByColorGrid = styled.figure`
padding:1rem;
padding-top:0;
margin:0rem;
display:grid;
height:350px;
gap:1rem;
box-sizing:border-box;
grid-template-column:auto;
grid-template-areas:
  "first first first second second"
  "first first first second second"
  "first first first second second"
  "first first first third third"
  "first first first third third"
  "first first first third third"
  "first first first fourth fourth"
  "first first first fourth fourth"
  "fifth fifth sixth sixth seventh"
  "fifth fifth sixth sixth seventh";

div{
  margin:0;
  padding:0;
  border-radius:.25rem;
}

div:nth-child(1){
  grid-area:first;
  background-color:red;
}

div:nth-child(2){
  grid-area:second;
  background-color:yellow;
}

div:nth-child(3){
  grid-area:third;
  background-color:purple;
}

div:nth-child(4){
  grid-area:fourth;
  background-color:pink;
}

div:nth-child(5){
  grid-area:fifth;
  background-color:green;
}

div:nth-child(6){
  grid-area:sixth;
  background-color:red;
}

div:nth-child(7){
  grid-area:seventh;
  background-color:navy;
}
`
