import styled from 'styled-components';

export const CountByColorGrid = styled.figure`
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
    background-color:purple;

    &>div:nth-child(1){
      background-color:red;
      position:relative;
      flex:3;
    }

    &>div:nth-child(2){
      background-color:green;
      flex:2;

      display:flex;
      flex-direction:column;
      gap:1rem;

      & *{
        flex:2;
        background-color:yellow;
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
    background-color:yellow;
    height:50px;

    & * {
      flex:2;
      background-color:green;
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
