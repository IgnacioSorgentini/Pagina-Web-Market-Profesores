import React from "react";
import Contratacion from "../Componentes/Contratacion";
import '../Hojas-de-estilo/Contrataciones.css'
import MenuProfesor from "../Componentes/Menu/MenuProfesor";

function Contrataciones() {
    return(
        <div className="Contrataciones">
            <MenuProfesor />
            <div className="contenedor-contrataciones">
            <div className="titulo-pantalla">
                <h3 style={{color:"#334756"}}>Contrataciones</h3>
            </div>
            <div className="lista-contrataciones">
                <Contratacion Clase="Matematica Basica" Alumno="Juan Navarro" Telefono="339449384" Mail="juan@gmail.com" HorarioRef="17hs" Mensaje="Holaaa quiero inscribirme a esta clase porque me re interesa maannn, dale wachoo aceptame"/>
                <Contratacion Clase="Matematica Basica" Alumno="Juan Navarro" Telefono="339449384" Mail="juan@gmail.com" HorarioRef="17hs" Mensaje="Holaaa quiero inscribirme a esta clase porque me re interesa maannn, dale wachoo aceptame"/>
                <Contratacion Clase="Matematica Basica" Alumno="Juan Navarro" Telefono="339449384" Mail="juan@gmail.com" HorarioRef="17hs" Mensaje="Holaaa quiero inscribirme a esta clase porque me re interesa maannn, dale wachoo aceptame"/>
                <Contratacion Clase="Matematica Basica" Alumno="Juan Navarro" Telefono="339449384" Mail="juan@gmail.com" HorarioRef="17hs" Mensaje="Holaaa quiero inscribirme a esta clase porque me re interesa maannn, dale wachoo aceptame"/>
            </div>
        </div>
        </div>
    )
}

export default Contrataciones;