import styled from 'styled-components';

export const ConfigPanelContainer = styled.figure`
  position: fixed;
  bottom: 0.5rem;
  right: ${props => (props.open ? '.5rem' : '-10%')};
  opacity: ${props => (props.open ? '1' : '0')};
  visibility: ${props => (props.open ? 'visible' : 'hidden')};
  margin: 0;
  color: white;
  width: 320px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  transition: all 0.3s ease-in-out;

  * {
    margin: 0;
  }
`;

export const MainConfig = styled.main`
  background-color: #1a1c20;
  padding: 1rem;
  border-radius: 0.5rem;
  color: var(--font-color);

  p {
    font-size: 0.9rem;
    opacity: 0.4;
  }

  & article {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
`;

export const BackgroundConfig = styled.article`
  .background_option_section {
    display: flex;
    flex-direction: column;
    margin-top: 0.5rem;
  }
`;

export const TextConfig = styled.article``;

export const FooterConfig = styled.footer`
  background-color: blue;
  display: flex;

  article {
  }
`;
