import logo from './logo.svg';
import './App.css';
import Listado from './componentes/listado';
import Principal from './paginas/principal';
import Detalles from './paginas/detalles';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Principal />} />
      <Route path='/detalles/:id' element={<Detalles />} />
    </Routes>
  );
}

export default App;
