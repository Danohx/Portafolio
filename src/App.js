import { Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Layout from './components/Layout';
import Home from './pages/Home'
import Contacto from './pages/Contacto';
import Proyectos from './pages/Proyectos';
import About from './pages/About';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />}/>
        <Route path='/Contacto' element={<Contacto />}/>
        <Route path='/Proyectos' element={<Proyectos />}/>
        <Route path='/about' element={<About />}/>
      </Route>
    </Routes>
  );
}

export default App;
