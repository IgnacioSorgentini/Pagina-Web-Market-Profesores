import React from "react";
import { Link } from "react-router-dom";
import '../Hojas-de-estilo/PantallaPrincipal.css';
import Button from '@mui/material/Button';

function PantallaPrincipal() {
    return(
        <div className="PantallaPrincipal">
            <div style={{minWidth:"60%", display:"flex", flexDirection:"column", padding:"20px", boxSizing:"border-box", }}>
                <div style={{minWidth:"100%", minHeight:"100%", display:"flex", flexDirection:"column", borderRadius:"10px"}} className="fondoGradiente">
                    <div style={{minHeight:"20%", minWidth:"100%", boxSizing:"border-box", display:"flex", justifyContent:"center", alignItems:"center" }}>
                        <h1>Mis Cursos</h1>
                    </div>
                    <div style={{minHeight:"80%", minWidth:"100%", boxSizing:"border-box", display:"flex", flexDirection:"column", justifyContent:"end", alignItems:"center"}}>
                        <div style={{minWidth:"60%", boxSizing:"border-box", display:"flex", justifyContent:"center"}}>
                            <Link to="/inicioSesion" style={{textDecoration:"none"}}><Button variant="outlined" size="large" style={{margin:"20px", color:"black", borderColor:"black"}} disableElevation>Iniciar sesion</Button></Link>
                        </div>
                        <div style={{minWidth:"60%", boxSizing:"border-box", display:"flex", justifyContent:"center"}}>
                            <Link to="/registro" style={{textDecoration:"none"}}><Button variant="outlined" size="large" style={{margin:"20px", color:"black", borderColor:"black"}}>Registrarse</Button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PantallaPrincipal;