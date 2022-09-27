import React from "react";
import '../Hojas-de-estilo/Comentarios.css';
import Comentario from '../Componentes/Comentario';

function Comentarios () {
    return(
        <div className="contenedor-comentarios">
            <div className="titulo-pantalla">
                <h3>Comentarios</h3>
            </div>
            <div className="lista-comentarios">
                <Comentario Nombre='Ignacio Sorgentini' Comentario='Bla Bla Bla Bla' />
                <Comentario Nombre='Ignacio Sorgentini' Comentario='Bla Bla Bla Bla' />
            </div>
        </div>
        
    )
}

export  default Comentarios;