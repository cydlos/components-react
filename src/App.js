import './App.css';
import Produto from './Produto';

import React from 'react';

// const App = () => {
//   const [ativo, setAtivo] = React.useState(false);

//   return (
//     <button onClick={() => setAtivo(!ativo)}>
//       {ativo ? 'Ativo' : 'Inativo'}
//     </button>
//   );
// };

// export default App;


const App = () => {
  const [dados, setDados] = React.useState(null);
  const [carregando, setCarregando] = React.useState(null);

async function handleClick(event) {
  setCarregando(true);
  const response = await fetch(
    `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`
  );
  const json = await response.json();
  setDados(json);
  setCarregando(false);
  }
  return (
    <>
      <button onClick={handleClick}>Macbook</button>
      <button onClick={handleClick}>iPad</button>
      <button onClick={handleClick}>iPhone</button>
      {carregando && <p>Carregando...</p>}
      {!carregando && dados && <Produto produto={dados} />}
    </>
    // or: {!carregando ? <p>Carregando...</p> : <Produto produto={dados} />} -> ternary operator
  );
};

export default App;
