import styled, {keyframes} from 'styled-components';

const ShowMenu = keyframes`
0%{right:-350px}
100%{right:0;}
`;
const BackgroundOpacity = keyframes`
0%{opacity:0}
100%{opacity:1;}
`;

export const BackgroundContainer = styled.div`
color:var(--font-color);
  position: fixed;
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

article{
  padding:1rem;
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
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:.75rem;

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

  .row:has(div) div{
    display:flex;
    align-items:center;
    gap:1rem;
  }

  .delete{
    //border:solid thin #dc3545;
    border:solid 1px transparent;
      //border-radius:.5rem;
    //color:#dc3545;

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
    margin-bottom:.5rem;
    border:solid thin #2d2f33;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:.5rem;
    height:100px;

    //div{
    //display:flex;
    //align-items:end;
    //justify-content:center;
    //}

    svg{
      font-size:1.5rem;
    }

    span{
      font-size:3rem;
    }
  }

  button{
    cursor:pointer;
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
      width:20px;
      height:20px;
      margin:0;
      border-radius:.3rem;
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
  position: fixed;
  top: 0;
  bottom: 0;
  right: -350px;
  background-color: #1a1c20;
  width: 350px;
 
*{
  //pointer-events:none;
}
`;
