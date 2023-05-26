import styled from 'styled-components';

export const TextAreaComponent = styled.textarea`
  background-color: transparent;
  border: none;
  outline: none;
  width: 100%;
  display: block;
  resize: none;
  overflow: hidden;
  width: 100%;
  height: 49vh;
  padding-bottom: 2rem;
  border: none;
  outline: none;
  font-size: 24px;
  text-align: ${props => props.textAlign && props.textAlign};
  font-family: Outfit;
  color: ${props => props.textColorContrast}70;
  transition: color 1s ease;

  &::placeholder {
    color: ${props => props.textColorContrast}70;
    transition: color 1s ease;
  }

  &:focus {
    color: ${props => props.textColorContrast};
  }
`;
