// A checkbox component for React JS do check if a user accepts the condition terms

import React from "react";

const App = () => {
  const [checked, setChecked] = React.useState(false);
  const [show, setShow] = React.useState(false);
  function handleClick() {
    setChecked(!checked);
  }
  function handleSubmit(event) {
    event.preventDefault();
    setShow(true);
  }
  return (
    <form onSubmit={handleSubmit}>
      {" "}
      <label>
        {" "}
        <input type="checkbox" checked={checked} onChange={handleClick} />{" "}
        Aceito os termos{" "}
      </label>{" "}
      {checked  && show && <p>Formulário enviado</p>} <button>Enviar</button>{" "}
    </form>
  );
};

export default App;
