import React from "react";
import ClaseContratada from "../Componentes/ClaseContratada";
import ClaseCreada from "../Componentes/ClaseCreada";
import '../Hojas-de-estilo/Mis-clases-profesor.css';
import { useState } from "react";
import PopupNuevaClase from "../Componentes/PopupWindowNuevaClase";

function MisClasesProfesor () {
    const [buttonPopup, setButtonPopup] = useState(false);

    return(
        <div className="contenedor-mis-clases">
            <div className="cabecera-pantalla-profesor">
                <div className="titulo-pantalla">
                    <h3>Mis clases</h3>
                </div>
                <div className="boton-crear-clase">
                    <button type="button" className="btn btn-primary" onClick={() => setButtonPopup(true)}>CREAR CLASE</button>
                </div>
            </div>
            <div className="lista-clases">
                <ClaseCreada Nombre="Matematica A" Descripcion="Clase de matematica nivel avanzado" Materia="Matematica" Dia="Miercoles" Horario="6am a 8am" Frecuencia="Semanal" />
            </div>
            <PopupNuevaClase trigger={buttonPopup} setTrigger={setButtonPopup}>
            </PopupNuevaClase>
        </div>
    )
}

export default MisClasesProfesor;