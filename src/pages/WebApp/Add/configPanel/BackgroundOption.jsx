import styled from 'styled-components';

const BackgroundColorOption = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: none;
  background-color: transparent;
  color: var(--font-color);
padding:.25rem;

span{
  font-size:16px;
}

  div {
    width: 20px;
    height: 20px;
    //background-color: ${props => props.hex_code ?? red};
    border:solid 4px ${props => props.hex_code ?? red};
    border-radius:.25rem;
  }
`;

const BackgroundOption = props => {
  const {color_name, hex_code} = props;

  return (
    <BackgroundColorOption hex_code={hex_code}>
      <span>{color_name}</span>
      <div className="color_thum"></div>
    </BackgroundColorOption>
  );
};

export default BackgroundOption;
