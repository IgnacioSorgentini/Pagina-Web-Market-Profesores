import React from "react";
import '../Hojas-de-estilo/ClaseDisponible.css'

function ClaseDisponible({Nombre, Descripcion, Profesor, Dia, Horario}) {
    return(
        <div className="contenedor-clase">
            <div className="titulo-clase">
                <h3>{Nombre}</h3>
            </div>
            <div className="descripcion-clase">
                <h6>{Descripcion}</h6>
            </div>
            <div className="detalles-clase">
                <div className="profesor-clase"><h6>{Profesor}</h6></div>
                <div className="dia-clase"><h6>{Dia}</h6></div>
                <div className="horario-clase"><h6>{Horario}</h6></div>
            </div>
        </div>
    )
}

export default ClaseDisponible;