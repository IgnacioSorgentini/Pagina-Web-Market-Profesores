import React, { useEffect } from "react";
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
        const [listaClases,setListaClases] = React.useState([]);
        const [recarga, setRecarga] = React.useState(0);
    
      
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


     

        useEffect(()=>{
         fetch(`http://localhost:3001/clases/all`)

        
        .then((response) => response.json())
        .then((response) => {
            var lista = []
            for (var i in response){

                if (response[i].isPublicada==true){
                    lista.push({
                        "_id": response[i]._id,
                        "profesor": response[i].profesor,
                        "nombre": response[i].nombre,
                        "materia": response[i].materia,
                        "duracion": response[i].duracion,
                        "frecuencia": response[i].frecuencia,
                        "costo": response[i].costo,
                        "valoracion": response[i].valoracion,
                        "calificaciones": response[i].calificaciones.valor,
                        "tipo": response[i].isGrupal,
                        "descripcion": response[i].descripcion
                        }
                   

                ) }
            }
            setListaClases(lista)
            setRecarga(1)
            
        })
    },[recarga]);
       
    
    
  



            


    return(
        <div className="ContratarClase">
            <MenuAlumno />
            <div className="contenedor-mis-clases">
            <div className="cabecera-pantalla">
                <div className="titulo-pantalla">
                    <h3 style={{color:"#334756"}}>Clases disponibles</h3>
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
            {
                    listaClases.map((clase) =>{
                        return( <ClaseDisponible Nombre={clase.nombre}  Descripcion={clase.descripcion} Materia={clase.materia} Profesor= {clase.profesor} Horario={clase.duracion} Tipo={clase.tipo} Frecuencia={clase.frecuencia} Calificacion={clase.calificacion} Costo={clase.costo}/>)
                    })
                }

            </div>
        </div>
        </div>
    )
}

export default ContratarCLase;