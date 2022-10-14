import React from "react";
import '../Hojas-de-estilo/ComentarioAlumno.css';

function Comentario({Nombre, Comentario}) {
    return(
        <div className="contenedor-comentario">
            <div className="nombre-comentador">
                <h4>{Nombre}</h4>
            </div>
            <div className="texto-comentario">
                <p>{Comentario}</p>
            </div>
        </div>
    )
}

export default Comentario;
