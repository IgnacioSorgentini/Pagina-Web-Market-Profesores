import React from "react";
import { useState } from "react";
import PopupWindowComment from '../Componentes/PopupWindowComment';
import PopupWindowValorar from "./PopupWindowValorar";
import '../Hojas-de-estilo/ClaseGeneral.css';
import '../Hojas-de-estilo/ClaseContratada.css';
import {Link} from 'react-router-dom';
import Rating from '@mui/material/Rating';
import FaceIcon from '@mui/icons-material/Face';
import Chip from '@mui/material/Chip';
import Solicitada from "./EstadosClase/Solicitada";
import Cancelada from '../Componentes/EstadosClase/Cancelada';
import Aceptada from '../Componentes/EstadosClase/Aceptada';


function ClaseContratada({Nombre, Descripcion, Materia, Profesor, Horario, Tipo, Frecuencia, Calificacion}) {

    const [buttonPopupComment, setButtonPopupComment] = useState(false);
    const [buttonPopupValorar, setButtonPopupValorar] = useState(false);

    return(
        <div className="contenedor-clase">
            <div className="titulo-clase" style={{display:"flex", flexDirection:"row", justifyContent:"space-between", minWidth:"90%"}}>
                <div><h3>{Nombre}</h3></div>
                <div><Solicitada /></div>
            </div>
            <div className="descripcion-clase">
                <h6>{Descripcion}</h6>
            </div>
            <div className="detalles-clase">
                <div className="materia-clase"><ion-icon name="book-outline"></ion-icon><h6>{Materia}</h6></div>
                <div className="profesor-clase"><ion-icon name="person-outline"></ion-icon><h6>{Profesor}</h6></div>
                <div className="horario-clase-cont"><ion-icon name="time-outline"></ion-icon><h6>{Horario}</h6></div>
                <div className="tipo-clase"><ion-icon name="people-outline"></ion-icon><h6>{Tipo}</h6></div>
                <div className="frecuencia-clase"><ion-icon name="barbell-outline"></ion-icon><h6>{Frecuencia}</h6></div>
                <div className="calificacion-clase"><Rating name="read-only" value={Calificacion} size="small" readOnly style={{color:"black"}} /></div>
            </div>
            <div className="caja-comentarios-clase">
                <div className="caja-boton-comentar">
                    <button className="btn-comentar" onClick={() => setButtonPopupComment(true)}>COMENTAR</button>
                    <button className="btn-valorar" onClick={() => setButtonPopupValorar(true)}>VALORAR</button>
                </div>
                <div className="comentarios-clase-cont"><Link to="/comentariosAlumno" style={{color:"black"}}><ion-icon name="chatbox-outline"></ion-icon></Link></div>
            </div>
            <PopupWindowComment trigger={buttonPopupComment} setTrigger={setButtonPopupComment}>
            </PopupWindowComment>
            <PopupWindowValorar trigger={buttonPopupValorar} setTrigger={setButtonPopupValorar} />
        </div>
    )
}

export default ClaseContratada;