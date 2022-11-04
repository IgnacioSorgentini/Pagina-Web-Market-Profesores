import React from "react";
import PopupWindow from '../Componentes/PopupWindow';
import { useState } from "react";
import '../Hojas-de-estilo/Contratar-clase.css';
import ClaseDisponible from '../Componentes/ClaseDisponible';
import MenuAlumno from "../Componentes/Menu/MenuAlumno";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

function ContratarCLase () {

        const [materia, setMateria] = React.useState('');
      
        const handleChangeMateria = (event) => {
          setMateria(event.target.value);
        };

        const [clase, setClase] = React.useState('');
      
        const handleChangeClase = (event) => {
          setClase(event.target.value);
        };

        const [frecuencia, setFrecuencia] = React.useState('');
      
        const handleChangeFrecuencia = (event) => {
          setFrecuencia(event.target.value);
        };

        const [calificacion, setCalificacion] = React.useState('');
      
        const handleChangeCalificacion = (event) => {
          setCalificacion(event.target.value);
        };

    return(
        <div className="ContratarClase">
            <MenuAlumno />
            <div className="contenedor-mis-clases">
            <div className="cabecera-pantalla">
                <div className="titulo-pantalla">
                    <h3>Clases disponibles</h3>
                </div>
                <div className="filtro-clases">
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small" style={{backgroundColor:"#5B4FA6", borderRadius:"5px"}}>
                        <InputLabel id="demo-select-small" style={{color:"white"}}>Materia</InputLabel>
                            <Select
                                labelId="demo-select-small"
                                id="demo-select-small"
                                value={materia}
                                label="Age"
                                onChange={handleChangeMateria}
                            >
                                <MenuItem value="">
                                    <em>Todo</em>
                                </MenuItem>
                                <MenuItem value={10}>Matematica</MenuItem>
                                <MenuItem value={20}>Fisica</MenuItem>
                                <MenuItem value={30}>Electronica</MenuItem>
                            </Select>
                    </FormControl>
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small" style={{backgroundColor:"#5B4FA6", borderRadius:"5px"}}>
                        <InputLabel id="demo-select-small" style={{color:"white"}}>Clase</InputLabel>
                            <Select
                                labelId="demo-select-small"
                                id="demo-select-small"
                                value={clase}
                                label="Age"
                                onChange={handleChangeClase}
                            >
                                <MenuItem value="">
                                    <em>Todo</em>
                                </MenuItem>
                                <MenuItem value={10}>Individual</MenuItem>
                                <MenuItem value={20}>Grupal</MenuItem>
                            </Select>
                    </FormControl>
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small" style={{backgroundColor:"#5B4FA6", borderRadius:"5px"}}>
                        <InputLabel id="demo-select-small" style={{color:"white"}}>Frecuencia</InputLabel>
                            <Select
                                labelId="demo-select-small"
                                id="demo-select-small"
                                value={frecuencia}
                                label="Age"
                                onChange={handleChangeFrecuencia}
                            >
                                <MenuItem value="">
                                    <em>Todo</em>
                                </MenuItem>
                                <MenuItem value={10}>Unica vez</MenuItem>
                                <MenuItem value={20}>Mensual</MenuItem>
                                <MenuItem value={30}>Semanal</MenuItem>
                            </Select>
                    </FormControl>
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small" style={{backgroundColor:"#5B4FA6", borderRadius:"5px"}}>
                        <InputLabel id="demo-select-small" style={{color:"white"}}>Calificacion</InputLabel>
                            <Select
                                labelId="demo-select-small"
                                id="demo-select-small"
                                value={calificacion}
                                label="Age"
                                onChange={handleChangeCalificacion}
                            >
                                <MenuItem value="">
                                    <em>Todo</em>
                                </MenuItem>
                                <MenuItem value={10}><Rating name="read-only" value={1} readOnly /></MenuItem>
                                <MenuItem value={20}><Rating name="read-only" value={2} readOnly /></MenuItem>
                                <MenuItem value={30}><Rating name="read-only" value={3} readOnly /></MenuItem>
                                <MenuItem value={40}><Rating name="read-only" value={4} readOnly /></MenuItem>
                                <MenuItem value={50}><Rating name="read-only" value={5} readOnly /></MenuItem>
                            </Select>
                    </FormControl>
                </div>
            </div>
            <div className="lista-clases">
                <ClaseDisponible Nombre='Biologia A' Descripcion='Clase de biologia nivel intermedio' Materia="Biologia" Profesor='Fernanda Gimenez' Horario='3 horas' Tipo="Grupal" Frecuencia="Unica" Calificacion="3" Costo="$2350,00"/>
                <ClaseDisponible Nombre='Geometria' Descripcion='Clases de geometria para principiantes' Materia="Matematica" Profesor='Gustavo Hernandez' Horario='1 hora' Tipo="Individual" Frecuencia="Semanal" Calificacion="5" Costo="$1000,00"/>
                <ClaseDisponible Nombre='Logica' Descripcion='Clases cortas de logica para principiantes' Materia="Programacion" Profesor='Ricardo Tomilsonn' Horario='1 hora' Tipo="Grupal" Frecuencia="Semanal" Calificacion="4" Costo="$1050,00"/>
                <ClaseDisponible Nombre='Estadistica Gral.' Descripcion='Introduccion a las variables aleatorias' Materia="Estadistica" Profesor='Sergio Salas' Horario='2 horas' Tipo="Grupal" Frecuencia="Mensual" Calificacion="3" Costo="$3000,00"/>
                <ClaseDisponible Nombre='1ra Guerra Mundial' Descripcion='Clase general sobre el gran hecho historico' Materia="Historia" Profesor='Antonelia Ramos' Horario='4 horas' Tipo="Grupal" Frecuencia="Unica" Calificacion="5" Costo="$4000,00"/>
                <ClaseDisponible Nombre='AutoCAD' Descripcion='Curso de introduccion a AutoCAD' Materia="Tecnologia" Profesor='Ariel Morales' Horario='1 hora' Tipo="Grupal" Frecuencia="Semanal" Calificacion="4" Costo="$1460,00"/>
                <ClaseDisponible Nombre='Gases' Descripcion='Introduccion a los distintos gases' Materia="Quimica" Profesor='Martina Ares' Horario='1 hora' Tipo="Individual" Frecuencia="Semanal" Calificacion="5" Costo="$1000,00"/>
                <ClaseDisponible Nombre='Past Simple' Descripcion='Clases del tiempo Past Simple. Inicial.' Materia="Ingles" Profesor='Ana de Armas' Horario='2 horas' Tipo="Individual" Frecuencia="Unica" Calificacion="5" Costo="$2500,00"/>

            </div>
        </div>
        </div>
    )
}

export default ContratarCLase;