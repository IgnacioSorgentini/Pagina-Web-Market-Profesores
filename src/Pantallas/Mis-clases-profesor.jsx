import React from "react";
import ClaseContratada from "../Componentes/ClaseContratada";

function MisClasesProfesor () {
    return(
        <div className="contenedor-mis-clases">
            <div className="titulo-pantalla">
                <h3>Mis clases</h3>
            </div>
            <div className="lista-clases">
                <ClaseContratada Nombre='Matematica' Descripcion='Clase de matematica nivel avanzado' Profesor='Juan Perez' Dia='Martes' Horario='9am' />
                <ClaseContratada Nombre='Matematica' Descripcion='Clase de matematica nivel avanzado' Profesor='Juan Perez' Dia='Martes' Horario='9am' />
                <ClaseContratada Nombre='Matematica' Descripcion='Clase de matematica nivel avanzado' Profesor='Juan Perez' Dia='Martes' Horario='9am' />
                <ClaseContratada Nombre='Matematica' Descripcion='Clase de matematica nivel avanzado' Profesor='Juan Perez' Dia='Martes' Horario='9am' />
                <ClaseContratada Nombre='Matematica' Descripcion='Clase de matematica nivel avanzado' Profesor='Juan Perez' Dia='Martes' Horario='9am' />
            </div>
        </div>
    )
}

export default MisClasesProfesor;