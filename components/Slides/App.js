import React from 'react';
import './Slide.module.css';
import Slide from './Slide';

const App = () => {
  const slides = [
    {
      id: 'slide1',
      text: 'First Slide',
    },
    {
      id: 'slide2',
      text: 'Second Slide',
    },
    {
      id: 'slide3',
      text: 'Third Slide',
    },
  ];

  return (
    <div>
      <Slide slides={slides} />
    </div>
  );
};

export default App;
