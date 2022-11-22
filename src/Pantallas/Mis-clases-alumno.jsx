import React from "react";
import '../Hojas-de-estilo/Mis-clases.css';
import ClaseContratada from "../Componentes/ClaseContratada";
import MenuAlumno from '../Componentes/Menu/MenuAlumno';

function MisClasesAlumno ({id}) {
    const clases = [<ClaseContratada Nombre='Logaritmos' Descripcion='Introduccion a los logaritmos' Materia="Matematica" Profesor='Jose Lopez' Horario='1 hora' Tipo="Grupal" Frecuencia="Semanal" Calificacion="4"/>,
    <ClaseContratada Nombre='Logaritmos' Descripcion='Introduccion a los logaritmos' Materia="Matematica" Profesor='Jose Lopez' Horario='1 hora' Tipo="Grupal" Frecuencia="Semanal" Calificacion="4"/>,
    <ClaseContratada Nombre='Logaritmos' Descripcion='Introduccion a los logaritmos' Materia="Matematica" Profesor='Jose Lopez' Horario='1 hora' Tipo="Grupal" Frecuencia="Semanal" Calificacion="4"/>,
    <ClaseContratada Nombre='Logaritmos' Descripcion='Introduccion a los logaritmos' Materia="Matematica" Profesor='Jose Lopez' Horario='1 hora' Tipo="Grupal" Frecuencia="Semanal" Calificacion="4"/>,
    <ClaseContratada Nombre='Logaritmos' Descripcion='Introduccion a los logaritmos' Materia="Matematica" Profesor='Jose Lopez' Horario='1 hora' Tipo="Grupal" Frecuencia="Semanal" Calificacion="4"/>]

    
    

    return(
        <div className="misClasesAlumno">
            <MenuAlumno />
            <div className="contenedor-mis-clases">
            <div className="titulo-pantalla">
                <h3 style={{color:"#334756"}}>Mis clases</h3>
            </div>
            <div className="lista-clases">
                {
                    clases.map((clase) =>{
                        return(<ClaseContratada Nombre={clase.props.Nombre} Descripcion={clase.props.Descripcion} Materia={clase.props.Materia} Profesor={clase.props.Profesor} Horario={clase.props.Horario} Tipo={clase.props.Tipo} Frecuencia={clase.props.Frecuencia} Calificacion={clase.props.Calificacion}/>)
                    })
                }
               
            </div>
        </div>
        </div>
    )
}

export default MisClasesAlumno;