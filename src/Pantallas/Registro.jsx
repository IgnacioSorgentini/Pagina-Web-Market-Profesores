import React, { useState, useEffect } from "react";
import '../Hojas-de-estilo/Registro.css';
import Dropdown from 'react-bootstrap/Dropdown'
import {Link} from "react-router-dom";


function Registro() {

    const [validar, setValidar] = useState(-1); 
    const [mail,setMail] = useState('')
    const [telefono,setTelefono] = useState('')
    const [nombre,setNombre] = useState('')
    const [password,setPassword] = useState(' ')
    const [repassword,setRepassword] = useState(' ')
    const [error,setError] = useState(1)
    const[rol,setRol] = useState(-1)  //1 para alumno y 0 para profesor 
    const [respuestaPregunta,setRespuestaPregunta] = useState('')
    const [texto,setTexto] = useState('Perfil')
    const [texto2,setTexto2] = useState('Pregunta')
    const [texto3,setTexto3] = useState('Estudios')

    
  
	const handlePasswordChange = (e) => {
    	setRepassword(e.target.value);
  	};

      const handleRepasswordChange = (e) => {
    	setPassword(e.target.value);
  	};
    
    const handleMailChange = (e) => {
    	setMail(e.target.value);
  	};

      const handleTelefonoChange = (e) => {
    	setTelefono(e.target.value);
  	};

      const handleNombreChange = (e) => {
    	setNombre(e.target.value);
  	};

    const handleRespuestaPreguntaChange = (e) =>{
        setRespuestaPregunta(e.target.value)
    }

    function setEstudio() {
        setTexto3('Primario')

    }
    function setEstudio2() {
        setTexto3('Secundario')

    }
    function setEstudio3() {
        setTexto3('Terciario')

    }
    function setEstudio4() {
        setTexto3('Universitario')

    }
    function setPregunta(){
        setTexto2("¿Como se llama la calle donde viviste por primera vez?")
    }
    function setAlumno() {
        setRol(1)
        setTexto('Alumno')
    };
    function setProfesor() {
        setRol(0)
        setTexto('Profesor')
    };

 
    function registrarse(){
        if (password!= repassword){
            setError(6)
        }
        else{

      
        const data = { 
                    nombre: nombre,
                    mail: mail,
                    password: password,
                    rol:texto,
                    respuesta:respuestaPregunta,
                    telefono:telefono }
        
        fetch('http://localhost:3001/users/create', {
                method: 'POST', 
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
                })
        .then((response) => response.json())
        .then((data) => {
            
            console.log(data)
            if (data == "-3"){
                setError(3)
            }
            else if(data== "-1"){
                setError(2)
            }
            else if(data == "-2"){
                setError(4)
            }
            else if(data == "-4"){
                setError(5)
            }
            else{
                
                setValidar(0);
            }
           
            
         })
         ; 
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
                <input className="input" type ="text" placeholder="Nombre" onChange={handleNombreChange}/>
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
                <text className="texto"> Ingrese su telefono: </text>
                <br/>
                {error == 5 && <div className="contenedorErrorRegistro"><text className="errorRegistro">Ingrese un numero de telefono valido</text></div>}
                <input className="input" type ="text" placeholder="Telefono" onChange={handleTelefonoChange}/>
                <br/>
                <text className="texto">Ingrese su contraseña:</text>
                <br/>
                <input className="input" type ="password" placeholder="Contraseña" onChange={handlePasswordChange}/>
                <br/>
                <text className="texto">Reingrese su contraseña:</text>
                <br/>
                <input className="input" type ="password" placeholder="Contraseña" onChange={handleRepasswordChange}/>
                <br/>
                {error == 4 && <div className="contenedorErrorRegistro"><text className="errorRegistro">La contraseña debe incluir 3 o mas caracteres</text></div>}
                {error == 6 && <div className="contenedorErrorRegistro"><text className="errorRegistro">La contraseña deben coincidir</text></div>}
                <br/>
                <text className="texto">Seleccioná tu perfil:</text>
                <Dropdown className="drop">
                <Dropdown.Toggle className="toggle" id="dropdown-basic" >
                 {texto}
                 </Dropdown.Toggle>

                 <Dropdown.Menu className="item">
                 <Dropdown.Item  onClick={setProfesor}>Profesor</Dropdown.Item>
                 <Dropdown.Item  onClick={setAlumno}>Alumno</Dropdown.Item>
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
                  {texto3}
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="item">
                  <Dropdown.Item onClick={setEstudio} >Primario</Dropdown.Item>
                  <Dropdown.Item onClick={setEstudio2}>Secundario</Dropdown.Item>
                  <Dropdown.Item onClick={setEstudio3}>Terciario</Dropdown.Item>
                  <Dropdown.Item onClick={setEstudio4}>Universitario</Dropdown.Item>
                  </Dropdown.Menu>
                  </Dropdown>
                  </div>}
                  <text className="texto"> Indique la respuesta a la pregunta secreta: </text>
                  <Dropdown className="drop">
                  <Dropdown.Toggle className="toggle" id="dropdown-basic" >
                  {texto2}
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="item">
                  <Dropdown.Item  onClick={setPregunta}>¿Como se llama la calle donde viviste por primera vez?</Dropdown.Item>
                  </Dropdown.Menu>
                  </Dropdown>
                  <br/>
                  <input className="input" type ="text" placeholder="Respuesta" onChange={handleRespuestaPreguntaChange} /> <br/>
                 
                <button className="botonRegistro" onClick={registrarse} >
                    CONFIRMAR
                </button>
                <Link to="/" style={{textDecoration:"none"}}>
                    <button className="botonRegistro" >
                        CANCELAR
                    </button>
                </Link>
                <a  className="iniciar" href="#"><Link to={"/inicioSesion"} className="nav-link">¿Ya tenés cuenta? ¡Iniciá sesión! </Link></a>
                </div>
                </div>
            
            )

        }

        else{
            window.location.replace('/');
        }
    
}


export default Registro