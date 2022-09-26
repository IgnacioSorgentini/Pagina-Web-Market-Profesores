import React from "react";
import '../Hojas-de-estilo/Comentario.css';

function Comentario({Nombre, Comentario}) {
    return(
        <div className="contenedor">
            <div className="nombre">
                <h4>{Nombre}</h4>
            </div>
            <div className="texto">
                <p>{Comentario}</p>
            </div>
        </div>
    )
}

export default Comentario;
