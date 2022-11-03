import React from "react";
import '../Hojas-de-estilo/ComentariosAlumno.css';
import ComentarioAlumno from '../Componentes/ComentarioAlumno';
import MenuAlumno from "../Componentes/Menu/MenuAlumno";

function ComentariosAlumno () {
    return(
        <div className="ComentariosAlumno">
            <MenuAlumno />
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
        </div>
        
    )
}

export  default ComentariosAlumno;