import React from "react";
import '../Hojas-de-estilo/Mis-clases.css';
import ClaseContratada from "../Componentes/ClaseContratada";

function MisClasesAlumno () {
    return(
        <div className="contenedor-mis-clases">
            <div className="titulo-pantalla">
                <h3>Mis clases</h3>
            </div>
            <div className="lista-clases">
                <ClaseContratada Nombre='Logaritmos' Descripcion='Introduccion a los logaritmos' Materia="Matematica" Profesor='Jose Lopez' Horario='1 hora' Tipo="Grupal" Frecuencia="Semanal" Calificacion="4"/>
                <ClaseContratada Nombre='Logaritmos' Descripcion='Introduccion a los logaritmos' Materia="Matematica" Profesor='Jose Lopez' Horario='1 hora' Tipo="Grupal" Frecuencia="Semanal" Calificacion="4"/>
                <ClaseContratada Nombre='Logaritmos' Descripcion='Introduccion a los logaritmos' Materia="Matematica" Profesor='Jose Lopez' Horario='1 hora' Tipo="Grupal" Frecuencia="Semanal" Calificacion="4"/>
                <ClaseContratada Nombre='Logaritmos' Descripcion='Introduccion a los logaritmos' Materia="Matematica" Profesor='Jose Lopez' Horario='1 hora' Tipo="Grupal" Frecuencia="Semanal" Calificacion="4"/>
                <ClaseContratada Nombre='Logaritmos' Descripcion='Introduccion a los logaritmos' Materia="Matematica" Profesor='Jose Lopez' Horario='1 hora' Tipo="Grupal" Frecuencia="Semanal" Calificacion="4"/>
            </div>
        </div>
    )
}

export default MisClasesAlumno;