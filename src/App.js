import React from 'react';
import Radio from './Radio';

const perguntas = [
  {
    pergunta: 'Qual método é utilizado para criar componentes?',
    options: [
      'React.makeComponent()',
      'React.createComponent()',
      'React.createElement()',
    ],
    resposta: 'React.createElement()',
    id: 'p1',
  },
  {
    pergunta: 'Como importamos um componente externo?',
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: 'p2',
  },
  {
    pergunta: 'Qual hook não é nativo?',
    options: ['useEffect()', 'useFetch()', 'useCallback()'],
    resposta: 'useFetch()',
    id: 'p3',
  },
  {
    pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
    options: ['set', 'get', 'use'],
    resposta: 'use',
    id: 'p4',
  },
];

const App = () => {
  const [respostas, setRespostas] = React.useState({
    p1: '',
    p2: '',
    p3: '',
    p4: '',
  });
  const [slide, setSlide] = React.useState(0);
  const [resultado, setResultado] = React.useState(null);

  const handleChange = ({ target }) => {
    setRespostas({ ...respostas, [target.id]: target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (slide < perguntas.length - 1) {
      setSlide(slide + 1);
    } else {
      const corretas = perguntas.filter(
        ({ id, resposta }) => respostas[id] === resposta,
      );
      setResultado(`Você acertou ${corretas.length} de ${perguntas.length}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {perguntas.map((pergunta, index) => (
        <Radio
          active={slide === index}
          value={respostas[pergunta.id]}
          onChange={handleChange}
          key={pergunta.id}
          {...pergunta}
        />
      ))}
      {resultado && <p>{resultado}</p>}
      <button>{slide < perguntas.length - 1 ? 'Próxima' : 'Resultado'}</button>
    </form>
  );
}
export default App;
