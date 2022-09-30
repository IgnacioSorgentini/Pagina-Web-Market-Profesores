import React from "react";
import { useState } from "react";
import PopupEditarClase from '../Componentes/PopupWindowEditar';
import '../Hojas-de-estilo/ClaseGeneral.css';
import '../Hojas-de-estilo/ClaseCreada.css';
import { useState } from "react";
import PopupWindowPublicar from '../Componentes/PopupWindowPublicar';
import PopupWindowDespublicar from '../Componentes/PopupWindowDespublicar';

function ClaseCreada({Nombre, Descripcion, Materia, Duracion, Tipo, Frecuencia, Precio}) {
    
    const [buttonPopupEditar, setButtonPopupEditar] = useState(false);
    const [buttonPopupPublicar, setButtonPopupPublicar] = useState(false);
    const [buttonPopupDespublicar, setButtonPopupDespublicar] = useState(false);

    return(
        <div className="contenedor-clase">
            <div className="cabecera-clase">
                <div className="titulo-clase">
                    <h3>{Nombre}</h3>
                </div>
                <div className="precio-clase">
                    <ion-icon name="pricetag-outline"></ion-icon><h6>{Precio}</h6>
                </div>
            </div>
            <div className="descripcion-clase">
                <h6>{Descripcion}</h6>
            </div>
            <div className="detalles-clase">
                <div className="materia-clase"><ion-icon name="book-outline"></ion-icon><h6>{Materia}</h6></div>
                <div className="dia-clase"><ion-icon name="time-outline"></ion-icon><h6>{Duracion}</h6></div>
                <div className="horario-clase-cont"><ion-icon name="people-outline"></ion-icon><h6>{Tipo}</h6></div>
                <div className="frecuencia-clase"><ion-icon name="barbell-outline"></ion-icon><h6>{Frecuencia}</h6></div>
            </div>
            <div className="pie-de-clase">
                <div className="botones-clase-creada">
                    <button><ion-icon name="trash-outline"></ion-icon></button>
                    <button onClick={() => setButtonPopupEditar(true)}><ion-icon name="build-outline"></ion-icon></button>
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
            <PopupEditarClase trigger={buttonPopupEditar} setTrigger={setButtonPopupEditar} Descripcion={Descripcion} Precio={Precio} Materia={Materia} Duracion={Duracion} Frecuencia={Frecuencia}/>
        </div>
    )
}

export default ClaseCreada;