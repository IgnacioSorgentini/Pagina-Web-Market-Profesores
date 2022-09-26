import React, { useState, useEffect } from "react";
import '../Hojas-de-estilo/Registro.css';
import Dropdown from 'react-bootstrap/Dropdown'
import {Link} from "react-router-dom";


function Registro() {

    const [validar, setValidar] = useState(-1);
    const [reingresopass, setReingresoPass] = useState('');   
    const [mail,setMail] = useState('')
    const [password,setPassword] = useState(' ')
    const [error,setError] = useState(1)
    const[rol,setRol] = useState(-1)  //1 para alumno y 0 para profesor
    const [pregunta, setPregunta] = useState('');   
    const [respuestaPregunta,setRespuestaPregunta] = useState('')


    const [texto,setTexto] = useState('Perfil')
    const [texto2,setTexto2] = useState('Pregunta')
    const usuarios =['pedroseveri@gmail.com','ignacio@gmail.com','mirko@gmail.com']
    
    const handleReingresoChange = (e) => {
    	setReingresoPass(e.target.value);
  	};
  
	const handlePasswordChange = (e) => {
    	setPassword(e.target.value);
  	};
    
    const handleMailChange = (e) => {
    	setMail(e.target.value);
  	};

    const handlePreguntaChange = (e) =>{
        setPregunta(e)
    }
    
    const handleRespuestaPreguntaChange = (e) =>{
        setRespuestaPregunta(e.target.value)
    }

    function setAlumno() {
        setRol(1)
        setTexto('Alumno')
    };
    function setProfesor() {
        setRol(0)
        setTexto('Profesor')
    };
    function setPregunta1(){
        setTexto2('¿Como se llamaba/llama su primer mascota?')
        handlePreguntaChange('¿Como se llamaba/llama su primer mascota?')
    }
    function setPregunta2(){
        setTexto2('¿Como se llama la calle donde viviste por primera vez?')
        handlePreguntaChange('¿Como se llama la calle donde viviste por primera vez?')
    }
    
    function verificaciones (){
        comprobarPassword()
        comprobarMail()
    }

    function comprobarPassword () {
        if (password === ' ' || reingresopass === ' '){
            setError(4)
        }
        else if (reingresopass === password){
            setValidar(0)
        }
        else{
            setError(0)
        }
    }
    function comprobarMail () {
            if (usuarios.indexOf(mail) != -1 ){
                setError(2)
            }
            else if (mail === ' ' || mail.includes('@') === false){
                setError(3)
            }
    }

        if (validar==-1){
            return(
                <div className="background">
                <div className="formRegistro">
                <h3 className="titleRegistro"> ¡Create una cuenta! </h3>
                <br/>
                <text className="texto"> Ingrese su nombre: </text>
                <br/>
                <input className="input" type ="text" placeholder="Nombre"/>
                <br/>
                <text className="texto"> Ingrese su apellido: </text>
                <br/>
                <input className="input" type ="text" placeholder="Apellido"/>
                <br/>
                <text className="texto"> Ingrese su mail: </text>
                <br/>
                <input className="input" type ="text" placeholder="Mail" onChange={handleMailChange}/>
                <br/>
                {error == 2 && <div className="contenedorErrorRegistro"><text className="errorRegistro">El mail indicado ya se encuentra regsitrado</text></div>}
                {error == 3 && <div className="contenedorErrorRegistro"><text className="errorRegistro">El mail indicado no esta en el formato correcto o  <br/> se encuentra vacio</text></div>}
                <br/>
                <text className="texto"> Ingrese su telefono: </text>
                <br/>
                <input className="input" type ="text" placeholder="Telefono"/>
                <br/>
                <text className="texto">Ingrese su contraseña:</text>
                <br/>
                <input className="input" type ="password" placeholder="Contraseña" onChange={handlePasswordChange}/>
                <br/>
                <text className="texto">Confirme su contraseña:</text>
                <input className="input" type ="password" placeholder="Contraseña" onChange={handleReingresoChange}/>
                {error == 0 && <div className="contenedorErrorRegistro"><text className="errorRegistro">Las contraseñas no coinciden</text></div>}
                {error == 4 && <div className="contenedorErrorRegistro"><text className="errorRegistro">La contraseña esta vacia</text></div>}
                <br/>
                <text className="texto">Seleccioná tu perfil:</text>
                <Dropdown className="drop">
                <Dropdown.Toggle className="toggle" id="dropdown-basic" >
                 {texto}
                 </Dropdown.Toggle>

                 <Dropdown.Menu className="item">
                 <Dropdown.Item href="#/profesor" onClick={setProfesor}>Profesor</Dropdown.Item>
                 <Dropdown.Item href="#/alumno" onClick={setAlumno}>Alumno</Dropdown.Item>
                 </Dropdown.Menu>
                 </Dropdown>
                 <br/>
                 {rol == 0 && <div> <br/><br/><text className="texto"> Ingrese su experiencia en años como profesor: </text> <br/>
                  <input className="input" type ="text" placeholder="Experiencia"/> <br/>
                  <text className="texto"> Ingrese su Titulo: </text>
                  <input className="input" type ="text" placeholder="Titulo"/>
                  </div>}
                  {rol == 1 && <div> <br/><br/><text className="texto"> Ingrese su fecha de nacimiento: </text> <br/>
                  <input className="input" type ="text" placeholder="Fecha de nacimiento"/> <br/>
                  <text className="texto"> Indique estudios cursado o en curso: </text>
                  <Dropdown className="drop">
                  <Dropdown.Toggle className="toggle" id="dropdown-basic" >
                  Estudios
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="item">
                  <Dropdown.Item href="#/action-1" >Primario</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Secundario</Dropdown.Item>
                  <Dropdown.Item href="#/action-3" >Terciario</Dropdown.Item>
                  <Dropdown.Item href="#/action-4" >Universitario</Dropdown.Item>
                  </Dropdown.Menu>
                  </Dropdown>
                  </div>}
                  <text className="texto"> Indique la pregunta secreta y su respuesta: </text>
                  <Dropdown className="drop">
                  <Dropdown.Toggle className="toggle" id="dropdown-basic" >
                  {texto2}
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="item">
                  <Dropdown.Item href="#/action-1" onClick={setPregunta1} onChange={handlePreguntaChange} >¿Como se llamaba/llama su primer mascota?</Dropdown.Item>
                  <Dropdown.Item href="#/action-2" onClick={setPregunta2} onChange={handlePreguntaChange}>¿Como se llama la calle donde viviste por primera vez?</Dropdown.Item>
                  </Dropdown.Menu>
                  </Dropdown>
                  <br/>
                  <input className="input" type ="text" placeholder="Respuesta" onChange={handleRespuestaPreguntaChange} /> <br/>
                 
                <button className="botonRegistro" onClick={verificaciones} >
                    CONFIRMAR
                </button>
                <a  className="iniciar" href="#"><Link to={"/"} className="nav-link">¿Ya tenés cuenta? ¡Iniciá sesión! </Link></a>
                </div>
                </div>
            
            )

        }
        else{
            window.location.replace('/');
        }
    
}


export default Registro