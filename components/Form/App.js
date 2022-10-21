import React from "react";

const App = () => {
  const [form, setForm] = React.useState({
    nome: "",
    email: "",
    senha: "",
    cep: "",
    rua: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: "",
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
      <label htmlFor="nome">Nome</label>
      <input type="text" id="nome" value={form.nome} onChange={handleChange} />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={form.email}
        onChange={handleChange}
      />
      <label htmlFor="senha">Senha</label>
      <input
        type="password"
        id="senha"
        value={form.senha}
        onChange={handleChange}
      />
      <label htmlFor="cep">Cep</label>
      <input type="text" id="cep" value={form.cep} onChange={handleChange} />
      <label htmlFor="senha">Rua</label>
      <input type="text" id="rua" value={form.rua} onChange={handleChange} />
      <label htmlFor="numero">Número</label>
      <input
        type="text"
        id="numero"
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
        value={form.cidade}
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
