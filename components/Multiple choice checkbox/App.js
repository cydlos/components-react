import React from "react";


const arrayCores = ["bluel", "red", "green", "yellow", "orange", "purple"];
const App = () => {
  const [colors, setColors] = React.useState([]);

  function handleChange({ target }) {
    if (target.checked) {
      setColors([...colors, target.value]);
    } else {
      setColors(colors.filter((color) => color !== target.value));
    }
  }

  function handleChecked(color) {
    return colors.includes(color);
  }

  return (
    <form>
      {arrayCores.map((color) => (
        <label key={color}>
          <input
            type="checkbox"
            value={color}
            checked={handleChecked(color)}
            onChange={handleChange}
          />
          {color}
        </label>
      ))}
      <p>{colors.join(", ")}</p>
    </form>
  );
};

export default App;
