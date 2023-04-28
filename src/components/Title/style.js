import styled from 'styled-components'

export const TitleContainer = styled.span`
    border: none;
    outline: none;
    width: 100%;
    display: block;
    resize: none;
  text-align:${props=>props.textAlign && props.textAlign};

      line-height: 1;
      font-size: var(--font-size-title);
      font-weight: bold;
      line-height: 1;
      margin: 21.44px 0;
      color: ${(props) => props.tc}70;
      transition: color 1s ease;

    &:focus {
      color: ${(props) => props.tc};
    }

    &[contenteditable]:empty::before {
      content: "Title";
      color: ${(props) => props.tc}70;
      transition: color 1s ease;
    }
`
