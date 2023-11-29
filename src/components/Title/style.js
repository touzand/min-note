import styled, {keyframes} from 'styled-components';

const FadeUp = keyframes`
0%{top:3rem;opacity:0;}
100%{top:0;opacity:1;}
`;

export const TitleContainer = styled.blockquote`
  border: none;
  outline: none;
  width: 100%;
  display: block;
  resize: none;
  text-align: ${props => props.textAlign && props.textAlign};

  line-height: 1;
  font-size: var(--font-size-title);
  font-weight: bold;
  line-height: 1;
  margin: 21.44px 0;
  color: ${props =>
    props.contentEditable
      ? props.textColorContrast + 70
      : props.textColorContrast};
  transition: color 1s ease;

  //opacity: 0;
  //position: relative;
  //animation: ${props => (props.contenteditable ? 'none' : FadeUp)} 0.5s 1s
    //ease-in-out both;

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
  font-size:3rem !important;
}
`;
