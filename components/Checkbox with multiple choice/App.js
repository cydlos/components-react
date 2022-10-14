import React from "react";


const arrayCores = ["azul", "vermelho", "verde", "amarelo"];
const App = () => {
  const [cores, setCores] = React.useState([]);

  function handleChange({ target }) {
    if (target.checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter((cor) => cor !== target.value));
    }
  }

  function handleChecked(cor) {
    return cores.includes(cor);
  }

  return (
    <form>
      {arrayCores.map((cor) => (
        <label key={cor}>
          <input
            type="checkbox"
            value={cor}
            checked={handleChecked(cor)}
            onChange={handleChange}
          />
          {cor}
        </label>
      ))}
      <p>{cores.join(", ")}</p>
    </form>
  );
};

export default App;
