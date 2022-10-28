import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Produtos from './Produtos';
import Header from './Header';
import Footer from './Footer';
import Contato from './Contato';


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="produtos/*" element={<Produtos />} />
        <Route path="contato" element={<Contato />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
