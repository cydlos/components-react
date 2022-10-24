import { BrowserRouter, Routes, Route} from "react-router-dom";
import React from 'react'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Produtos />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
