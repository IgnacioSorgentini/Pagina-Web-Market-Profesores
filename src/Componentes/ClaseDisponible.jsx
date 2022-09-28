import React from "react";
import { useState } from "react";
import PopupWindow from '../Componentes/PopupWindow';
import '../Hojas-de-estilo/ClaseDisponible.css'

function ClaseDisponible({Nombre, Descripcion, Profesor, Dia, Horario}) {

    const [buttonPopup, setButtonPopup] = useState(false);

    return(
        <div className="contenedor-clase">
            <div className="titulo-clase">
                <h3>{Nombre}</h3>
            </div>
            <div className="descripcion-clase">
                <h6>{Descripcion}</h6>
            </div>
            <div className="detalles-clase">
                <div className="profesor-clase"><a onClick={() => setButtonPopup(true)}><h6>{Profesor}</h6></a></div>
                <div className="dia-clase"><h6>{Dia}</h6></div>
                <div className="horario-clase"><h6>{Horario}</h6></div>
            </div>
            <PopupWindow trigger={buttonPopup} setTrigger={setButtonPopup}>
                <div className="titulo-popup">
                    <h3>Titulo</h3>
                </div>
                <hr />
                <div className="contenido-popup">
                    <h5>Descripcion del profesor</h5>
                </div>
            </PopupWindow>
        </div>
    )
}

export default ClaseDisponible;