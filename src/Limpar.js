// Creates a fucntion that cleans every data printed on screen
import React from "react";
import { GlobalContext } from "./GlobalContext";

function Limpar() {
  const { limparDados } = React.useContext(GlobalContext);
  return (
    <div>
      <button onClick={limparDados}>Limpar Dados</button>
    </div>
  );
}

export default Limpar;
