import React from "react";
import '../Hojas-de-estilo/ComentariosAlumno.css';
import ComentarioAlumno from '../Componentes/ComentarioAlumno';

function ComentariosAlumno () {
    return(
        <div className="contenedor-comentarios">
            <div className="titulo-pantalla">
                <h3>Comentarios</h3>
            </div>
            <div className="lista-comentarios">
                <ComentarioAlumno Nombre='Ignacio Sorgentini' Comentario='Bla Bla Bla Bla' />
                <ComentarioAlumno Nombre='Ignacio Sorgentini' Comentario='Bla Bla Bla Bla' />
                <ComentarioAlumno Nombre='Ignacio Sorgentini' Comentario='Bla Bla Bla Bla' />
                <ComentarioAlumno Nombre='Ignacio Sorgentini' Comentario='Bla Bla Bla Bla' />
                <ComentarioAlumno Nombre='Ignacio Sorgentini' Comentario='Bla Bla Bla Bla' />

            </div>
        </div>
        
    )
}

export  default ComentariosAlumno;