import styled from 'styled-components'

export const FilterContainer = styled.article`
width:min(100%,800px);
height:40px;
margin:.5rem auto;
display:flex;
gap:.5rem;
box-sizing:border-box;

button,div{
  flex:1;
  border:none;
  outline:none;
}

  *:focus{
  outline:none;
  }

  .input{
  flex:5;

    svg{
      color:white;
      font-size:1rem;
    }

    input{
      height:100%;
      border:none;
    }
  }
`
