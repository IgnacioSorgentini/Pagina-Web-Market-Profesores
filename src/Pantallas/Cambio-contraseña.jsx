import React, { useState, useEffect } from "react";
import '../Hojas-de-estilo/Cambio-contraseña.css';

function Cambiocontraseña(){
    const [validar, setValidar] = useState(-1);
    const [respuestaPregunta,setRespuestaPregunta] = useState('')
    const [validarPregunta, setValidarPregunta] = useState(-1);
    const [reingresopass, setReingresoPass] = useState('');   
    const [password,setPassword] = useState(' ')
    const [error,setError] = useState(-1)

    const respuesta = 'colombres'


    const handleReingresoChange = (e) => {
    	setReingresoPass(e.target.value);
  	};
  
	const handlePasswordChange = (e) => {
    	setPassword(e.target.value);
  	};

    const handleRespuestaPreguntaChange = (e) =>{
        setRespuestaPregunta(e.target.value)
    }

    function verificaciones (){
        validarPreguntaSecreta()
        comprobarPassword()
    }

    function  validarPreguntaSecreta(){
        if (respuestaPregunta.toLocaleLowerCase() == respuesta){
            setValidarPregunta(0)
        }
        else{
            setValidarPregunta(1)
        }
    }
    function comprobarPassword () {
        
        if (reingresopass === password){
            setValidar(0)
        }
        else{
            setError(0)
        }
    }


   
    if (validar==-1){
    return(
            <div className="background">
                <div className="fondo">
                <h3 className="titleCambioContraseña"> Cambio de contraseña </h3>
                <br/>
                <br/>
                <br/>
                <br/>
                <h4 className="texto" > Responde la pregunta secreta para poder generar una nueva contraseña: </h4>
                <br/>
                <h5 className="texto" > ¿Como se llama la calle donde viviste por primera vez? </h5>
                <input className="input" type ="text" placeholder="Respuesta" onChange={handleRespuestaPreguntaChange}/>
                {validarPregunta == 1 && <div className="contenedorErrorRegistro"><text className="errorRegistro">La respuesta no es correcta</text></div>}
                <button className="botonCambioPass" onClick={verificaciones}>
                    CONFIRMAR
                </button>
                {validarPregunta === 0 &&  <div><text className="texto">Ingrese su contraseña:</text> <br/>
                                           <input className="input" type ="password" placeholder="Contraseña"  onChange={handlePasswordChange}/> 
                                           <text className="texto"> <br/>Confirme su contraseña:</text>
                                           <input className="input" type ="password" placeholder="Contraseña" onChange={handleReingresoChange}/>
                                           </div>}
                {error == 0 && <div className="contenedorErrorRegistro"><text className="errorRegistro">Las contraseñas no coinciden o esta en blanco</text></div>}                        

                </div>
            </div>
    )
    }
    else{
        window.location.replace('/');
    }  
}

export default Cambiocontraseña;