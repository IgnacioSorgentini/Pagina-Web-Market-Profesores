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
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Switch from '@mui/material/Switch';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FilledInput from '@mui/material/FilledInput';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { OutlinedInput } from "@mui/material";
import { useLocation } from 'react-router-dom';

function ClaseCreada({Nombre, Descripcion, Materia, Duracion, Tipo, Frecuencia, Precio, Publicada, id, recarga, setRecarga}) {
    
    const location = useLocation()
    const { from } = location.state
    
    const [openEliminar, setOpenEliminar] = React.useState(false);

    const handleClickOpenEliminar = () => {
        setOpenEliminar(true);
    };
    const handleCloseEliminar = () => {
        setOpenEliminar(false);
    };

    const handleCloseEliminarConfirmar = () => {

        fetch(`http://localhost:3001/clases/delete/${id}`, {
            method: 'DELETE', 
            headers: {
            'Content-Type': 'application/json',
            }
            })
        .then((response) => response.json())
        .then((data)=> console.log(data))

        setRecarga(60);

        setOpenEliminar(false);
    };

    const handleCloseEliminarCancelar = () => {
        setOpenEliminar(false);
    };

    const [openEditar, setOpenEditar] = React.useState(false);
    const handleClickOpenEditar = () => {
        setOpenEditar(true);
    };
    const handleCloseEditarGuardar = () => {
        const data2 ={
            nombre: nombre,
            descripcion: descripcion,
            materia: materia,
            duracion: valuesHora,
            frecuencia: frecuencia,
            costo: valuesPrecio.amount,
        }

        fetch(`http://localhost:3001/clases/actualizar/${id}`, {
            method: 'PATCH', 
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(data2),
            })
        .then((response) => response.json())
        .then((data)=> console.log(data))

        setRecarga(40);
        setOpenEditar(false);
    };

    const handleCloseEditarCancelar = () => {
        setOpenEditar(false);
    }


    
    const [buttonPopupEditar, setButtonPopupEditar] = useState(false);
    const [buttonPopupPublicar, setButtonPopupPublicar] = useState(false);
    const [buttonPopupDespublicar, setButtonPopupDespublicar] = useState(false);


    const [publicar, setCheckedPublicar] = React.useState(false);
    const handleChangeCheckedPublicar = (event) => {
        setCheckedPublicar(event.target.checked);
    };


    const [costo, setCosto] = React.useState(0)


    const [valuesPrecio, setValuesPrecio] = React.useState({
        amount: `${Precio}`,
      });
    const handleChangePrecio = (prop) => (event) => {
    setValuesPrecio({ ...valuesPrecio, [prop]: event.target.value });
    setCosto(event.target.value)
    };
    
    const [valuesHora, setValuesHora] = React.useState(Duracion);
    const handleChangeHora  = (event) => {
    setValuesHora(event.target.value);
    };
    const [materia, setMateria] = React.useState(Materia);
    const handleChangeMateria = (event) => {
        setMateria(event.target.value);
    };
    const [frecuencia, setFrecuencia] = React.useState(Frecuencia);
    const handleChangeFrecuencia = (event) => {
        setFrecuencia(event.target.value);
    };

    const [clase, setClase] = React.useState(Tipo);
    
    const handleChangeClase = (event) => {
        setClase(event.target.value);
    };

    const [nombre, setNombre] = React.useState(Nombre);
    const handleChangeNombre = (event) => {
        setNombre(event.target.value);
    };

    const [descripcion, setDescripcion] = React.useState(Descripcion);
    const handleChangeDescripcion = (event) => {
        setDescripcion(event.target.value);
    };






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
                <div className="frecuencia-clase"><h6 className="publicada">{Publicada}</h6></div>
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
                            <Button onClick={handleCloseEliminarConfirmar}>
                                Confirmar
                            </Button>
                            <Button onClick={handleCloseEliminarCancelar} autoFocus>
                                Cancelar
                            </Button>
                        </DialogActions>
                    </Dialog>
                    <Tooltip title="Editar"><button onClick={handleClickOpenEditar}><ion-icon name="build-outline"></ion-icon></button></Tooltip>
                        <Dialog open={openEditar} onClose={handleCloseEditarCancelar} maxWidth={"lg"} fullWidth>
                            <DialogTitle>Editar clase</DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    Cambie aquí debajo las caracteristicas de la clase {Nombre} que desee.
                                </DialogContentText>
                                <List>
                            <ListItem>
                            <TextField id="filled-basic" label="Titulo de la clase" variant="filled" fullWidth defaultValue={Nombre}  onChange={handleChangeNombre} />
                            </ListItem>
                            <ListItem>
                                <TextField id="filled-basic" label="Descripcion de la clase" variant="filled" fullWidth defaultValue={Descripcion}  onChange={handleChangeDescripcion}/>
                            </ListItem>
                            <ListItem>
                                <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                                    <InputLabel htmlFor="filled-adornment-amount">Amount</InputLabel>
                                        <FilledInput
                                            id="filled-adornment-amount"
                                            value={valuesPrecio.amount}
                                            onChange={handleChangePrecio('amount')}
                                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                        />
                                </FormControl>
                            </ListItem>
                            <ListItem>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Materia</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={materia}
                                        label="Materia"
                                        onChange={handleChangeMateria}
                                    >
                                        <MenuItem value={"Matematica"}>Matematica</MenuItem>
                                        <MenuItem value={"Biologia"}>Biologia</MenuItem>
                                        <MenuItem value={"Geografia"}>Geografia</MenuItem>
                                    </Select>
                                </FormControl>
                            </ListItem>
                            <ListItem>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Frecuencia</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={frecuencia}
                                        label="Frecuencia"
                                        onChange={handleChangeFrecuencia}
                                    >
                                        <MenuItem value={"Una vez"}>Una vez</MenuItem>
                                        <MenuItem value={"Semanal"}>Semanal</MenuItem>
                                        <MenuItem value={"Mensual"}>Mensual</MenuItem>
                                    </Select>
                                </FormControl>
                            </ListItem>
                            <ListItem>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Tipo de clase</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={clase}
                                        label="Tipo de clase"
                                        onChange={handleChangeClase}
                                    >
                                        <MenuItem value={"Individual"}>Individual</MenuItem>
                                        <MenuItem value={"Grupal"}>Grupal</MenuItem>
                                    </Select>
                                </FormControl>
                            </ListItem>
                            <ListItem>
                                <FormControl fullWidth sx={{ m: 1}} variant="outlined">
                                    <OutlinedInput
                                        id="outlined-adornment-weight"
                                        value={valuesHora}
                                        onChange={handleChangeHora}
                                        endAdornment={<InputAdornment position="end">Hora/s</InputAdornment>}
                                        aria-describedby="outlined-weight-helper-text"
                                        inputProps={{
                                            'aria-label': 'weight',
                                        }}
                                    />
                                        <FormHelperText id="outlined-weight-helper-text">Tiempo</FormHelperText>
                                    </FormControl>
                            </ListItem>
                        </List>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleCloseEditarGuardar}>Guardar cambios</Button>
                                <Button onClick={handleCloseEditarCancelar}>Cancelar cambios</Button>
                            </DialogActions>
                        </Dialog>
                    <button onClick={() => setButtonPopupPublicar(true)}><ion-icon name="arrow-up-circle-outline"></ion-icon></button>
                    <button onClick={() => setButtonPopupDespublicar(true)}><ion-icon name="arrow-down-circle-outline"></ion-icon></button>
                    <Switch
                        checked={publicar}
                        onChange={handleChangeCheckedPublicar}
                        inputProps={{ 'aria-label': 'controlled' }}
                        size="small"
                        color="default"
                    />
                </div>
                <div className="comentarios-clase-creada">     
                    <Tooltip title="Comentarios"><Link to="/comentariosProfesor" state={{id:location.state.id, nombre:location.state.nombre,idclase:id}} ><button><ion-icon name="chatbubble-outline"></ion-icon></button></Link></Tooltip>
                </div>
            </div>
            <PopupWindowPublicar trigger={buttonPopupPublicar} setTrigger={setButtonPopupPublicar} id={id} recarga={recarga} setRecarga={setRecarga}>
            </PopupWindowPublicar>
            <PopupWindowDespublicar trigger={buttonPopupDespublicar} setTrigger={setButtonPopupDespublicar} id={id} recarga={recarga} setRecarga={setRecarga}>
            </PopupWindowDespublicar>
            <PopupEditarClase trigger={buttonPopupEditar} setTrigger={setButtonPopupEditar} Descripcion={Descripcion} Precio={Precio} Materia={Materia} Duracion={Duracion} Frecuencia={Frecuencia} Tipo={Tipo} id={id} recarga={recarga} setRecarga={setRecarga} Nombre={Nombre}/>
        </div>
    )
}

export default ClaseCreada;