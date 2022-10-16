import React from 'react';
import Radio from './Radio';

const perguntas = [
  {
    pergunta: 'Qual a única seleção pentacampeã mundial de futebol?',
    options: [
      'Brasil',
      'Alemanha',
      'Itália',
    ],
    resposta: 'Brasil',
    id: 'p1',
  },
  {
    pergunta: 'Qual a capital do Rio Grande do Sul?',
    options: [
      'Pelotas',
      'Porto Alegre',
      'Rio Grande',
    ],
    resposta: 'Porto Alegre',
    id: 'p2',
  },
  {
    pergunta: 'Quantas estrelas tem a bandeira do Brasil?',
    options: ['25', '20', '27'],
    resposta: '27',
    id: 'p3',
  },
  {
    pergunta: 'Quem é o vilão do Peter Pan?',
    options: ['Capitão Gancho', 'Thanos', 'Scar'],
    resposta: 'Capitão Gancho',
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
