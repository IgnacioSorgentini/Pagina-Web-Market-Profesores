import React, { forwardRef } from "react";
import { Link } from "react-router-dom";
import './Menu.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function MenuProfesor(props){
    console.log(props)
    return(
        <div className="menu">
            <div className="titulo-menu">
                <Link to="/misClasesProfesor" params={{ id: props.id, nombre: props.nombre}} style={{textDecoration:"none"}}><h1 style={{color:"#E6E6E6"}}>Cursos Online</h1></Link>
            </div>
            <div className="botones-menu">
            <Link to="/misClasesProfesor"   params={{ id: props.id, nombre: props.nombre}} style={{textDecoration:"none"}}>
                <Button variant="outlined" style={{color:"#E6E6E6", borderColor:"#E6E6E6", marginLeft:"30px"}}>Mis clases</Button>
            </Link>
            <Link to="/contratacionesProfesor" style={{textDecoration:"none"}}>
                <Button variant="outlined" style={{color:"#E6E6E6", borderColor:"#E6E6E6", marginLeft:"30px"}}>Mis contrataciones</Button>
            </Link>
            <Link to="/" style={{textDecoration:"none"}}>
                <Button variant="outlined" style={{color:"#E6E6E6", borderColor:"#E6E6E6", marginLeft:"30px"}}>Cerrar sesion</Button>
            </Link>
            </div>
        </div>
    )
}

export default MenuProfesor;