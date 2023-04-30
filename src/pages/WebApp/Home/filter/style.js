import styled from 'styled-components'

export const FilterContainer = styled.article`
width:min(100%,800px);
height:40px;
margin:.5rem auto;
display:flex;
gap:.5rem;

*{
  flex:1;
  border:none;
  outline:none;
}

  *:focus{
  outline:none;
  }

  input{
  flex:5;
  }
`
