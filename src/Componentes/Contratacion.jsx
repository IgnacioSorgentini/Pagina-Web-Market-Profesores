import React from "react";
import '../Hojas-de-estilo/Contratacion.css'
import Chip from '@mui/material/Chip';
import AccessTimeIcon from '@mui/icons-material/AccessTime';


function Contratacion ({Clase, Alumno, Telefono, Mail, HorarioRef, Mensaje}) {
    return(
        <div className="contenedor-contratacion">
            <div className="datos-contratacion">
                <div className="clase-contratada">
                    <div className="nombre-clase-contratada"><h4>{Clase}</h4></div>
                    <div className="estado-clase-contratada" style={{display:"flex", alignItems:"center"}}> <Chip color="warning" size="small" icon={<AccessTimeIcon />} label="Pendiente" /></div>
                </div>
                <div className="detalles-contratacion">
                    <div className="alumno-contratador">
                        <h6>Nombre del interesado: {Alumno}</h6>
                    </div>
                    <div className="telefono-contratador">
                        <h6>Numero de telefono: {Telefono}</h6>
                    </div>
                    <div className="mail-contratador">
                        <h6>Direccion de correo: {Mail}</h6>
                    </div>
                    <div className="hora-ref-contratador">
                        <h6>Horario de referencia para el contacto: {HorarioRef}</h6>
                    </div>
                </div>
                <div className="mensaje-contratador">
                    <h5 style={{paddingLeft:"10px"}}>Mensaje</h5>
                    <hr/>
                    <h6 style={{paddingLeft:"10px"}}>{Mensaje}</h6>
                </div>
            </div>
            <div className="acciones-contratacion">
                <div className="boton-cambiar-estado-contratacion">
                    <button type="button" class="btn btn-outline-primary btn-sm">CAMBIAR ESTADO</button>
                </div>
                <div className="boton-eliminar-contratacion">
                    <button type="button" class="btn btn-outline-primary btn-sm">ELIMINAR</button>
                </div>
            </div>
        </div>

    )
}

export default Contratacion;