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

function App() {
  return (
    <div className="App">
      <Router>
        <div className="container mt-5">
          <div className="btn-group">
            <NavLink to='/' className='btn btn-dark' activeClassName='active'>Inicio Sesion</NavLink>
            <NavLink to='/Mis-clases' className='btn btn-dark' activeClassName='active'>Mis clases</NavLink>
            <NavLink to='/Registro' className='btn btn-dark' activeClassName='active'>Registro</NavLink>
          </div>
          <hr />
          <Routes>
            <Route path='/' exact element={<InicioSesion/>}/>
            <Route path='/Mis-clases' element={<MisClases/>}/>
            <Route path='/Registro' element={<Registro/>}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
