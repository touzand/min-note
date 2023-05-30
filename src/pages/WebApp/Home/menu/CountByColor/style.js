import styled from 'styled-components'

export const CountByColorGrid = styled.figure`
padding:1rem;
padding-top:0;
margin:0rem;
display:grid;
height:250px;
gap:.5rem;
grid-template-areas:
  "first first first second second"
  "first first first second second"
  "first first first third third"
  "first first first fourth fourth"
  "fifth fifth sixth sixth seventh";

figure{
  margin:0;
  padding:0;
  background-color:red;
  border-radius:.25rem;
}

figure:nth-child(1){
  grid-area:first;
  background-color:;
}

figure:nth-child(2){
  grid-area:second;
  background-color:yellow;
}

figure:nth-child(3){
  grid-area:third;
  background-color:purple;
}

figure:nth-child(4){
  grid-area:fourth;
  background-color:pink;
}

figure:nth-child(5){
  grid-area:fifth;
  background-color:green;
}

figure:nth-child(6){
  grid-area:sixth;
  background-color:red;
}

figure:nth-child(7){
  grid-area:seventh;
  background-color:navy;
}
`
