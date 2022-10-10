import React from "react";
import { GlobalStorage } from "./GlobalContext";
import Produto from "./Produto";

const App = () => {
  return (
    <div>
      <GlobalStorage>
        <Produto />
      </GlobalStorage>
    </div>
  );
}

export default App;
