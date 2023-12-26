import styled, {keyframes} from 'styled-components';

const FadeUp = keyframes`
0%{top:3rem;opacity:0;}
100%{top:0;opacity:1;}
`;

export const ViewContainer = styled.div`
  background-color: ${props => props.backgroundColor};
  min-height: 100vh;
  width: 100%;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: min(100%, var(--max-width-desktop));
    margin: auto;

    div {
      display: flex;
      gap: 0.25rem;
    }
  }

  h1 {
    line-height: 2rem;
    line-break: break-word;
  }

  a {
    text-decoration: none;
  }

  .edit-enable {
    display: flex;
    flex-direction: column;
    //width: min(100%, 800px);
  }

  .title {
    font-size: var(--font-size-title);
    content: 'Title';
    margin: 3rem 0;
    line-height: 1;
    font-weight: bold;
    margin: 21.44px 0;
    outline: none;
    color: ${props => props.tc}70;
    transition: color 1s ease;
  }

  .title:focus {
    color: ${props => props.tc};
  }

  .title[contenteditable]:empty::before {
    content: 'Title';
    color: ${props => props.tc}70;
  }

  textarea {
    margin: 16px 0;
    width: 100%;
    height: 49vh;
    resize: none;
    padding-bottom: 2rem;
    background-color: transparent;
    border: none;
    outline: none;
    font-size: var(--font-size-pharag);
    color: ${props => props.tc}70;
    transition: color 1s ease;
  }

  textarea::placeholder {
    color: ${props => props.tc}70;
  }

  textarea:focus {
    color: ${props => props.tc};
  }

  @media (min-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    header {
      justify-content: space-between;
    }
  }
`;

export const NoteContentContainer = styled.div`
  color: ${props => props.textColorContrast};
  padding: 1rem;

  * {
    position: relative;
    opacity: 0;
    animation: ${FadeUp} 0.5s 1s ease-in-out both;
  }

  & p {
    animation-delay: 1.5s;
  }

  @media (min-width: 800px) {
    width: min(100%, var(--max-width-desktop));
    margin: auto;
  }
`;

export const Date = styled.span`
  font-size: var(--font-size-pharag);
  color: ${props => props.tc};
  display: block;
  text-decoration: underline;
  text-align: ${props => props.textAlign};
`;

export const Body = styled.p`
  white-space: pre-wrap;
  font-size: var(--font-size-pharag);
  text-align: ${props => props.textAlign};

  &:focus {
    color: ${props => props.tc};
  }
`;
