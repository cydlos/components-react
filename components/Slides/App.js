import React from 'react';
import './App.css';
import Slide from './Slide';

const App = () => {
  const slides = [
    {
      id: 'slide1',
      text: 'First Slide',
    },
    {
      id: 'slide2',
      text: 'Second slide',
    },
    {
      id: 'slide3',
      text: 'Third slide',
    },
  ];

  return (
    <div>
      <Slide slides={slides} />
    </div>
  );
};

export default App;
