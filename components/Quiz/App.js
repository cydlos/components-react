import React from 'react';
import Radio from './Radio';

const questions = [
  {
    question: 'Which is the only five-time football world champion team?',
    options: [
      'Brazil',
      'France',
      'Uruguay',
    ],
    answer: 'Brazil',
    id: 'p1',
  },
  {
    question: 'What is the capital of Australia?',
    options: [
      'Sidney',
      'Canberra',
      'Melbourne',
    ],
    answer: 'Canberra',
    id: 'p2',
  },
  {
    question: 'How many starts are on the Brazilian flag?',
    options: ['25', '20', '27'],
    answer: '27',
    id: 'p3',
  },
  {
    question: 'Who is the villain in the Peter Pan movie?',
    options: [
      'Hook',
      'Thanos',
      'Scar'
    ],
    answer: 'Hook',
    id: 'p4',
  },
];

const App = () => {
  const [answers, setAnswers] = React.useState({
    p1: '',
    p2: '',
    p3: '',
    p4: '',
  });
  const [slide, setSlide] = React.useState(0);
  const [resultado, setResultado] = React.useState(null);

  const handleChange = ({ target }) => {
    setAnswers({ ...answers, [target.id]: target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (slide < questions.length - 1) {
      setSlide(slide + 1);
    } else {
      const correct = questions.filter(
        ({ id, answer }) => answers[id] === answer,
      );
      setResultado(`You had ${correct.length} correct answers out of ${questions.length}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {questions.map((question, index) => (
        <Radio
          active={slide === index}
          value={answers[question.id]}
          onChange={handleChange}
          key={question.id}
          {...question}
        />
      ))}
      {resultado && <p>{resultado}</p>}
      <button>{slide < questions.length - 1 ? 'Next' : 'Result'}</button>
    </form>
  );
}
export default App;
