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

    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClickNotificaciones = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleCloseNotificaciones = () => {
      setAnchorEl(null);
    };
    const openNotificaciones = Boolean(anchorEl);
    const id = openNotificaciones ? 'simple-popover' : undefined;
    

    const [count, setCount] = React.useState(0);
    const [invisible, setInvisible] = React.useState(false);
    const handleBadgeVisibility = () => {
        setInvisible(!invisible);
    };
   console.log(location.state)

   let iduser = 0
   if (typeof(location.state) == "object"){
        iduser = location.state.id
   }
   else{
    iduser = location.state
   }

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
                    <Typography sx={{ p: 2 }}>Acá van las notificaciones</Typography>
                </Popover>
            </div>
        </div>
    )
}

export default MenuAlumno;