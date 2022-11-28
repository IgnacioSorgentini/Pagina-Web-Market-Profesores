import React from "react";
import { useState } from "react";
import '../Hojas-de-estilo/ClaseGeneral.css';
import '../Hojas-de-estilo/ClaseContratada.css';
import {Link} from 'react-router-dom';
import Rating from '@mui/material/Rating';
import FaceIcon from '@mui/icons-material/Face';
import Chip from '@mui/material/Chip';
import Solicitada from "./EstadosClase/Solicitada";
import Cancelada from '../Componentes/EstadosClase/Cancelada';
import Aceptada from '../Componentes/EstadosClase/Aceptada';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useLocation } from 'react-router-dom';


function ClaseContratada({ Nombre, Descripcion, Materia, Profesor, duracion, Tipo, Frecuencia, Calificacion, Estado, Id, idClase, setRecarga}) {


    const location = useLocation()
    const { from } = location.state

    const [value, setValue] = React.useState(0);
    const [comentario, setComentario] = React.useState("")
    const [openComentar, setOpenComentar] = React.useState(false);
    const [nombreUsuario, setNombreUsuario] = React.useState("")

    const [recarga2, setRecarga2] = React.useState(-200);

    React.useEffect(()=>{
        fetch(`http://localhost:3001/users/${location.state}`)
        .then((response) => response.json())
        .then((data) => {
            setNombreUsuario(data.nombre)
        })
        
        setRecarga2(1)
     },[recarga2]);

    const handleClickOpenComentar = () => {
        setOpenComentar(true);
    };
    const handleCloseComentar = () => {
        setOpenComentar(false);
    };
    const handleCloseComentarEnviar = () => {
        console.log(Id)
        console.log(nombreUsuario)
        const data2 ={
            "usuario": nombreUsuario,
            "comentario": comentario
        }

        fetch(`http://localhost:3001/clases/comentar/${idClase}`, {
            method: 'PATCH', 
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(data2),
            })
        .then((response) => response.json())
        .then((response) => console.log(response))
        setRecarga2(10)
        setOpenComentar(false);
    }
    function handleChangeComentario(e){
        setComentario(e.target.value);
    }
    const [openValorar, setOpenValorar] = React.useState(false);
    const handleClickOpenValorar = () => {
        setOpenValorar(true);
    };
    const handleCloseValorar = () => {
        setOpenValorar(false);
    };

    const handleCloseValorarConfirmar = () => {
        console.log(Id + "   " + value)
        fetch(`http://localhost:3001/clases/actualizar_valoracion/${idClase}/${value}`, {
            method: 'PATCH', 
            headers: {
            'Content-Type': 'application/json',
            }
            })
        .then((response) => response.json())
        .then((response) => console.log(response))
        setRecarga(900)
        setOpenValorar(false);
    };


    const [openEstado, setOpenEstado] = React.useState(false);
    const handleClickOpenEstado = () => {
        setOpenEstado(true);
    };
    const handleCloseEstado = () => {
        setOpenEstado(false);
    };



    const [openDescripcion, setOpenDescripcion] = React.useState(false);
    const [scroll, setScroll] = React.useState('paper');
    const handleClickOpenDescripcion = (scrollType) => () => {
        setOpenDescripcion(true);
        setScroll(scrollType);
    };
    const handleCloseDescripcion = () => {
        setOpenDescripcion(false);
    };
    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (openDescripcion) {
        const { current: descriptionElement } = descriptionElementRef;
        if (descriptionElement !== null) {
            descriptionElement.focus();
        }
      }
    }, [openDescripcion]);


    
    



    return(
        <div className="contenedor-clase">
            <div className="titulo-clase" style={{display:"flex", flexDirection:"row", justifyContent:"space-between", minWidth:"90%"}}>
                <div><h3>{Nombre}</h3></div>
                <div><Solicitada Estado={Estado} /></div>
            </div>
            <div className="descripcion-clase">
                <h6>{Descripcion}</h6>
            </div>
            <div className="detalles-clase">
                <div className="materia-clase"><ion-icon name="book-outline"></ion-icon><h6>{Materia}</h6></div>
                <div className="profesor-clase"><ion-icon name="person-outline"></ion-icon><h6><a href="#" onClick={handleClickOpenDescripcion('paper')} style={{color:"black", textDecoration:"none"}}>{Profesor}</a></h6></div>
                <Dialog
                    open={openDescripcion}
                    onClose={handleCloseDescripcion}
                    scroll={scroll}
                    aria-labelledby="scroll-dialog-title"
                    aria-describedby="scroll-dialog-description"
                >
                    <DialogTitle id="scroll-dialog-title">{Profesor}</DialogTitle>
                    <DialogContent dividers={scroll === 'paper'}>
                        <DialogContentText
                            id="scroll-dialog-description"
                            ref={descriptionElementRef}
                            tabIndex={-1}
                        >
                            {[...new Array(1)].map( () => `Lorem ipsum dolor sit amet consectetur adipiscing elit dui, ac tempus nunc vulputate facilisi pretium congue non aptent, sociis mattis cum libero odio nisl facilisis. Sollicitudin id litora quisque etiam lectus vehicula felis scelerisque, rutrum sociis in magna nullam interdum ultrices, venenatis at dapibus faucibus iaculis massa odio. Aenean aliquam natoque semper faucibus congue magnis inceptos facilisi ultricies, ridiculus suspendisse leo in nibh euismod ullamcorper eleifend fringilla mollis, himenaeos etiam venenatis sollicitudin per hac mi viverra.` ).join('\n')}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseDescripcion}>Entendido</Button>
                    </DialogActions>
                </Dialog>
                <div className="horario-clase-cont"><ion-icon name="time-outline"></ion-icon><h6>{duracion + " hs"}</h6></div>
                <div className="tipo-clase"><ion-icon name="people-outline"></ion-icon><h6>{Tipo}</h6></div>
                <div className="frecuencia-clase"><ion-icon name="barbell-outline"></ion-icon><h6>{Frecuencia}</h6></div>
                <div className="calificacion-clase"><Rating name="read-only" value={Calificacion} size="small" readOnly style={{color:"black"}} /></div>
            </div>
            <div className="caja-comentarios-clase">
                <div className="caja-boton-comentar">
                    {(Estado=="Aceptada" || Estado=="Finalizada") && <button className="btn-comentar" onClick={handleClickOpenComentar}>COMENTAR</button>}
                    <Dialog open={openComentar} onClose={handleCloseComentar}>
                        <DialogTitle>Comentar clase</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Escriba su comentario aquí debajo. Por favor, intente que sea un comentario constructivo, y evite el uso de palabras inadecuadas o su comentario podría ser bloqueado por el mismo profesor.
                            </DialogContentText>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Comentario"
                                type="comentario"
                                fullWidth
                                variant="standard"
                                onChange={handleChangeComentario}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleCloseComentarEnviar}>Enviar</Button>
                            <Button onClick={handleCloseComentar}>Cancelar</Button>
                        </DialogActions>
                    </Dialog>
                    {(Estado=="Aceptada" || Estado=="Finalizada") && <button className="btn-valorar" onClick={handleClickOpenValorar}>VALORAR</button>}
                    <Dialog open={openValorar} onClose={handleCloseValorar}>
                        <DialogTitle>Valorar clase</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Inserte aquí debajo su valoración. Puede volver y cambiarla las veces que necesite.
                            </DialogContentText>
                            <div style={{display:"flex", justifyContent:"center", marginTop:"10px"}}>
                            <Rating
                                name="simple-controlled"
                                value={value}
                                onChange={(value, newValue) => {
                                setValue(newValue);


                                }}
                            />
                            </div>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleCloseValorarConfirmar}>Valorar</Button>
                            <Button onClick={handleCloseValorar}>Cancelar</Button>
                        </DialogActions>
                    </Dialog>
                </div>
                <div className="comentarios-clase-cont"><Link to="/comentariosAlumno/" state={{id:location.state,idclase:idClase}} style={{color:"black"}}><ion-icon name="chatbox-outline"></ion-icon></Link></div>
            </div>
        </div>
    )
}

export default ClaseContratada;