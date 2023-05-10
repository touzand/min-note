import React from 'react';
import styled from 'styled-components';

// Define el componente Button reutilizable
const Count = ({ text, icon: IconComponent}) => {
  return (
    <CountWrapper>
      <span>{text}</span>
      {IconComponent && <IconComponent />}
    </CountWrapper>
  );
};

// Estilos personalizados para el botón utilizando styled-components
const CountWrapper = styled.div`
  margin-bottom: 0.5rem;
  border: solid thin #2d2f33;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  height: 100px;

  &:hover {
    border-color: var(--complement-color);
  }

  svg {
    font-size: 1.5rem;
    margin-left: 0.5rem;
  }

  span {
    font-size: 3rem;
  }
`;

export default Count;

