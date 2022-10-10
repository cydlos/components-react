import React from "react";
import { globalContext } from "./GlobalContext";

const Produto = () => {
  const global = React.useContext(globalContext);
  const {limparDados} = React.useContext(globalContext);

  if (global.dados === null) return null;
  return (
    <div>
      <h1>{ global.dados.map(global =><li key={global.id}>{global.nome}</li>) }</h1>
      <button onClick={limparDados}>Limpar Dados</button>
    </div>
  );
}

export default Produto;
