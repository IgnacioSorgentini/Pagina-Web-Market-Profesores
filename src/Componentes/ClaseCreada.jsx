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


    const [publicar, setCheckedPublicar] = React.useState(false);
    const handleChangeCheckedPublicar = (event) => {
        setCheckedPublicar(event.target.checked);
    };





    const [valuesPrecio, setValuesPrecio] = React.useState({
        amount: `${Precio}`,
      });
    const handleChangePrecio = (prop) => (event) => {
    setValuesPrecio({ ...valuesPrecio, [prop]: event.target.value });
    };
    const [valuesHora, setValuesHora] = React.useState({
        hora: '',
      });
    const handleChangeHora = (prop) => (event) => {
    setValuesHora({ ...valuesHora, [prop]: event.target.value });
    };
    const [materia, setMateria] = React.useState('');
    const handleChangeMateria = (event) => {
        setMateria(event.target.value);
    };
    const [frecuencia, setFrecuencia] = React.useState('');
    const handleChangeFrecuencia = (event) => {
        setFrecuencia(event.target.value);
    };

    const [clase, setClase] = React.useState('');
    const handleChangeClase = (event) => {
        setClase(event.target.value);
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
                                <List>
                            <ListItem>
                            <TextField id="filled-basic" label="Titulo de la clase" variant="filled" fullWidth defaultValue={Nombre}/>
                            </ListItem>
                            <ListItem>
                                <TextField id="filled-basic" label="Descripcion de la clase" variant="filled" fullWidth defaultValue={Descripcion}/>
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
                                        <MenuItem value={10}>Matematica</MenuItem>
                                        <MenuItem value={20}>Biologia</MenuItem>
                                        <MenuItem value={30}>Geografia</MenuItem>
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
                                        <MenuItem value={10}>Una vez</MenuItem>
                                        <MenuItem value={20}>Semanal</MenuItem>
                                        <MenuItem value={30}>Mensual</MenuItem>
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
                                        <MenuItem value={10}>Individual</MenuItem>
                                        <MenuItem value={20}>Grupal</MenuItem>
                                    </Select>
                                </FormControl>
                            </ListItem>
                            <ListItem>
                                <FormControl fullWidth sx={{ m: 1}} variant="outlined">
                                    <OutlinedInput
                                        id="outlined-adornment-weight"
                                        value={valuesHora.weight}
                                        onChange={handleChangeHora('hora')}
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
                                <Button onClick={handleCloseEditar}>Guardar cambios</Button>
                                <Button onClick={handleCloseEditar}>Cancelar cambios</Button>
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