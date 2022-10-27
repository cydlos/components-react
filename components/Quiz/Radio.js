import React from 'react';

const Radio = ({ question, options, onChange, value, id, active }) => {
  if (!active) return null;
  return (
    <fieldset>
      <legend>{question}</legend>
      {options.map((option) => (
        <label key={option}>
          <input
            type="radio"
            value={option}
            checked={value === option}
            onChange={onChange}
            id={id}
          />
          {option}
        </label>
      ))}
    </fieldset>
  );
}

export default Radio;
