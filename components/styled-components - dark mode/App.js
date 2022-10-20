import styled from 'styled-components';
import React from 'react';

const Button = styled.button`
  background: ${({ ativo }) => (ativo ? '#ff003a' : '#000')};
  border: 1px solid black;
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 4px;
  color: white;
  cursor: pointer;
`;

const Container = styled.div`
  background-color: ${({ ativo }) => (ativo ? '#17405f' : '#fff')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const App = () => {
  const [ativo, setAtivo] = React.useState(false);

  return (
    <Container ativo={ativo} onClick={() => setAtivo(!ativo)}>
      <Button ativo={ativo} onClick={() => setAtivo(!ativo)}>
        {ativo ? 'Dark mode on' : 'Activate dark mode'}
      </Button>
  </Container>
  );
};

export default App;
