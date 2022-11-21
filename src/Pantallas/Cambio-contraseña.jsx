import React, { useState, useEffect } from "react";
import '../Hojas-de-estilo/Cambio-contraseña.css';

function Cambiocontraseña(){
    const [validar, setValidar] = useState(-1);
    const [mail,setMail] = useState('')
    const [respuesta,setRespuesta] = useState('')
    const [validarPregunta, setValidarPregunta] = useState(-1);
    const [reingresopass, setReingresoPass] = useState('');   
    const [password,setPassword] = useState('')
    const [error,setError] = useState(-1)
    const [id,setId] = useState(-1)
    const [respuestaUsuario,setRespuestaUsuario] = useState(-1)

  


    const handleReingresoChange = (e) => {
    	setReingresoPass(e.target.value);
  	};
  
	const handlePasswordChange = (e) => {
    	setPassword(e.target.value);
  	};

    const handleMail = (e) =>{
        setMail(e.target.value)
    }

    const handleRespuesta = (e) =>{
        setRespuesta(e.target.value)
    }

    function verificaciones (){
        if (validarPregunta!=0 && validarPregunta!=2){
            validarMail()
        }
        else if (validarPregunta == 2){
            if (respuestaUsuario == respuesta){ 
                setValidarPregunta(0)
            }
            else{
                setValidarPregunta(3)
            }
        }
        else{
            comprobarPassword()
        }
        
    }

    function  validarMail(){
      

        fetch(`http://localhost:3001/users/mail/${mail}`)

        
        .then((response) => response.json())
        .then((data) => {


        if (data._id == -1){
            setValidarPregunta(1)
        }
        else{
            setId (data._id)
            setRespuestaUsuario( data.respuesta)
            setValidarPregunta(2)
        }
        

 
})
;
    }
    function comprobarPassword () {
        
        if (reingresopass === password){
            const data = {password: password};

            fetch(`http://localhost:3001/users/${id}`, {
             method: 'PATCH', 
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            })
        ;
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
                <h4 className="texto" > Ingrese su mail para verificar que sea una cuenta ya creada: </h4>
                <br/>
                <h5 className="texto"  > Ingresa tu mail </h5>
                <input className="input" type ="text" placeholder="Mail" onChange={handleMail}/>
                {validarPregunta == 1 && <div className="contenedorErrorRegistro"><text className="errorRegistro">El mail no se encuentra registrado</text></div>}
                 <button className="botonCambioPass" onClick={verificaciones}>
                    CONFIRMAR
                </button>
                {validarPregunta == 2  &&  <div><text className="texto">Ingrese la respuesta a la pregunta de seguridad:</text> <br/> 
                                           <text className="texto"> <br/>¿Como se llama la calle donde viviste por primera vez?:</text>
                                           <input className="input" type ="text" placeholder="Respuesta a la pregunta" onChange={handleRespuesta}/>
                                           </div>}
                {validarPregunta == 3 && <div className="contenedorErrorRegistro"><text className="errorRegistro">La respuesta no coincide</text></div>}
                {validarPregunta == 0  &&  <div><text className="texto">Ingrese su contraseña:</text> <br/>
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