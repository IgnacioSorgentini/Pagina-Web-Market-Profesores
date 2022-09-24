import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink
} from 'react-router-dom';
import InicioSesion from './Pantallas/Inicio-sesion';
import MisClases from './Pantallas/Mis-clases';
import Registro from './Pantallas/Registro';
import Cambiocontraseña from './Pantallas/Cambio-contraseña';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="container mt-5">
          <Routes>
            <Route path='/' exact element={<InicioSesion/>}/>
            <Route path='/Registro' element={<Registro/>}/>
            <Route path='/Mis-clases' element={<MisClases/>}/>
            <Route path='/Cambio-contraseña' element={<Cambiocontraseña/>}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
