import styled from 'styled-components';

const BackgroundColorOption = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
gap:.5rem;
  border: none;
  background-color: transparent;
  color: var(--font-color);
padding:.5rem;
cursor:pointer;

&:hover{
  background-color:#2d2f33;
  border-radius:.25rem;
};

&>article{
  display:flex;
  flex-direction:row !important;
  gap:.5rem !important;
}

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
    width: 40px;
    height: 40px;
    //background-color: ${props => props.hex_code ?? red};
    background-color:${props => props.hex_code ?? red};
    border-radius:.25rem;
  }

  .checked{
    width:10px;
    height:10px;
    border-radius:50%;
    background-color:${props =>
      props.checked ? 'var(--complement-color)' : '#40414b'};
  }

input{
  display:none;
}
`;

const BackgroundOption = props => {
  const {
    color_name,
    hex_code,
    use_advice,
    handleBackgroundChange,
    selectedBackground,
    index,
  } = props;

  return (
    <BackgroundColorOption
      hex_code={hex_code}
      onClick={() => handleBackgroundChange(index, hex_code)}
      checked={selectedBackground === index}>
      <article>
        <div className="color_thum"></div>
        <article>
          <span>{color_name}</span>
          <p>{use_advice}</p>
        </article>
      </article>
      <input
        type="radio"
        name="option"
        checked={selectedBackground === index}
      />
      <article className="checked"></article>
    </BackgroundColorOption>
  );
};

export default BackgroundOption;
