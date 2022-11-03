import React, { forwardRef } from "react";
import { Link } from "react-router-dom";
import './Menu.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function MenuProfesor(){
    return(
        <div className="menu">
            <div className="titulo-menu">
                <h1>Cursos Online</h1>
            </div>
            <div className="botones-menu">
            <Link to="/misClasesProfesor" style={{textDecoration:"none"}}>
                <Button variant="outlined" style={{color:"white", borderColor:"white", marginLeft:"30px"}}>Mis clases</Button>
            </Link>
            <Link to="/contratacionesProfesor" style={{textDecoration:"none"}}>
                <Button variant="outlined" style={{color:"white", borderColor:"white", marginLeft:"30px"}}>Mis contrataciones</Button>
            </Link>
            <Link to="/" style={{textDecoration:"none"}}>
                <Button variant="outlined" style={{color:"white", borderColor:"white", marginLeft:"30px"}}>Cerrar sesion</Button>
            </Link>
            </div>
        </div>
    )
}

export default MenuProfesor;