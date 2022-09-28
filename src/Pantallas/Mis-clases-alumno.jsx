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
                <ClaseContratada Nombre='Matematica' Descripcion='Clases de matematica nivel avanzado' Profesor='Jose Lopez' Dia='Jueves' Horario='7:45hs a 11:45hs'/>
                <ClaseContratada Nombre='Matematica' Descripcion='Clases de matematica nivel avanzado' Profesor='Jose Lopez' Dia='Jueves' Horario='7:45hs a 11:45hs'/>
                <ClaseContratada Nombre='Matematica' Descripcion='Clases de matematica nivel avanzado' Profesor='Jose Lopez' Dia='Jueves' Horario='7:45hs a 11:45hs'/>
                <ClaseContratada Nombre='Matematica' Descripcion='Clases de matematica nivel avanzado' Profesor='Jose Lopez' Dia='Jueves' Horario='7:45hs a 11:45hs'/>
                <ClaseContratada Nombre='Matematica' Descripcion='Clases de matematica nivel avanzado' Profesor='Jose Lopez' Dia='Jueves' Horario='7:45hs a 11:45hs'/>
                <ClaseContratada Nombre='Matematica' Descripcion='Clases de matematica nivel avanzado' Profesor='Jose Lopez' Dia='Jueves' Horario='7:45hs a 11:45hs'/>
                <ClaseContratada Nombre='Matematica' Descripcion='Clases de matematica nivel avanzado' Profesor='Jose Lopez' Dia='Jueves' Horario='7:45hs a 11:45hs'/>


            </div>
        </div>
    )
}

export default MisClasesAlumno;