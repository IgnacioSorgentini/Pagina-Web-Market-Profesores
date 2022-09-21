import React from "react";
import '../Hojas-de-estilo/Mis-clases.css';
import Clase from "../Componentes/Clase";

function MisClases () {
    return(
        <Clase Nombre='Matematica' Descripcion='Clases de matematica nivel avanzado' Profesor='Jose Lopez' Dia='Jueves' Horario='7:45hs a 11:45hs'/>
    )
}

export default MisClases;