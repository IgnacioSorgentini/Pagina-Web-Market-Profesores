import React from "react";
import '../Hojas-de-estilo/ClaseGeneral.css';
import '../Hojas-de-estilo/ClaseCreada.css';
import { useState } from "react";
import PopupWindowPublicar from '../Componentes/PopupWindowPublicar';
import PopupWindowDespublicar from '../Componentes/PopupWindowDespublicar';

function ClaseCreada({Nombre, Descripcion, Materia, Dia, Horario, Frecuencia}) {
    
    const [buttonPopupPublicar, setButtonPopupPublicar] = useState(false);
    const [buttonPopupDespublicar, setButtonPopupDespublicar] = useState(false);


    return(
        <div className="contenedor-clase">
            <div className="cabecera-clase">
                <div className="titulo-clase">
                    <h3>{Nombre}</h3>
                </div>
                <div className="precio-clase">
                    <ion-icon name="pricetag-outline"></ion-icon><h6>Precio</h6>
                </div>
            </div>
            <div className="descripcion-clase">
                <h6>{Descripcion}</h6>
            </div>
            <div className="detalles-clase">
                <div className="materia-clase"><ion-icon name="book-outline"></ion-icon><h6>{Materia}</h6></div>
                <div className="dia-clase"><ion-icon name="calendar-outline"></ion-icon><h6>{Dia}</h6></div>
                <div className="horario-clase-cont"><ion-icon name="time-outline"></ion-icon><h6>{Horario}</h6></div>
                <div className="frecuencia-clase"><ion-icon name="barbell-outline"></ion-icon><h6>{Frecuencia}</h6></div>
            </div>
            <div className="pie-de-clase">
                <div className="botones-clase-creada">
                    <button><ion-icon name="trash-outline"></ion-icon></button>
                    <button><ion-icon name="build-outline"></ion-icon></button>
                    <button onClick={() => setButtonPopupPublicar(true)}><ion-icon name="arrow-up-circle-outline"></ion-icon></button>
                    <button onClick={() => setButtonPopupDespublicar(true)}><ion-icon name="arrow-down-circle-outline"></ion-icon></button>
                </div>
                <div className="comentarios-clase-creada">
                    <button><ion-icon name="chatbubble-outline"></ion-icon></button>
                </div>
            </div>
            <PopupWindowPublicar trigger={buttonPopupPublicar} setTrigger={setButtonPopupPublicar}>
            </PopupWindowPublicar>
            <PopupWindowDespublicar trigger={buttonPopupDespublicar} setTrigger={setButtonPopupDespublicar}>
            </PopupWindowDespublicar>
        </div>
    )
}

export default ClaseCreada;