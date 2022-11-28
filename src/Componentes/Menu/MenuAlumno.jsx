import React, { forwardRef } from "react";
import { Link } from "react-router-dom";
import './Menu.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import { useLocation } from 'react-router-dom';

function MenuAlumno(){

    
    
    const location = useLocation()
    const { from } = location.state
    const [recarga3, setRecarga3] = React.useState(0)
    const [listaNotificaciones, setListaNotificaciones] = React.useState([])

    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClickNotificaciones = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleCloseNotificaciones = () => {
      setAnchorEl(null);
      {listaNotificaciones.map((n) => 
        fetch(`http://localhost:3001/clases/abrirNotificacion/${n._id}/`, {
            method: 'PATCH'
            })
        .then((response) => response.json())
        .then((response) => console.log(response))

        )}
        setRecarga3(100)
    };
    const openNotificaciones = Boolean(anchorEl);
    const id = openNotificaciones ? 'simple-popover' : undefined;
    

    const [count, setCount] = React.useState(0);
    const [invisible, setInvisible] = React.useState(false);
    const handleBadgeVisibility = () => {
        setInvisible(!invisible);
    };

   let iduser = 0
   if (typeof(location.state) == "object"){
        iduser = location.state.id
   }
   else{
    iduser = location.state
   }

   React.useEffect(()=>{
    fetch(`http://localhost:3001/clases/notificaciones/${iduser}`) 
    .then((response) => response.json())
    .then((response) => {
        var lista = []
        for (var i in response){
         if (response[i].isAbierta==false){
                lista.push({
                    "_id": response[i]._id,
                    "idAlumno": response[i].idAlumno,
                    "nombreClase": response[i].nombreClase,
                    "descargo": response[i].descargo,
                    "nombreProfesor": response[i].nombreProfesor
                }
            )
             }
        }
        setListaNotificaciones(lista)
        setCount(lista.length)
    })
    console.log(listaNotificaciones)
    setRecarga3(1)
},[recarga3]);

    return(
        <div className="menu">
            <div className="titulo-menu">
                <Link to="/misClasesAlumno" style={{textDecoration:"none"}}  state={iduser} ><h1 style={{color:"#E6E6E6"}}>Cursos Online</h1></Link>
            </div>
            <div className="botones-menu">
                <Link to="/contratarClase" style={{textDecoration:"none"}}  state={iduser}  >
                    <Button variant="outlined" style={{color:"#E6E6E6", borderColor:"#E6E6E6", marginLeft:"30px"}}>Contratar clase</Button>
                </Link>
                <Link to="/misClasesAlumno" style={{textDecoration:"none"}}  state={iduser}>
                    <Button variant="outlined" style={{color:"#E6E6E6", borderColor:"#E6E6E6", marginLeft:"30px"}}>Mis clases</Button>
                </Link>
                <Link to="/" style={{textDecoration:"none"}}>
                    <Button variant="outlined" style={{color:"#E6E6E6", borderColor:"#E6E6E6", marginLeft:"30px"}}>Cerrar sesion</Button>
                </Link>
                <Button style={{color:"#E6E6E6"}} onClick={handleClickNotificaciones}><Badge badgeContent={count} color="secondary" max={99} showZero><NotificationsIcon/></Badge></Button>
                <Popover
                    id={id}
                    open={openNotificaciones}
                    anchorEl={anchorEl}
                    onClose={handleCloseNotificaciones}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                >
                    {count!=0 && listaNotificaciones.map((n) =>{
                    return <Typography sx={{ p: 2 }}> El profesor {n.nombreProfesor} bloqueó su comentario de la clase {n.nombreClase} por el siguiente motivo: {n.descargo} </Typography>
                })
            }
              {count==0 && <Typography sx={{ p: 2 }}> No hay notificaciones pendientes </Typography>
                }
                </Popover>
            </div>
        </div>
    )
}

export default MenuAlumno;