import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink
} from 'react-router-dom';
import { useState } from 'react';
import PopupWindow from './Componentes/PopupWindow';
import InicioSesion from './Pantallas/Inicio-sesion';
import MisClasesAlumno from './Pantallas/Mis-clases-alumno';
import Registro from './Pantallas/Registro';
import Cambiocontraseña from './Pantallas/Cambio-contraseña';
import Comentarios from './Pantallas/Comentarios';
import Menu from './Componentes/Menu';
import ContratarCLase from './Pantallas/Contratar-clase';

function App() {

  

  return (
    <div className="App">
      <Router>
        <div className="contenedor-rutas">
         <Menu />
         <Routes>
          <Route path="/" exact element={<InicioSesion/>}/>
          <Route path="/comentarios" element={<Comentarios/>}/>
          <Route path="/mis-clases-alumno" element={<MisClasesAlumno/>}/>
          <Route path="/contratar-clase" element={<ContratarCLase/>}/>
          <Route path="/Cambio-contraseña" element={<Cambiocontraseña/>}/>
          <Route path="/Registro" element={<Registro/>}/>
          <Route path="/Comentarios" element={<Comentarios />}/>
         </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
