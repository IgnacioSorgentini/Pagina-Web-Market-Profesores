import React, { useState, useEffect } from "react";
import '../Hojas-de-estilo/Inicio-sesion.css';
import {Link} from "react-router-dom";
import MisClasesAlumno from "./Mis-clases-alumno";
import MisClasesProfesor from "./Mis-clases-profesor";

function InicioSesion() {

    const [validar, setValidar] = useState(-1);
    const [user, setUser] = useState('');   
    const [password,setPassword] = useState('')
    const [error,setError] = useState(0)
    const [rol,setRol] = useState('')
    const [id, setId] = useState(''); 

    
    const handleUserChange = (e) => {
    	setUser(e.target.value);
  	};
  
	const handlePasswordChange = (e) => {
    	setPassword(e.target.value);
  	};

    function comprobarUsuario () {
        const data = { mail: user,
                       password: password};

        fetch('http://localhost:3001/users/login', {
        method: 'POST', 
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })
        
        
        .then((response) => response.json())
        .then((data) => {

            if (data.id == "-1"){
                setError(-1)
            }
            else{
                setId(data.id)
                setRol(data.rol)
                setValidar(0)
            }
           
            
         })
         ;

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
            <a  className="vinculos" href="#"><Link to={"/Cambiocontraseña"} className="nav-link">¿Olvidaste tu contraseña? </Link></a> 
            <br/>
            {error == -1 && <div className="contenedorError"><text className="error">Los datos ingresados no son correctos</text></div>}
            <br/>
            <button className="boton" onClick={comprobarUsuario}>
                INGRESAR
            </button>
            <Link to="/" style={{textDecoration:"none"}}>
                <button className="boton">
                    CANCELAR
                </button>
            </Link>
            <a  className="registro" href="#"><Link to={"/registro"} className="nav-link">¿No tenés cuenta? ¡Registrate! </Link></a>
            </div>
            </div>
        )
    }
    else{
            if (rol == 'Alumno'){
               return  <MisClasesAlumno id={id}/>
            
                
        }
        
            if (rol == 'Profesor'){
                return  <MisClasesProfesor id={id}/>
            }
          
        
    }
    
}

export default InicioSesion;