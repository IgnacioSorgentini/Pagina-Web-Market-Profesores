import React from "react";
import '../Hojas-de-estilo/ComentariosProfesor.css';
import ComentarioProfesor from '../Componentes/ComentarioProfesor';

function ComentariosProfesor () {
    return(
        <div className="contenedor-comentarios">
            <div className="titulo-pantalla">
                <h3>Comentarios</h3>
            </div>
            <div className="lista-comentarios">
                <ComentarioProfesor Nombre="Gustavo Gomez" Comentario="Excelente clase! Me gustó la manera de explicar del profesor, y su paciencia. Muy recomendado!"/>
                <ComentarioProfesor Nombre="Gustavo Gomez" Comentario="Excelente clase! Me gustó la manera de explicar del profesor, y su paciencia. Muy recomendado!"/>
                <ComentarioProfesor Nombre="Gustavo Gomez" Comentario="Excelente clase! Me gustó la manera de explicar del profesor, y su paciencia. Muy recomendado!"/>
                <ComentarioProfesor Nombre="Gustavo Gomez" Comentario="Excelente clase! Me gustó la manera de explicar del profesor, y su paciencia. Muy recomendado!"/>
                <ComentarioProfesor Nombre="Gustavo Gomez" Comentario="Excelente clase! Me gustó la manera de explicar del profesor, y su paciencia. Muy recomendado!"/>

            </div>
        </div>
        
    )
}

export  default ComentariosProfesor;