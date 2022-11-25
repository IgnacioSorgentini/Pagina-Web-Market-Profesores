import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import InicioSesion from './Pantallas/Inicio-sesion';
import MisClasesAlumno from './Pantallas/Mis-clases-alumno';
import Registro from './Pantallas/Registro';
import Cambiocontraseña from './Pantallas/Cambio-contraseña';
import ComentariosAlumno from './Pantallas/Comentarios-alumno';
import ContratarCLase from './Pantallas/Contratar-clase';
import MisClasesProfesor from './Pantallas/Mis-clases-profesor';
import Contrataciones from './Pantallas/Contrataciones';
import ComentariosProfesor from './Pantallas/Comentarios-profesor';
import PantallaPrincipal from './Pantallas/Pantalla-principal';


function App() {


 
 
  return (
    <div className="App">
      <Router>
         <Routes>
          <Route path="/" exact element={<PantallaPrincipal/>} />
          <Route path="/comentariosAlumno" element={<ComentariosAlumno/>} />
          <Route path="/misClasesAlumno" element={<MisClasesAlumno/>} />
          <Route path="/contratarClase" element={<ContratarCLase/>}  />
          <Route path="/cambioContraseña" element={<Cambiocontraseña/>} />
          <Route path="/registro" element={<Registro/>} />
          <Route path="/misClasesProfesor" element={<MisClasesProfesor/>} />
          <Route path="/contratacionesProfesor" element={<Contrataciones />} />
          <Route path="/inicioSesion" element={<InicioSesion/>} />
          <Route path="/comentariosProfesor" element={<ComentariosProfesor />} />
         </Routes>
      </Router>
    </div>
  );
}

export default App;
