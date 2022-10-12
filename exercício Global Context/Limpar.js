// Função criada para o botão de limpar dados com a função onClick
import React from "react";
import { GlobalContext } from "./GlobalContext";

function Limpar() {
  const { limparDados } = React.useContext(GlobalContext);
  return (
    <div>
      <button style={{ backgroundColor: 'lightBlue'}} onClick={limparDados} >Limpar Dados</button>
    </div>
  );
}

export default Limpar;
