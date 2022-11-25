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
import { useLocation } from 'react-router-dom';

function ContratarCLase () {

        const [materia, setMateria] = React.useState('');
        const [listaClases,setListaClases] = React.useState([]);
        const [recarga, setRecarga] = React.useState(0);
    
        const location = useLocation()
        const { from } = location.state
        console.log(location.state)
        
        const handleChangeMateria = (event) => {
          setMateria(event.target.value);
          getClasesByMateria(event.target.value)
        };

        const [clase, setClase] = React.useState('');
      
        const handleChangeClase = (event) => {
          setClase(event.target.value);
          getClasesByTipo(event.target.value)
        };

        const [frecuencia, setFrecuencia] = React.useState('');
      
        const handleChangeFrecuencia = (event) => {
          setFrecuencia(event.target.value);
          getClasesByFrecuencia(event.target.value)
        };

        const [calificacion, setCalificacion] = React.useState('');
      
        const handleChangeCalificacion = (event) => {
          setCalificacion(event.target.value);
          getClasesByValoracion(event.target.value)
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
                        "tipo": response[i].tipo,
                        "descripcion": response[i].descripcion
                        }
                       
                   

                ) }
            
            }
            setListaClases(lista)
            setRecarga(1)
            
        })
    },[recarga]);
       
    function getClasesByFrecuencia(freq){
        if (freq == ""){
            setRecarga(55)
        }
        else{
        fetch(`http://localhost:3001/clases/by_frecuencia/${freq}`)

        
        .then((response1) => response1.json())
        .then((response1) => {
            
            var lista10 = []
            for (var i in response1){

                if (response1[i].isPublicada==true){
                    lista10.push({
                        "_id": response1[i]._id,
                        "profesor": response1[i].profesor,
                        "nombre": response1[i].nombre,
                        "materia": response1[i].materia,
                        "duracion": response1[i].duracion,
                        "frecuencia": response1[i].frecuencia,
                        "costo": response1[i].costo,
                        "valoracion": response1[i].valoracion,
                        "calificaciones": response1[i].calificaciones.valor,
                        "tipo": response1[i].isGrupal,
                        "descripcion": response1[i].descripcion
                        }
                   

                ) }
            }
            setListaClases(lista10)
            
        })
    }
    }

    function getClasesByMateria(materia){
        if (materia == ""){
            setRecarga(45)
        }
        else{
        fetch(`http://localhost:3001/clases/by_materia/${materia}`)

        
        .then((response1) => response1.json())
        .then((response1) => {
            
            var lista10 = []
            for (var i in response1){

                if (response1[i].isPublicada==true){
                    lista10.push({
                        "_id": response1[i]._id,
                        "profesor": response1[i].profesor,
                        "nombre": response1[i].nombre,
                        "materia": response1[i].materia,
                        "duracion": response1[i].duracion,
                        "frecuencia": response1[i].frecuencia,
                        "costo": response1[i].costo,
                        "valoracion": response1[i].valoracion,
                        "calificaciones": response1[i].calificaciones.valor,
                        "tipo": response1[i].isGrupal,
                        "descripcion": response1[i].descripcion
                        }
                   

                ) }
            }
            setListaClases(lista10)
            
        })
    }
    }
    
    function getClasesByTipo(clase){
        if (clase == ""){
            setRecarga(45)
        }
        else if (clase=="Individual"){
        fetch(`http://localhost:3001/clases/individuales`)

        
        .then((response1) => response1.json())
        .then((response1) => {
            
            var lista10 = []
            for (var i in response1){

                if (response1[i].isPublicada==true){
                    lista10.push({
                        "_id": response1[i]._id,
                        "profesor": response1[i].profesor,
                        "nombre": response1[i].nombre,
                        "materia": response1[i].materia,
                        "duracion": response1[i].duracion,
                        "frecuencia": response1[i].frecuencia,
                        "costo": response1[i].costo,
                        "valoracion": response1[i].valoracion,
                        "calificaciones": response1[i].calificaciones.valor,
                        "tipo": response1[i].isGrupal,
                        "descripcion": response1[i].descripcion
                        }
                   

                ) }
            }
            setListaClases(lista10)
            
        })
    }else if (clase=="Grupal"){
        fetch(`http://localhost:3001/clases/grupales`)

        
        .then((response1) => response1.json())
        .then((response1) => {
            
            var lista10 = []
            for (var i in response1){

                if (response1[i].isPublicada==true){
                    lista10.push({
                        "_id": response1[i]._id,
                        "profesor": response1[i].profesor,
                        "nombre": response1[i].nombre,
                        "materia": response1[i].materia,
                        "duracion": response1[i].duracion,
                        "frecuencia": response1[i].frecuencia,
                        "costo": response1[i].costo,
                        "valoracion": response1[i].valoracion,
                        "calificaciones": response1[i].calificaciones.valor,
                        "tipo": response1[i].isGrupal,
                        "descripcion": response1[i].descripcion
                        }
                   

                ) }
            }
            setListaClases(lista10)
            
        })
    }
    }
  
    function getClasesByValoracion(valoracion){
        if (valoracion == ""){
            setRecarga(45)
        }
        else{
        fetch(`http://localhost:3001/clases/by_valoracion/${valoracion}`)

        
        .then((response1) => response1.json())
        .then((response1) => {
            
            var lista10 = []
            for (var i in response1){

                if (response1[i].isPublicada==true){
                    lista10.push({
                        "_id": response1[i]._id,
                        "profesor": response1[i].profesor,
                        "nombre": response1[i].nombre,
                        "materia": response1[i].materia,
                        "duracion": response1[i].duracion,
                        "frecuencia": response1[i].frecuencia,
                        "costo": response1[i].costo,
                        "valoracion": response1[i].valoracion,
                        "calificaciones": response1[i].calificaciones.valor,
                        "tipo": response1[i].isGrupal,
                        "descripcion": response1[i].descripcion
                        }
                   

             
               ) }
               
            }
            setListaClases(lista10)
            
        })
    }
    }



            


    return(
        <div className="ContratarClase">
            <MenuAlumno  state ={location.state}/>
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
                                <MenuItem value={"Matematica"}>Matematica</MenuItem>
                                <MenuItem value={"Geografia"}>Geografia</MenuItem>
                                <MenuItem value={"Biologia"}>Biologia</MenuItem>
                                <MenuItem value={"Futbol"}>Futbol</MenuItem>
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
                                <MenuItem value={"Individual"}>Individual</MenuItem>
                                <MenuItem value={"Grupal"}>Grupal</MenuItem>
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
                                <MenuItem value={"Una vez"}>Una vez</MenuItem>
                                <MenuItem value={"Mensual"}>Mensual</MenuItem>
                                <MenuItem value={"Semanal"}>Semanal</MenuItem>
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
                                <MenuItem value={1}><Rating name="read-only" value={1} readOnly /></MenuItem>
                                <MenuItem value={2}><Rating name="read-only" value={2} readOnly /></MenuItem>
                                <MenuItem value={3}><Rating name="read-only" value={3} readOnly /></MenuItem>
                                <MenuItem value={4}><Rating name="read-only" value={4} readOnly /></MenuItem>
                                <MenuItem value={5}><Rating name="read-only" value={5} readOnly /></MenuItem>
                            </Select>
                    </FormControl>
                </div>
            </div>
            <div className="lista-clases">
            {
                    listaClases.map((clase) =>{
                        return( <ClaseDisponible Nombre={clase.nombre}  Descripcion={clase.descripcion} Materia={clase.materia} Profesor= {clase.profesor} Horario={clase.duracion} Tipo={clase.tipo} Frecuencia={clase.frecuencia} Calificacion={clase.valoracion} Costo={clase.costo} idClase={clase._id}/>)
                    })
                }

            </div>
        </div>
        </div>
    )
}

export default ContratarCLase;