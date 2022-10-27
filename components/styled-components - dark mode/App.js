import styled from 'styled-components';
import React from 'react';

const Button = styled.button`
  background: ${({ active }) => (active ? '#ff003a' : '#000')};
  border: 1px solid black;
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 4px;
  color: white;
  cursor: pointer;
`;

const Container = styled.div`
  background-color: ${({ active }) => (active ? '#17405f' : '#fff')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const App = () => {
  const [active, setactive] = React.useState(false);

  return (
    <Container ativo={active} onClick={() => setactive(!active)}>
      <Button active={active} onClick={() => setactive(!active)}>
        {active ? 'Dark mode on' : 'Activate dark mode'}
      </Button>
  </Container>
  );
};

export default App;
