import React from "react";
import ClaseContratada from "../Componentes/ClaseContratada";
import ClaseCreada from "../Componentes/ClaseCreada";
import '../Hojas-de-estilo/Mis-clases-profesor.css';
import { useState } from "react";
import PopupNuevaClase from "../Componentes/PopupWindowNuevaClase";
import MenuProfesor from "../Componentes/Menu/MenuProfesor";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FilledInput from '@mui/material/FilledInput';
import FormControl from '@mui/material/FormControl';
import { useTheme } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


function MisClasesProfesor () {
    const [buttonPopup, setButtonPopup] = useState(false);

    
    const [openCrear, setOpenCrear] = React.useState(false);
    const handleClickOpenCrear = () => {
        setOpenCrear(true);
    };
    const handleCloseCrear = () => {
        setOpenCrear(false);
    };




    const [valuesPrecio, setValuesPrecio] = React.useState({
        amount: '',
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
       <div className="MisClasesProfesor">
        <MenuProfesor />
        <div className="contenedor-mis-clases">
            <div className="cabecera-pantalla-profesor">
                <div className="titulo-pantalla">
                    <h3 style={{color:"#334756"}}>Mis clases</h3>
                </div>
                <div className="boton-crear-clase">
                    <button type="button" className="btn btn-primary" onClick={handleClickOpenCrear} style={{color:"#E6E6E6"}}>CREAR CLASE</button>
                    <Dialog
                        fullScreen
                        open={openCrear}
                        onClose={handleCloseCrear}
                        TransitionComponent={Transition}
                    >
                        <AppBar sx={{ position: 'relative' }}>
                            <Toolbar>
                                <IconButton
                                    edge="start"
                                    color="inherit"
                                    onClick={handleCloseCrear}
                                    aria-label="close"
                                >
                                    <CloseIcon />
                                </IconButton>
                                <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                                    Crear clase
                                </Typography>
                                <Button autoFocus color="inherit" onClick={handleCloseCrear}>
                                    Guardar
                                </Button>
                            </Toolbar>
                        </AppBar>
                        <List>
                            <ListItem>
                            <TextField id="filled-basic" label="Titulo de la clase" variant="filled" fullWidth/>
                            </ListItem>
                            <ListItem>
                                <TextField id="filled-basic" label="Descripcion de la clase" variant="filled" fullWidth/>
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
                                        <MenuItem value={30}>Menual</MenuItem>
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
                    </Dialog>
                </div>
            </div>
            <div className="lista-clases">
                <ClaseCreada Nombre="Matematica A" Descripcion="Clase de matematica nivel avanzado" Materia="Matematica" Duracion="1 hora" Tipo="Individual" Frecuencia="Semanal" Precio="1230,00" />
            </div>
            <PopupNuevaClase trigger={buttonPopup} setTrigger={setButtonPopup}>
            </PopupNuevaClase>
        </div>
       </div>
    )
}

export default MisClasesProfesor;