import React from "react";
import { GlobalContext } from "./GlobalContext";

const Produto = () => {
  const global = React.useContext(GlobalContext);

  if (global.dados === null) return null;
  return (
    <div>
      <h1>
        {global.dados.map((global) => (
          <li key={global.id}>{global.nome}</li>
        ))}
      </h1>
    </div>
  );
};

export default Produto;
