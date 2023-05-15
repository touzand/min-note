import styled from 'styled-components';

const BackgroundColorOption = styled.button`
  display: flex;
  align-items: start;
  justify-content: start;
gap:.5rem;
  border: none;
  background-color: transparent;
  color: var(--font-color);
padding:.5rem;

&:hover{
  background-color:#2d2f33;
  border-radius:.25rem;
};

article{
  display:flex;
  align-items:start;
  flex-direction:column;
  gap:0;

  *{
    margin:0;
  }

span{
  font-size:16px;
  font-weight:700;
}

p{
  text-align:left;
  font-size:14px;
}
}


  div {
    width: 35px;
    height: 35px;
    //background-color: ${props => props.hex_code ?? red};
    background-color:${props => props.hex_code ?? red};
    border-radius:.25rem;
  }
`;

const BackgroundOption = props => {
  const {color_name, hex_code, use_advice} = props;

  return (
    <BackgroundColorOption hex_code={hex_code}>
      {console.log(props)}
      <div className="color_thum"></div>
      <article>
        <span>{color_name}</span>
        <p>{use_advice}</p>
      </article>
    </BackgroundColorOption>
  );
};

export default BackgroundOption;
