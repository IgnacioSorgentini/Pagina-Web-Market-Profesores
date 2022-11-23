import React from "react";
import '../Hojas-de-estilo/Mis-clases.css';
import ClaseContratada from "../Componentes/ClaseContratada";
import MenuAlumno from '../Componentes/Menu/MenuAlumno';

function MisClasesAlumno ({id}) {
    console.log(id)
    return(
        <div className="misClasesAlumno">
            <MenuAlumno />
            <div className="contenedor-mis-clases">
            <div className="titulo-pantalla">
                <h3 style={{color:"#334756"}}>Mis clases</h3>
            </div>
            <div className="lista-clases">
                <ClaseContratada Nombre='Logaritmos' Descripcion='Introduccion a los logaritmos' Materia="Matematica" Profesor='Jose Lopez' Horario='1 hora' Tipo="Grupal" Frecuencia="Semanal" Calificacion="4" Estado='Solicitada'/>
                <ClaseContratada Nombre='Logaritmos' Descripcion='Introduccion a los logaritmos' Materia="Matematica" Profesor='Jose Lopez' Horario='1 hora' Tipo="Grupal" Frecuencia="Semanal" Calificacion="4" Estado='Cancelada'/>
                <ClaseContratada Nombre='Logaritmos' Descripcion='Introduccion a los logaritmos' Materia="Matematica" Profesor='Jose Lopez' Horario='1 hora' Tipo="Grupal" Frecuencia="Semanal" Calificacion="4" Estado='Finalizada'/>
                <ClaseContratada Nombre='Logaritmos' Descripcion='Introduccion a los logaritmos' Materia="Matematica" Profesor='Jose Lopez' Horario='1 hora' Tipo="Grupal" Frecuencia="Semanal" Calificacion="4" Estado='Aceptada'/>
                <ClaseContratada Nombre='Logaritmos' Descripcion='Introduccion a los logaritmos' Materia="Matematica" Profesor='Jose Lopez' Horario='1 hora' Tipo="Grupal" Frecuencia="Semanal" Calificacion="4"/>
            </div>
        </div>
        </div>
    )
}

export default MisClasesAlumno;