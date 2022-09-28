import React from "react";
import PopupWindow from '../Componentes/PopupWindow';
import { useState } from "react";
import '../Hojas-de-estilo/Contratar-clase.css';
import ClaseDisponible from '../Componentes/ClaseDisponible';

function ContratarCLase () {

    return(
        <div className="contenedor-mis-clases">
            <div className="titulo-pantalla">
                <h3>Clases disponbles</h3>
            </div>
            <div className="lista-clases">
                <ClaseDisponible Nombre='Biologia' Descripcion='Clase de biologia nivel intermedio' Profesor='Fernanda Gimenez' Dia='Viernes' Horario='10am'/>
            </div>
        </div>
    )
}

export default ContratarCLase;