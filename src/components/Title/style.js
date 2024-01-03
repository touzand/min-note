import styled, {keyframes} from 'styled-components';

const FadeUp = keyframes`
0%{top:3rem;opacity:0;}
100%{top:0;opacity:1;}
`;

export const TitleContainer = styled.textarea`
  background-color: transparent;
  border: none;
  outline: none;
  width: 100%;
  display: block;
  resize: none;
padding:0;

  line-height: 1;
  font-size: var(--font-size-title);
  font-weight: bold;
  line-height: 1;
  margin: 0.5rem 0;
  color: ${props =>
    props.contentEditable
      ? props.textColorContrast + 70
      : props.textColorContrast};
  transition: color 1s ease;
  font-family: Outfit;

  &:focus {
    color: ${props => props.textColorContrast};
  }

  &[contenteditable]:empty::before {
    content: 'Title';
    color: ${props => props.textColorContrast}70;
    transition: color 1s ease;
  }

  &[contenteditable]:empty::before {
    content: 'Title';
    color: ${props => props.textColorContrast}70;
    transition: color 1s ease;
  }

  @media (max-width: 800px) {
    font-size: 2.5rem !important;
  }
`;
