import React from "react";

const App = () => {
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    password: "",
    zipcode: "",
    street: "",
    number: "",
    neighborhood: "",
    city: "",
    state: "",
  });

  const [response, setResponse] = React.useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    fetch("https://ranekapi.origamid.dev/json/api/usuario", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    }).then((response) => {
      setResponse(response);
    });
  }

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" value={form.name} onChange={handleChange} />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={form.email}
        onChange={handleChange}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={form.password}
        onChange={handleChange}
      />
      <label htmlFor="zipcode">Zipcode</label>
      <input type="text" id="zipcode" value={form.zipcode} onChange={handleChange} />
      <label htmlFor="street">Street</label>
      <input type="text" id="street" value={form.street} onChange={handleChange} />
      <label htmlFor="number">Number</label>
      <input
        type="text"
        id="number"
        value={form.number}
        onChange={handleChange}
      />
      <label htmlFor="neighborhood">Neighborhood</label>
      <input
        type="text"
        id="neighborhood"
        value={form.neighborhood}
        onChange={handleChange}
      />
      <label htmlFor="city">City</label>
      <input
        type="text"
        id="city"
        value={form.city}
        onChange={handleChange}
      />
      <label htmlFor="state">State</label>
      <input
        type="text"
        id="state"
        value={form.state}
        onChange={handleChange}
      />
      <button>Send</button>
      {response && response.ok && <p>User Created</p>}
    </form>
  );
};

export default App;
