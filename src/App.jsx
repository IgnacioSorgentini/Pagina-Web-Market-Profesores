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
import Menu from './Componentes/Menu';
import ContratarCLase from './Pantallas/Contratar-clase';
<<<<<<< HEAD
import ComentariosAlumno from './Pantallas/Comentarios-Alumno';
=======
import MisClasesProfesor from './Pantallas/Mis-clases-profesor';
import Contrataciones from './Pantallas/Contrataciones';

>>>>>>> aad1cc5bfae6ab01ed5a12eba727e4b5dd3973f4

function App() {

  

  return (
    <div className="App">
      <Router>
        <div className="contenedor-rutas">
         <Menu />
         <Routes>
          <Route path="/" exact element={<InicioSesion/>}/>
          <Route path="/mis-clases-alumno" element={<MisClasesAlumno/>}/>
          <Route path="/contratar-clase" element={<ContratarCLase/>}/>
          <Route path="/Cambio-contraseña" element={<Cambiocontraseña/>}/>
          <Route path="/Registro" element={<Registro/>}/>
<<<<<<< HEAD
          <Route path="/Comentarios-alumno" element={<ComentariosAlumno />}/>
=======
          <Route path="/Clases-profesor" element={<MisClasesProfesor/>}/>
          <Route path="/Contrataciones" element={<Contrataciones />}/>
>>>>>>> aad1cc5bfae6ab01ed5a12eba727e4b5dd3973f4
         </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
