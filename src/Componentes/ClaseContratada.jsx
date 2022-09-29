import React from "react";
import { useState } from "react";
import PopupWindowComment from '../Componentes/PopupWindowComment';
import '../Hojas-de-estilo/ClaseGeneral.css';
import '../Hojas-de-estilo/ClaseContratada.css';
import {Link} from 'react-router-dom';

function ClaseContratada({Nombre, Descripcion, Profesor, Dia, Horario}) {

    const [buttonPopupComment, setButtonPopupComment] = useState(false);

    return(
        <div className="contenedor-clase">
            <div className="titulo-clase">
                <h3>{Nombre}</h3>
            </div>
            <div className="descripcion-clase">
                <h6>{Descripcion}</h6>
            </div>
            <div className="detalles-clase">
                <div className="profesor-clase"><ion-icon name="person-outline"></ion-icon><h6>{Profesor}</h6></div>
                <div className="dia-clase"><ion-icon name="calendar-outline"></ion-icon><h6>{Dia}</h6></div>
                <div className="horario-clase-cont"><ion-icon name="time-outline"></ion-icon><h6>{Horario}</h6></div>
            </div>
            <div className="caja-comentarios-clase">
                <div className="caja-boton-comentar">
                    <button className="btn-comentar" onClick={() => setButtonPopupComment(true)}>COMENTAR</button>
                </div>
                <div className="comentarios-clase-cont"><ion-icon name="chatbox-outline"></ion-icon></div>
            </div>
            <PopupWindowComment trigger={buttonPopupComment} setTrigger={setButtonPopupComment}>
            </PopupWindowComment>
        </div>
    )
}

export default ClaseContratada;