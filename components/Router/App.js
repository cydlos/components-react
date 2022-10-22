import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './About';
import Page404 from './Page404';
import Home from './Home';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
