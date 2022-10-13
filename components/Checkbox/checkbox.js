// A checkbox component for React JS

import React from 'react';

const App = () => {
  const [checked, setChecked] = React.useState(false);

  return (
    <form>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={({ target }) => setChecked(target.checked)}
        />
        Checkbox
      </label>
      <p>{checked ? 'checked' : 'not checked'}</p>
    </form>
  );
}

export default App;
