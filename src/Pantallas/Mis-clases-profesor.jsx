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


function MisClasesProfesor ({id}) {
    const [recarga, setRecarga] = React.useState(0);
    const [buttonPopup, setButtonPopup] = useState(false);

    
    
    const [openCrear, setOpenCrear] = React.useState(false);
    const handleClickOpenCrear = () => {
        setOpenCrear(true);
    };
    const handleCloseCrear = () => {
        crearClase()
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
        if (clase === "Individual"){
            handleChangeIsGrupal(false);
        }
        else{
            handleChangeIsGrupal(true);
        }
    };




    const [profesor, setProfesor] = React.useState('');
    const [nombre, setNombre] = React.useState('');
    const [descripcion, setDescripcion] = React.useState('');
    const [asignatura, setAsignatura] = React.useState('');
    const [duracion, setDuracion] = React.useState('');
    const [frequency, setFrequency] = React.useState('');
    const [costo, setcosto] = React.useState(0);
    const [valoracion, setValoracion] = React.useState(0);
    const [comentarios, setComentarios] = React.useState([{comentario: '', isVisible: false}]);
    const [calificaciones, setCalificaciones] = React.useState([{valor: 0}]);
    const [isPublicada, setIsPublicada] = React.useState(false);
    const [isGrupal, setIsGrupal] = React.useState(false);
    const[listaClases, setListaClases] = React.useState([]);

    React.useEffect(()=>{
        fetch(`http://localhost:3001/users/${id}`)

       
       .then((response) => response.json())
       .then((data) => {
           setProfesor(data.nombre)
       })
       const data = {profesor: profesor}
       fetch(`http://localhost:3001/clases/by_profesor`, {
        method: 'POST', 
        headers: {
        'Content-Type': 'application/json',
        },
       body: JSON.stringify(data)})
       .then((response) => response.json())
        .then((response) => {
            var lista = []
            for (var i in response){
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
                   

                ) 
            }
            console.log(lista)
            setListaClases(lista)
            
       })
       setRecarga(1)
    },[recarga]);

       


    function handleChangeNombre(e){
        setNombre(e.target.value);
    }
    function handleChangeDescripcion(e){
        setDescripcion(e.target.value);
    }
    function handleChangeAsignatura(e){
        setAsignatura(e.target.value);
    }
    function handleChangeDuracion(e){
        setDuracion(e.target.value);
    }
    function handleChangeFrequency(e){
        setFrequency(e.target.value);
    }
    function handleChangeCosto(e){
        setcosto(e.target.value);
    }
    function handleChangeIsGrupal(e){
        setIsGrupal(e.target.value);
    }

    function crearClase(){
        console.log(profesor)
        const data2 ={
            profesor: profesor,
            nombre: nombre,
            descripcion: descripcion,
            materia: materia,
            duracion: duracion,
            frecuencia: frecuencia,
            costo: valuesPrecio.amount,
            valoracion: valoracion,
            comentarios: comentarios,
            calificaciones: calificaciones,
            publica: isPublicada,
            grupal: isGrupal
        }

        fetch('http://localhost:3001/clases/create', {
            method: 'POST', 
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(data2),
            })
        .then((response) => response.json())
    }





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
                            <TextField id="filled-basic" label="Titulo de la clase" variant="filled" fullWidth onChange={handleChangeNombre}/>
                            </ListItem>
                            <ListItem>
                                <TextField id="filled-basic" label="Descripcion de la clase" variant="filled" fullWidth onChange={handleChangeDescripcion}/>
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
                                        value={valuesHora.weight}
                                        onChange={handleChangeDuracion}
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
            {
                    listaClases.map((clase) =>{
                        return( <ClaseCreada Nombre={clase.nombre}  Descripcion={clase.descripcion} Materia={clase.materia} Duracion={clase.duracion} Tipo={clase.tipo} Frecuencia={clase.frecuencia} Precio={clase.costo}/>)
                    })
                }

            </div>
            <PopupNuevaClase trigger={buttonPopup} setTrigger={setButtonPopup}>
            </PopupNuevaClase>
        </div>
       </div>
    )
}

export default MisClasesProfesor;