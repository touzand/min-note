import styled from 'styled-components';
import {FaAlignJustify, FaAlignLeft, FaAlignRight} from 'react-icons/fa';

export const TextOptionContainer = styled.div``;

export const TextAlign = styled.div`
display:flex;
align-items:center;
justify-content:space-evenly;
font-size:1.75rem;
margin:.5rem 0;
border-radius:.25rem;
border:dashed thin #2d2f33;
padding:.25rem;
gap:.5rem;

div{
display:flex;
align-items:center;
justify-content:center;
  width:100%;
padding: .25rem .5rem ;
  border-radius:inherit;

  &:hover{
    background-color:#2d2f33;
  }
}
`;

const TextOption = () => {
  return (
    <TextOptionContainer>
      <TextAlign>
        <div>
          <FaAlignLeft />
        </div>
        <div>
          <FaAlignJustify />
        </div>
        <div>
          <FaAlignRight />
        </div>
      </TextAlign>
    </TextOptionContainer>
  );
};

export default TextOption;
