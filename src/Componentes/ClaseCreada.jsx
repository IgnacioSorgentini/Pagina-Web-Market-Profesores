import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import PopupEditarClase from '../Componentes/PopupWindowEditar';
import '../Hojas-de-estilo/ClaseGeneral.css';
import '../Hojas-de-estilo/ClaseCreada.css';
import PopupWindowPublicar from '../Componentes/PopupWindowPublicar';
import PopupWindowDespublicar from '../Componentes/PopupWindowDespublicar';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Tooltip from '@mui/material/Tooltip';
import TextField from '@mui/material/TextField';

function ClaseCreada({Nombre, Descripcion, Materia, Duracion, Tipo, Frecuencia, Precio}) {
    
    
    const [openEliminar, setOpenEliminar] = React.useState(false);
    const handleClickOpenEliminar = () => {
        setOpenEliminar(true);
    };
    const handleCloseEliminar = () => {
        setOpenEliminar(false);
    };


    const [openEditar, setOpenEditar] = React.useState(false);
    const handleClickOpenEditar = () => {
        setOpenEditar(true);
    };
    const handleCloseEditar = () => {
        setOpenEditar(false);
    };


    
    const [buttonPopupEditar, setButtonPopupEditar] = useState(false);
    const [buttonPopupPublicar, setButtonPopupPublicar] = useState(false);
    const [buttonPopupDespublicar, setButtonPopupDespublicar] = useState(false);

    return(
        <div className="contenedor-clase">
            <div className="cabecera-clase">
                <div className="titulo-clase">
                    <h3>{Nombre}</h3>
                </div>
                <div className="precio-clase">
                    <ion-icon name="pricetag-outline"></ion-icon><h6>{Precio}</h6>
                </div>
            </div>
            <div className="descripcion-clase">
                <h6>{Descripcion}</h6>
            </div>
            <div className="detalles-clase">
                <div className="materia-clase"><ion-icon name="book-outline"></ion-icon><h6>{Materia}</h6></div>
                <div className="dia-clase"><ion-icon name="time-outline"></ion-icon><h6>{Duracion}</h6></div>
                <div className="horario-clase-cont"><ion-icon name="people-outline"></ion-icon><h6>{Tipo}</h6></div>
                <div className="frecuencia-clase"><ion-icon name="barbell-outline"></ion-icon><h6>{Frecuencia}</h6></div>
            </div>
            <div className="pie-de-clase">
                <div className="botones-clase-creada">
                    <Tooltip title="Eliminar"><button><ion-icon name="trash-outline" onClick={handleClickOpenEliminar}></ion-icon></button></Tooltip>
                    <Dialog
                        open={openEliminar}
                        onClose={handleCloseEliminar}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">
                            {"Eliminar clase"}
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                ¿Está seguro que desea eliminar la clase {Nombre} ?
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleCloseEliminar}>
                                Confirmar
                            </Button>
                            <Button onClick={handleCloseEliminar} autoFocus>
                                Cancelar
                            </Button>
                        </DialogActions>
                    </Dialog>
                    <Tooltip title="Editar"><button onClick={handleClickOpenEditar}><ion-icon name="build-outline"></ion-icon></button></Tooltip>
                        <Dialog open={openEditar} onClose={handleCloseEditar} maxWidth={"lg"} fullWidth>
                            <DialogTitle>Editar clase</DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    Cambie aquí debajo las caracteristicas de la clase {Nombre} que desee.
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleCloseEditar}>Guardar cambios</Button>
                                <Button onClick={handleCloseEditar}>Cancelar cambios</Button>
                            </DialogActions>
                        </Dialog>
                    <button onClick={() => setButtonPopupPublicar(true)}><ion-icon name="arrow-up-circle-outline"></ion-icon></button>
                    <button onClick={() => setButtonPopupDespublicar(true)}><ion-icon name="arrow-down-circle-outline"></ion-icon></button>
                </div>
                <div className="comentarios-clase-creada">
                    <Tooltip title="Comentarios"><Link to="/comentariosProfesor"><button><ion-icon name="chatbubble-outline"></ion-icon></button></Link></Tooltip>
                </div>
            </div>
            <PopupWindowPublicar trigger={buttonPopupPublicar} setTrigger={setButtonPopupPublicar}>
            </PopupWindowPublicar>
            <PopupWindowDespublicar trigger={buttonPopupDespublicar} setTrigger={setButtonPopupDespublicar}>
            </PopupWindowDespublicar>
            <PopupEditarClase trigger={buttonPopupEditar} setTrigger={setButtonPopupEditar} Descripcion={Descripcion} Precio={Precio} Materia={Materia} Duracion={Duracion} Frecuencia={Frecuencia}/>
        </div>
    )
}

export default ClaseCreada;