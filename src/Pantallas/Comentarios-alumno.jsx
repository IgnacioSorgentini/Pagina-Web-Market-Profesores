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
                <h3 style={{color:"#334756"}}>Comentarios</h3>
            </div>
            <div className="lista-comentarios">
                <ComentarioAlumno Nombre='Ignacio Sorgentini' Comentario= 'f you are still targeting browsers like IE11 and lower .. well, my heart goes out to you. The below solution I came up with 5 years ago will still work for you. Also, email me if you want a job that doesn' />
                <ComentarioAlumno Nombre='Pedro Severi' Comentario='Alto bajon.. Pero exponerlo a jugar muy al límite es un riesgo enorme para él, por no decir que el rendimiento no va a ser óptimo para el equipo..' />
                <ComentarioAlumno Nombre='Mirko Basar' Comentario='Los diálogos de estos tipos son siempre tan absurdos e incoherentes y no en el buen sentido...no esa absurdez graciosa si no solo absurdo y punto' />
                <ComentarioAlumno Nombre='Ignacio Sorgentini' Comentario='Buenas como estan? Saludos a Alkemy’s team, necesito saber si se puede iniciar a trabajar sabiendo algo de javascript, rubi, c#, c++, java, no tengo experiencia en trabajar pero vi algo de esos lenguajes y todo es similar, si me enseñan a aplicar lo que se o si se puede aprender a donore y servirles para luego asumir un puesto de trabajo, me interesaria, tambien curse 2 años de ingeniería en sistemas y me dedico al servicio tecnico' />
                <ComentarioAlumno Nombre='Ignacio Sorgentini' Comentario='Bla Bla Bla Bla' />

            </div>
        </div>
        </div>
        
    )
}

export  default ComentariosAlumno;