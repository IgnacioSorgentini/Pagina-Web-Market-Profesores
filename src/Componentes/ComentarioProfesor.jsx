import React from "react";
import '../Hojas-de-estilo/ComentarioProfesor.css';

function ComentarioProfesor ({Nombre, Comentario}) {
    return(
        <div className="contenedor-comentario-profesor">
            <div className="lado-izquierdo-comentario">
                <div className="nombre-comentador">
                    <h4>{Nombre}</h4>
                </div>
                <div className="texto-comentario">
                    <p>{Comentario}</p>
                </div>
            </div>
            <div className="lado-derecho-comentario">
                <button type="button" className="btn btn-bloquear btn-sm btn-primary"><ion-icon name="close-circle-outline"></ion-icon>BLOQUEAR</button>
                <button type="button" className="btn btn-sm btn-primary"><ion-icon name="checkmark-circle-outline"></ion-icon>ACEPTAR</button>
            </div>
        </div>
    )
}

export default ComentarioProfesor;