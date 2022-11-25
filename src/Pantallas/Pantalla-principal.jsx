import React from "react";
import { Link } from "react-router-dom";
import '../Hojas-de-estilo/PantallaPrincipal.css';
import Button from '@mui/material/Button';
import { textAlign } from "@mui/system";

function PantallaPrincipal() {
    return(
        <div className="PantallaPrincipal">
            <div style={{maxWidth:"60%", display:"flex", flexDirection:"column", padding:"20px", boxSizing:"border-box", }}>
                <div style={{maxWidth:"90%", minHeight:"100%", display:"flex", flexDirection:"column", borderRadius:"10px"}} className="fondoGradiente">
                    <div style={{minHeight:"15%", minWidth:"100%", boxSizing:"border-box", display:"flex", justifyContent:"center", alignItems:"center", marginLeft:"15px"}}>
                        <h1 style={{color:"#3D56B2"}}>Academy</h1>
                    </div>
                    <h5 style={{color:"#3D56B2", marginLeft:"20px"}}> Academy es una página para gestionar la contratación de clases, pensada para facilitar el contacto entre alumnos y profesores.</h5>
                    <br></br>
                    <h5 style={{marginLeft:"20px", color:"black"}}> Puede registrarse como alumno o como profesor, dependiendo de las funcionalidades que necesita.</h5>
                    <br></br>
                    <h5 style={{marginLeft:"20px", color:"black"}}> Los profesores pueden crear clases y gestionarlas; así como también gestionar las solicitudes que alumnos hagan a esas clases y los comentarios que se reciban.</h5>
                    <br></br>
                    <h5 style={{marginLeft:"20px", color:"black"}}> Los alumnos pueden solicitar clases y gestionar sus solicitudes; comentar y valorar clases que hayan tomado y consultar información sobre clases disponibles.</h5>
                    <br></br>
                    <h5 style={{color:"#3D56B2", marginLeft:"15px" ,textAlign:"center"}}>Comience a explorar Academy:</h5>
                    <div style={{marginTop: "0px", minWidth:"100%", boxSizing:"border-box", display:"flex", flexDirection:"column", justifyContent:"", alignItems:"center"}}>
                        <div style={{minWidth:"60%", boxSizing:"border-box", display:"flex", justifyContent:"center", maxHeight:"50%"}}>
                            <Link to="/inicioSesion" style={{textDecoration:"none"}}><Button variant="outlined" size="large" style={{margin:"0px", color:"white", borderColor:"white", background:"#3D56B2"}} disableElevation>Iniciar sesion</Button></Link>
                        </div>
                        <div style={{minWidth:"60%", boxSizing:"border-box", display:"flex", justifyContent:"center", maxHeight:"50%"}}>
                            <Link to="/registro" style={{textDecoration:"none"}}><Button variant="outlined" size="large" style={{margin:"0px", color:"white", borderColor:"white", background:"#3D56B2"}}>Registrarse</Button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PantallaPrincipal;