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

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
};
const materias = [
    'Matematica',
    'Geografia',
    'Quimica',
    'Politica',
  ];
  function getStyles(name, materiaName, theme) {
    return {
      fontWeight:
        materiaName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }
  

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
    
    

    const theme = useTheme();
    const [materiaName, setMateriaName] = React.useState([]);

    const handleChangeMateria = (event) => {
        const {
        target: { value },
        } = event;
        setMateriaName(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
        );
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
                            <Divider />
                            <ListItem>
                                <TextField id="filled-basic" label="Descripcion de la clase" variant="filled" fullWidth/>
                            </ListItem>
                            <Divider />
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
                            <FormControl sx={{ m: 1, width: 300 }}>
                                <InputLabel id="demo-multiple-name-label">Materia</InputLabel>
                                <Select
                                    labelId="demo-multiple-name-label"
                                    id="demo-multiple-name"
                                    multiple
                                    value={materiaName}
                                    onChange={handleChangeMateria}
                                    input={<OutlinedInput label="Name" />}
                                    MenuProps={MenuProps}
                                    >
                                        {materias.map((name) => (
                                            <MenuItem
                                                key={name}
                                                value={name}
                                                style={getStyles(name, materiaName, theme)}
                                            >
                                                {name}
                                            </MenuItem>
                                        ))}
                                </Select>
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