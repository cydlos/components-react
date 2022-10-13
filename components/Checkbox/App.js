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
      <button disabled={!checked}>Enviar</button>
      {checked  && show && <p>Formulário enviado</p>}
    </form>
  );
};

export default App;
