import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import PopupWindow from '../Componentes/PopupWindow';
import '../Hojas-de-estilo/ClaseGeneral.css';
import '../Hojas-de-estilo/ClaseDisponible.css';

function ClaseDisponible({Nombre, Descripcion, Profesor, Dia, Horario}) {

    const [buttonPopup, setButtonPopup] = useState(false);

    return(
        <div className="contenedor-clase">
            <div className="cabecera-clase">
                <div className="titulo-clase"><h3>{Nombre}</h3></div>
                <div className="costo-clase"><ion-icon name="pricetag-outline"></ion-icon><h6>Costo</h6></div>
            </div>
            <div className="descripcion-clase">
                <h6>{Descripcion}</h6>
            </div>
            <div className="detalles-clase">
                <div className="profesor-clase"><ion-icon name="person-outline"></ion-icon><h6><a onClick={() => setButtonPopup(true)}>{Profesor}</a></h6></div>
                <div className="fecha-clase">
                    <div className="dia-clase"><ion-icon name="calendar-outline"></ion-icon><h6>{Dia}</h6></div>
                    <div className="horario-clase-disp"><ion-icon name="time-outline"></ion-icon><h6>{Horario}</h6></div>
                </div>
                <div className="critica-clase">
                    <div className="calificacion-clase"><h6>Calif</h6></div>
                    <div className="comentarios-clase-disp"><Link to="/Comentarios"><ion-icon name="chatbox-outline"></ion-icon></Link></div>
                </div>
            </div>
            <div className="caja-boton-contratar">
                    <button className="btn-contratar">CONTRATAR</button>
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