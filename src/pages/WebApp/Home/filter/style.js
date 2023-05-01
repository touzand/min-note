import styled from 'styled-components'

const FilterContainer = styled.article`
width:min(100%,800px);
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
    background-color:#262626;
    padding:.75rem;
    border-radius:.5rem;

    svg{
      color:#787878;
      font-size:1.5rem;
    }

    input{
      height:100%;
      padding:0;
      border:none;
      font-size:24px;

      &::placeholder{
        color:#787878;
      }
    }
  }
`
export default FilterContainer;
