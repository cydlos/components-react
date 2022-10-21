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
        I agree with the terms.{" "}
      </label>{" "}
      <button disabled={!checked}>Send</button>
      {checked  && show && <p>Form Sent</p>}
    </form>
  );
};

export default App;
