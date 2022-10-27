import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  color: tomato;
`;

const ProductContainer = styled.div`
  display: flex;
`;

const Product = styled.div`
  flex: 1;
`;

const Buy = styled.button`
  font-size: 1.5em;
  background: transparent;
  padding: 0.5rem;
  border-radius: 4px;
  border: 2px solid;
  cursor: pointer;
`;

const Price = styled.span`
  background: #53d956;
  color: white;
  display: inline-block;
  border-radius: 5px;
  padding: 0.5rem;
`;

const App = () => {
  return (
    <ProductContainer>
      <Product>
        <Title>
          Notebook <Price>R$ 1999</Price>
        </Title>
        <Buy>Buy</Buy>
      </Product>
      <Product>
        <Title>
          Smartphone <Price>R$ 2999</Price>
        </Title>
        <Buy>Buy</Buy>
      </Product>
    </ProductContainer>
  );
};

export default App;
