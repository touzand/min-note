import styled, {keyframes} from 'styled-components';

const ShowMenu = keyframes`
0%{right:-350px}
100%{right:0;}
`;
const BackgroundOpacity = keyframes`
0%{opacity:0}
100%{opacity:1;}
`;

export const ModalBackground = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex:1;
width:100%;
height:100%;
//pointer-events:none !important;
opacity:0;
transition:all .5s ease;
${props =>
  props.menu &&
  `
  opacity: 1;
pointer-events:auto;
  background-color: #00f;
  `}
`

export const AccountStatus = styled.span`
  background-image: linear-gradient(#cb1bf9, #6a05df);
  padding: 0.5rem 0.75rem;
  border-radius: 0.25rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  //color:#1a1c20;
  //font-weight:bold;
`;

//export const Count = styled.div`
//`;

export const Row = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:.75rem;
  border:solid thin transparent;
    
&:hover{
  border-color:${props =>
    props.hover ? ' var(--complement-color)' : 'transparent'};
  border-radius:.5rem;
}

    h3{
      margin:0;
      font-size:16px;
    }

    svg{
      //font-size:1.25rem;
    }

      .add-button{
        display:flex;
        justify-content:center;
        align-items:center;
        background-color:#2D2F33;
        padding:.25rem;
        width:25px;
        height:25px;
        font-size:24px;
        font-weight:600;
        border-radius:.25rem;
      }
    
  }

  &:has(div) div{
    display:flex;
    align-items:center;
    gap:1rem;
  }

  //.delete{
    ////border:solid thin #dc3545;
    //border:solid 1px transparent !important;
      ////border-radius:.5rem;
    ////color:#dc3545;

    //svg{
      //font-size:1.2rem;
    //}

  //}

`;

export const BackgroundContainer = styled.div`
color:var(--font-color);
  position: absolute;
height:100vh;
display:flex;
padding:2rem;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  //opacity: 0;
pointer-events:none;
  background-color: #00000000;
transition:all .5s ease;
${props =>
  props.menu &&
  `
  opacity: 1;
pointer-events:auto;
  background-color: #00000080;
  `}

  .upgrade{
    background-color:#13151750;
    position:sticky;
    bottom:0;
    padding-top:0;
    backdrop-filter: blur(20px);
    border-top:dashed 1px grey;

    & > div > div{
  padding:0;
  padding-top:1rem;
}
  }

article{
  padding:1rem;

  p{
    color:grey;
  }
}

  > div {
pointer-events:auto;
  right:-350px;
transition:all .5s ease;
${props =>
  props.menu &&
  `
  right:0;
  `}
  }

& .open{
  //opacity: 1;
//pointer-events:none;
  //background-color: #00000080;
  //animation: ${BackgroundOpacity} 0.5s ease both;
}

  & .open div{
  }

& .close{
  //opacity: 0;
  //background-color: #00000000;
  //animation: ${BackgroundOpacity} 0.5s ease both;
}

  & .close div{
  //right:-300px;
  }



hr{
  border-top:none;
  border-color:#2d2f3350;
}

  .row{
  }

  .delete{
    border:solid 1px transparent;

    svg{
      font-size:1.2rem;
    }
  }

  .delete:hover{
    color:#dc3545;
    border:solid 1px #dc3545;
  background-color:#dc354520;
  }

  .count{
  }

  button{
    //cursor:pointer;
    display:flex;
    justify-content:space-between;
    background-color:transparent;
    border:none;
    color:var(--font-color);
    align-items:center;
    width:100%;
    padding:.75rem;

    &:hover{
    background-color:#2d2f33;
      border-radius:.5rem;
    }

    h3{
      margin:0;
    }

    figure{
      width:50px;
      height:50px;
      margin:0;
      border-radius:.3rem;
      display:grid;
      place-items:center;
      color:#1a1c20;
      flex:1;
    }
  }

  button:has(div) div{
    display:flex;
    align-items:center;
    gap:1rem;
  }
`;

export const FigureColor = styled.figure`
  background-color: ${props => (props.bg ? props.bg : 'red')};
`;

export const ContentContainer = styled.div`
  position: relative;
  top: 0;
  bottom: 0;
  right: -350px;
  background-color: #1a1c20;
  width: 350px;
  overflow-y: scroll;

  * {
    //pointer-events:none;
  }

  .color_count_container{
    padding:0;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    margin-top:.5rem;
  }

  .color_count{
    display:inline !important;
    width:auto;
    padding:0;
  }

  .patterns_container{
display: grid;
  grid-template-columns:repeat(2, 1fr);
  grid-gap: .5rem;

    div{
      //width:30px;
      height:40px;
      background-color:red;
      border-radius:.25rem;
    }
  }
`;

export const Upgrade = styled.button`
  background-color: var(--complement-color) !important;
  height: 60px;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid thin #ddd2 !important;
  transition: filter .s ease-in;
  filter: drop-shadow(0px 0px 0px #0064ae);

  &:hover {
    filter: drop-shadow(0px 0px 50px #0064ae);
  }

  span {
    width: 100%;
    font-size: 1rem;
  }
`;
