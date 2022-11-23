import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import '../Hojas-de-estilo/ClaseGeneral.css';
import '../Hojas-de-estilo/ClaseDisponible.css';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function ClaseDisponible({Nombre, Descripcion, Materia, Profesor, Dia, Horario, Tipo, Frecuencia, Calificacion, Costo, idClase}) {

    
    const [openContratar, setOpenContratar] = React.useState(false);
    const id = "637825f755610aa44323d5f2"
    const nombre = "alumno"
    const [telefono,setTelefono] = React.useState('');
    const [mensaje,setMensaje] = React.useState('');
    const [horario,setHorario] = React.useState('');

    function handleChangeTelefono(e){
        setTelefono(e.target.value);
    }
    function handleChangeMensaje(e){
        setMensaje(e.target.value);
    }
    function handleChangeHorario(e){
        setHorario(e.target.value);
    }

    const handleClickOpenContratar = () => {
        setOpenContratar(true);
    };
    const handleCloseContratar = () => {
        setOpenContratar(false);
    };
    const handleCloseContratarConfirmar = () => {

        const data2 ={
            idAlumno: id,
            idClase: idClase,
            horario: horario ,
            telefono: telefono,
            mensaje: mensaje
        }

        fetch(`http://localhost:3001/clases/solicitar`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(data2),
            })
        .then((response) => response.json())
        .then((data) => console.log(data))

        setOpenContratar(false);
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
            <div className="cabecera-clase">
                <div className="titulo-clase"><h3>{Nombre}</h3></div>
                <div className="costo-clase"><ion-icon name="pricetag-outline"></ion-icon><h6>{Costo}</h6></div>
            </div>
            <div className="descripcion-clase">
                <h6>{Descripcion}</h6>
            </div>
            <div className="detalles-clase">
                <div className="materia-clase"><ion-icon name="book-outline"></ion-icon><h6>{Materia}</h6></div>
                <div className="profesor-clase"><ion-icon name="person-outline"></ion-icon><h6><a onClick={handleClickOpenDescripcion('paper')}>{Profesor}</a></h6></div>
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
                <div className="horario-clase-disp"><ion-icon name="time-outline"></ion-icon><h6>{Horario}</h6></div>
                <div className="tipo-clase"><ion-icon name="people-outline"></ion-icon><h6>{Tipo}</h6></div>
                <div className="frecuencia-clase"><ion-icon name="barbell-outline"></ion-icon><h6>{Frecuencia}</h6></div>
                <div className="calificacion-clase"><Rating name="read-only" value={Calificacion} readOnly size="small" style={{color:"black"}} /></div>
            </div>
            <div className="footer-clase-disp">
                    <div className="caja-btn-contratar">
                        <button className="btn-contratar" onClick={handleClickOpenContratar}>CONTRATAR</button>
                        <Dialog open={openContratar} onClose={handleCloseContratar}>
                        <DialogTitle>Contratar clase</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Inserte los siguientes datos para contratar la clase {Nombre}
                            </DialogContentText>
                            <TextField autoFocus margin="dense" id="name" label="Telefono" type="telefono" fullWidth variant="standard" onChange={handleChangeTelefono}/>
                            <TextField autoFocus margin="dense" id="name" label="Mail" type="mail" fullWidth variant="standard"/>
                            <TextField autoFocus margin="dense" id="name" label="Horario de referencia para el contacto" type="horario" fullWidth variant="standard" onChange={handleChangeHorario}/>
                            <TextField autoFocus margin="dense" id="name" label="Mensaje al profesor" type="comentario" fullWidth variant="standard" onChange={handleChangeMensaje}/>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleCloseContratarConfirmar}>Contratar</Button>
                            <Button onClick={handleCloseContratar}>Cancelar</Button>
                        </DialogActions>
                    </Dialog>
                    </div>
                    <div className="caja-icono-comentarios">
                    <div className="comentarios-clase-disp"><Link to="/comentariosAlumno" style={{color:"black"}}><ion-icon name="chatbox-outline"></ion-icon></Link></div>
                    </div>
            </div>
        </div>
    )
}

export default ClaseDisponible;