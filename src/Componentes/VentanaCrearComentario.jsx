import React from "react";
import '../Hojas-de-estilo/VentanaCrearComentario.css';

function VentanaCrearComentario() {
    return(
        <div className="ventana-comentario">
            <div className="titulo-ventana-comentario">Escribe un comentario</div>
            <div className="contenedor-texto-ventana">
                <input type="text" className="texto-ventana" placeholder="Comentario..." maxLength={100} />
            </div>
            <div className="contenedor-btn-ventana-comentario">
                <button>ENVIAR</button>
            </div>
        </div>
    )
}

export default VentanaCrearComentario;