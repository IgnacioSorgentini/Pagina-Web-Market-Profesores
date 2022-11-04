import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import PopupWindow from '../Componentes/PopupWindow';
import PopupContratar from "./PopupWindowContratar";
import '../Hojas-de-estilo/ClaseGeneral.css';
import '../Hojas-de-estilo/ClaseDisponible.css';

function ClaseDisponible({Nombre, Descripcion, Materia, Profesor, Dia, Horario, Tipo, Frecuencia, Calificacion, Costo}) {

    const [buttonPopup, setButtonPopup] = useState(false);
    const [buttonPopupContratar, setButtonPopupContratar] = useState(false);

    return(
        <div className="contenedor-clase">
            <div className="cabecera-clase">
                <div className="titulo-clase"><h3>{Nombre}</h3></div>
                <div className="costo-clase"><ion-icon name="pricetag-outline"></ion-icon><h6>{Costo}</h6></div>
            </div>
            <div className="descripcion-clase">
                <h6>{Descripcion}</h6>
            </div>
            <div className="detalles-clase">
                <div className="materia-clase"><ion-icon name="book-outline"></ion-icon><h6>{Materia}</h6></div>
                <div className="profesor-clase"><ion-icon name="person-outline"></ion-icon><h6><a onClick={() => setButtonPopup(true)}>{Profesor}</a></h6></div>
                <div className="horario-clase-disp"><ion-icon name="time-outline"></ion-icon><h6>{Horario}</h6></div>
                <div className="tipo-clase"><ion-icon name="people-outline"></ion-icon><h6>{Tipo}</h6></div>
                <div className="frecuencia-clase"><ion-icon name="barbell-outline"></ion-icon><h6>{Frecuencia}</h6></div>
                <div className="calificacion-clase"><ion-icon name="star-outline"></ion-icon><h6>{Calificacion}</h6></div>
            </div>
            <div className="footer-clase-disp">
                    <div className="caja-btn-contratar">
                        <button className="btn-contratar" onClick={() => setButtonPopupContratar(true)}>CONTRATAR</button>
                    </div>
                    <div className="caja-icono-comentarios">
                    <div className="comentarios-clase-disp"><Link to="/comentariosAlumno" style={{color:"black"}}><ion-icon name="chatbox-outline"></ion-icon></Link></div>
                    </div>
            </div>
            <PopupWindow trigger={buttonPopup} setTrigger={setButtonPopup}>
                <div className="titulo-popup">
                    <h3>{Profesor}</h3>
                </div>
                <hr />
                <div className="contenido-popup">
                    <h5>Descripcion del profesor</h5>
                </div>
            </PopupWindow>
            <PopupContratar trigger={buttonPopupContratar} setTrigger={setButtonPopupContratar}></PopupContratar>
        </div>
    )
}

export default ClaseDisponible;