import React from "react";
import ClaseContratada from "../Componentes/ClaseContratada";
import ClaseCreada from "../Componentes/ClaseCreada";

function MisClasesProfesor () {
    return(
        <div className="contenedor-mis-clases">
            <div className="titulo-pantalla">
                <h3>Mis clases</h3>
            </div>
            <div className="lista-clases">
                <ClaseCreada />
            </div>
        </div>
    )
}

export default MisClasesProfesor;