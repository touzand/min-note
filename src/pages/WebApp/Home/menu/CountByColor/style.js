import styled from 'styled-components';

export const CountByColorGrid = styled.figure`
color:black;
  padding: 1rem;
  padding-top: 0;
  margin: 0rem;
  display: flex;
  flex-direction: column;
  //height:350px;
  gap: 1rem;
  box-sizing: border-box;
  //grid-template-column:auto;
  //grid-template-areas:
  //"first first first second second"
  //"first first first second second"
  //"first first first second second"
  //"first first first third third"
  //"first first first third third"
  //"first first first third third"
  //"first first first fourth fourth"
  //"first first first fourth fourth"
  //"fifth fifth sixth sixth seventh"
  //"fifth fifth sixth sixth seventh";

div{
  border-radius:.25rem;
}

  .top {
    display: flex;
    gap:1rem;
    height:250px;

    &>div:nth-child(1){
      //background-color:${props=>props.sort ? props.sort : 'purple'};
      //position:relative;
      //flex:3;
    }

    &>div:nth-child(2){
      flex:2;

      display:flex;
      flex-direction:column;
      gap:1rem;

      & *{
        flex:2;
      }

      & div:nth-child(3){
        flex:1;
      }
    }
  }

  .bottom {
    display: flex;
      width:100%;
    gap:1rem;
    height:50px;

    & * {
      flex:2;
    }

      & div:nth-child(3){
        flex:1;
      }
  }

  & > div {
    margin: 0;
    padding: 0;
    border-radius: 0.25rem;
  }
`;

export const SortFigure = styled.div`
      background-color:${props=>props.sort ? props.sort : 'transparent'};
border:${props=>props.sort ? 'none' : 'dashed 2px grey'};
      position:relative;
      flex:3;
`
