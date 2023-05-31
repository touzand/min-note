import styled from 'styled-components'

export const CountByColorGrid = styled.figure`
padding:1rem;
padding-top:0;
margin:0rem;
display:grid;
height:350px;
gap:1rem;
box-sizing:border-box;
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

figure{
  margin:0;
  padding:0;
  border-radius:.25rem;
}

figure:nth-child(1){
  grid-area:first;
  background-color:red;

  &>span{
    width:10px;
    background-color:yellow;
  }

  //&>div{
    //background-color:yellow;
    //display:flex;
    //flex-direction:column;
    //justify-content:space-between;
    //height:100%;

    //span{
      //display:flex;
      //align-items:center;
      //gap:.5rem;
      //background-color:blue;

      //div{
        //background-color:purple;
      //}
    //}
  //}
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
