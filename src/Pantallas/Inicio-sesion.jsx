import React, { useState, useEffect } from "react";
import '../Hojas-de-estilo/Inicio-sesion.css';
import {Link} from "react-router-dom";
import ComentariosAlumno from "./Comentarios-alumno";
import MisClasesAlumno from "./Mis-clases-alumno";
import MisClasesProfesor from './Mis-clases-profesor';
import ContratarClase from './Contratar-clase';
import ComentariosProfesor from './Comentarios-profesor';

function InicioSesion() {

    const [validar, setValidar] = useState(-1);
    const [user, setUser] = useState('');   
    const [password,setPassword] = useState('')
    const [error,setError] = useState(1)


    const userValido='pedroseveri@gmail.com'
    const pwValida= '123'
    
    const handleUserChange = (e) => {
    	setUser(e.target.value);
  	};
  
	const handlePasswordChange = (e) => {
    	setPassword(e.target.value);
  	};

    function comprobarUsuario () {
        if (userValido === user && pwValida === password ){
            setValidar(0)
        }
        else{
            setError(0)
        }
    }

    const comprobarUsuarioConEnter = (e) => {
        if (e.key == 'Enter') {
            comprobarUsuario()
          }
    }


    if (validar==-1){
        return(
            <div className="background">
            <div className="fondo">
            <h3 className="title"> Inicio de sesión </h3>
            <br/>
            <br/>
            <br/>
            <text className="texto"> Ingrese su mail: </text>
            <br/>
            <input className="input" type ="text" placeholder="Mail" onChange={handleUserChange}/>
            <br/>
            <br/>
            <text className="texto">Ingrese su contraseña:</text>
            <br/>
            <input className="input" type ="password" placeholder="Contraseña" onChange={handlePasswordChange} onKeyDown={comprobarUsuarioConEnter}/>
            <a  className="vinculos" href="#"><Link to={"/Cambio-contraseña"} className="nav-link">¿Olvidaste tu contraseña? </Link></a> 
            <br/>
            {error == 0 && <div className="contenedorError"><text className="error">Los datos ingresados no son correctos</text></div>}
            <br/>
            <button className="boton" onClick={comprobarUsuario}>
                INGRESAR
            </button>
            <a  className="registro" href="#"><Link to={"/Registro"} className="nav-link">¿No tenés cuenta? ¡Registrate! </Link></a>
            </div>
            </div>
        )
    }
    else{
        return(
            <div>
            <ComentariosProfesor/>
            </div>
        )
    }
    
}

export default InicioSesion;