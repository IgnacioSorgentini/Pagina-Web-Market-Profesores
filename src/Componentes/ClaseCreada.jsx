import React from "react";
import '../Hojas-de-estilo/ClaseGeneral';


function ClaseCreada({Nombre, Descripcion, Materia, Dia, Horario}) {
    return(
        <div className="contenedor-clase">
            <div className="titulo-clase">
                <h3>{Nombre}</h3>
            </div>
            <div className="descripcion-clase">
                <h6>{Descripcion}</h6>
            </div>
            <div className="detalles-clase">
                <div className="dia-clase"><ion-icon name="calendar-outline"></ion-icon><h6>{Dia}</h6></div>
                <div className="horario-clase-cont"><ion-icon name="time-outline"></ion-icon><h6>{Horario}</h6></div>
            </div>
        </div>
    )
}