import React from 'react';

const App = () => {
  const [message, setMessage] = React.useState('');

  return (
    <form>
      <textarea
        id="message"
        value={message}
        rows="5"
        onChange={({ target }) => setMessage(target.value)}
      />
      <p>{message}</p>
    </form>
  );
};

export default App;
