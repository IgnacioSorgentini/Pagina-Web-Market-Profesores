import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink
} from 'react-router-dom';
import InicioSesion from './Pantallas/Inicio-sesion';
import MisClasesAlumno from './Pantallas/Mis-clases-alumno';
import Registro from './Pantallas/Registro';
import Cambiocontraseña from './Pantallas/Cambio-contraseña';
import Comentarios from './Pantallas/Comentarios';
import Menu from './Componentes/Menu';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="contenedor-rutas">
         <Menu />
         <Routes>
          <Route path="/iniciar-sesion" element={<InicioSesion/>}/>
          <Route path="/comentarios" element={<Comentarios/>}/>
          <Route path="/mis-clases-alumno" element={<MisClasesAlumno/>}/>
          <Route path="/MisClasesAlumno" element={<MisClasesAlumno/>}/>

         </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
