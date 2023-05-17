import styled from 'styled-components';
import {FaAlignJustify, FaAlignLeft, FaAlignRight} from 'react-icons/fa';

export const TextOptionContainer = styled.div``;

export const TextAlign = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 1.75rem;
  margin: 0.5rem 0;
  border-radius: 0.25rem;
  border: dashed thin #2d2f33;
  padding: 0.25rem;
  gap: 0.25rem;
`;

export const TextAlignOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.25rem 0.5rem;
  border-radius: inherit;
background-color:${props=>props.checked ? '#2d2f33' : 'transparent'};
cursor:pointer;

  input {
    display: none;
  }

  &:hover {
    background-color: #2d2f33;
  }

  
`;

const TextOption = props => {
  const {setTextAlign, handleTextAlignChange, selectedTextAlign} = props;

  return (
    <TextOptionContainer>
      <TextAlign>
        <TextAlignOption checked={selectedTextAlign === 0}  onClick={() => handleTextAlignChange(0, 'left')}>
          <FaAlignLeft />
          <input type="radio" name="option" checked={selectedTextAlign === 0} />
        </TextAlignOption>
        <TextAlignOption checked={selectedTextAlign === 1}  onClick={() => handleTextAlignChange(1, 'center')}>
          <FaAlignJustify />
          <input type="radio" name="option" checked={selectedTextAlign === 1} />
        </TextAlignOption>
        <TextAlignOption checked={selectedTextAlign === 2}  onClick={() => handleTextAlignChange(2, 'right')}>
          <FaAlignRight />
          <input type="radio" name="option" checked={selectedTextAlign === 2} />
        </TextAlignOption>
      </TextAlign>
    </TextOptionContainer>
  );
};

export default TextOption;
