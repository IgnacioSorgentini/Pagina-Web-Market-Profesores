import React from "react";
import '../Hojas-de-estilo/ClaseDisponible.css'

function ClaseDisponible({Nombre, Descripcion, Profesor, Dia, Horario}) {
    return(
        <div className="clase">
            <div className="titulo">
                <h3>{Nombre}</h3>
            </div>
            <div className="descripcion">
                <h6>{Descripcion}</h6>
            </div>
            <div className="detalles">
                <div className="profesor"><h6>{Profesor}</h6></div>
                <div className="dia"><h6>{Dia}</h6></div>
                <div className="horario"><h6>{Horario}</h6></div>
            </div>
        </div>
    )
}

export default ClaseDisponible;