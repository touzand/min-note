import styled from 'styled-components';

const BackgroundColorOption = styled.button`
display:flex;
align-items:center;
justify-content:space-between;

  figure {
    width: 20px;
    height: 20px;
    background-color: ${props => props.hex_code ?? red};
  }
`;

const BackgroundOption = props => {
  const {color_name, hex_code} = props;

  return (
    <BackgroundColorOption hex_code={hex_code}>
      <span>{color_name}</span>
      <figure className="color_thum"></figure>
    </BackgroundColorOption>
  );
};

export default BackgroundOption;
