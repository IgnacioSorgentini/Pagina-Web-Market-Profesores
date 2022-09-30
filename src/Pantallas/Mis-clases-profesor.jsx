import React from "react";
import ClaseContratada from "../Componentes/ClaseContratada";
import ClaseCreada from "../Componentes/ClaseCreada";
import '../Hojas-de-estilo/Mis-clases-profesor.css';

function MisClasesProfesor () {
    return(
        <div className="contenedor-mis-clases">
            <div className="cabecera-pantalla-profesor">
                <div className="titulo-pantalla">
                    <h3>Mis clases</h3>
                </div>
                <div className="boton-crear-clase">
                    <button>CREAR CLASE</button>
                </div>
            </div>
            <div className="lista-clases">
                <ClaseCreada Nombre="Matematica A" Descripcion="Clase de matematica nivel avanzado" Materia="Matematica" Duracion="1 hora" Tipo="Individual" Frecuencia="Semanal" Precio="1230,00" />
            </div>
        </div>
    )
}

export default MisClasesProfesor;