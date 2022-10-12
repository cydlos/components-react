// Creates a Radio component with the following options of animals: Tiger, Lion, Bear, Wolf, and Fox

import React from 'react';

const App = () => {
  const [animal, setAnimal] = React.useState('');

  return (
    <form>
      <label>
        <input
          type="radio"
          value="tiger"
          checked={animal === 'tiger'}
          onChange={({ target }) => setAnimal(target.value)}
        />
        Tiger
      </label>
      <label>
        <input
          type="radio"
          value="lion"
          checked={animal === 'lion'}
          onChange={({ target }) => setAnimal(target.value)}
        />
        Lion
      </label>
      <label>
        <input
          type="radio"
          value="bear"
          checked={animal === 'bear'}
          onChange={({ target }) => setAnimal(target.value)}
        />
        Bear
      </label>
      <label>
        <input
          type="radio"
          value="wolf"
          checked={animal === 'wolf'}
          onChange={({ target }) => setAnimal(target.value)}
        />
        Wolf
      </label>
      <label>
        <input
          type="radio"
          value="fox"
          checked={animal === 'fox'}
          onChange={({ target }) => setAnimal(target.value)}
        />
        Fox
      </label>
      <p>{animal}</p>
    </form>
  );
}
