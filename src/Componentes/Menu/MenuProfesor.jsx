import React, { forwardRef } from "react";
import { Link } from "react-router-dom";
import './Menu.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useLocation } from 'react-router-dom';

function MenuProfesor(){

    const location = useLocation()
    const { from } = location.state
    
    return(
        <div className="menu">
            <div className="titulo-menu">
                <Link to="/misClasesProfesor"  state ={location.state} style={{textDecoration:"none"}}><h1 style={{color:"#E6E6E6"}}>Cursos Online</h1></Link>
            </div>
            <div className="botones-menu">
            <Link to="/misClasesProfesor"  state ={location.state} style={{textDecoration:"none"}}>
                <Button variant="outlined" style={{color:"#E6E6E6", borderColor:"#E6E6E6", marginLeft:"30px"}}>Mis clases</Button>
            </Link>
            <Link to="/contratacionesProfesor"  state ={{id:location.state.id,nombre:location.state.nombre}} style={{textDecoration:"none"}}>
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