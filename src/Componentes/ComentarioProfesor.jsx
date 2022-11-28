import React from "react";
import Avatar from '@mui/material/Avatar';
import '../Hojas-de-estilo/ComentarioProfesor.css';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function ComentarioProfesor ({Nombre, Comentario, Id, setRecarga, NombreProfesor, IdClase}) {

    const [openBloquear, setOpenBloquear] = React.useState(false);
    const [openAceptar, setOpenAceptar] = React.useState(false);
    const [openDescargo, setOpenDescargo] = React.useState(false);
    const [descargo, setDescargo] = React.useState("")
    const [recarga2, setRecarga2] = React.useState(0)
    const [nombreClase, setNombreClase] = React.useState("")
    const [idUsuario, setIdUsuario] = React.useState(-1)

    React.useEffect(()=>{
        fetch(`http://localhost:3001/clases/by_id/${IdClase}`) 
       .then((response) => response.json())
       .then((data) => {
           setNombreClase(data[0].nombre)     
       })

       fetch(`http://localhost:3001/users/nombre/${Nombre}`)
       .then((response) => response.json())
       .then((data) => {
           setIdUsuario(data._id)  
       })

       setRecarga2(1)
   },[recarga2]);

    const handleClickOpenBloquear = () => {
        setOpenBloquear(true);
    };

    const handleCloseBloquear = () => {
        setOpenBloquear(false);
    };

    const handleCloseAceptarConfirmar = () => {
        fetch(`http://localhost:3001/clases/aceptarComentario/${Id}/`, {
            method: 'PATCH'
            })
        .then((response) => response.json())
        .then((response) => console.log(response))
        setRecarga(102)
        setOpenAceptar(false);
    };

    const handleClickOpenAceptar = () => {
        setOpenAceptar(true);
    };

    const handleCloseAceptar = () => {
        setOpenAceptar(false);
    };

    const handleCloseDescargoConfirmar = () => {
        const data = {descargo: descargo}
        const data2 = {idAlumno: idUsuario, nombreClase: nombreClase,  descargo: descargo,nombreProfesor: NombreProfesor}
        fetch(`http://localhost:3001/clases/rechazarComentario/${Id}/`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                },
            body: JSON.stringify(data),
            })
        .then((response) => response.json())
        .then((response) => console.log(response))

        fetch(`http://localhost:3001/clases/crearNotificacion/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                },
            body: JSON.stringify(data2),
            })
        .then((response) => response.json())
        .then((response) => console.log(response))

        setRecarga(101)
        setOpenDescargo(false);
    };

    const handleClickOpenDescargo = () => {
        setOpenDescargo(true);
        setOpenBloquear(false);
    };

    const handleCloseDescargo = () => {
        setOpenDescargo(false);
    };

    const handleDescargoChange = (event) => {
        setDescargo(event.target.value)
    };

    
    function stringToColor(string) {
        let hash = 0;
        let i;
      
        /* eslint-disable no-bitwise */
        for (i = 0; i < string.length; i += 1) {
          hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }
      
        let color = '#';
      
        for (i = 0; i < 3; i += 1) {
          const value = (hash >> (i * 8)) & 0xff;
          color += `00${value.toString(16)}`.slice(-2);
        }
        /* eslint-enable no-bitwise */
      
        return color;
    }
      
    function stringAvatar(name) {
        return {
          sx: {
            bgcolor: stringToColor(name),
          },
          children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
        };
    }
    
    return(
        <div className="contenedor-comentario-profesor">
            <div className="lado-izquierdo-comentario">
                <div className="nombre-comentador">
                    <div className="avatar-comentador">
                        <Avatar {...stringAvatar(`${Nombre}`)} sx={{ width: 34, height: 34 }} />
                    </div>
                    <div style={{display:"flex", alignItems:"center"}}>
                        <h4 style={{color:"#E6E6E6"}}>{Nombre}</h4>
                    </div>
                </div>
                <div className="texto-comentario">
                    <p>{Comentario}</p>
                </div>
            </div>
            <div className="lado-derecho-comentario">
                <button type="button" className="btn btn-bloquear btn-sm btn-primary" onClick={handleClickOpenBloquear}><ion-icon name="close-circle-outline"></ion-icon>BLOQUEAR</button>
                <Dialog
                    open={openBloquear}
                    onClose={handleCloseBloquear}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Bloquear Comentario"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Usted está a punto de bloquear un comentario escrito por el usuario {Nombre}. ¿Está seguro que desea hacerlo?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClickOpenDescargo}>
                            Confirmar
                        </Button>
                        <Button onClick={handleCloseBloquear} autoFocus>
                            Cancelar
                        </Button>
                    </DialogActions>
                </Dialog>
                <Dialog
                    open={openDescargo}
                    onClose={handleCloseDescargo}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Descargo"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Antes de bloquear el comentario, escriba debajo el descargo explicando la razon del bloqueo.
                        </DialogContentText>
                        <TextField
                        autoFocus
                        margin="dense"
                        id="descargo"
                        label="Descargo"
                        type="email"
                        fullWidth
                        variant="standard"
                        onChange={handleDescargoChange}
                    />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseDescargoConfirmar}>
                            Bloquear comentario
                        </Button>
                        <Button onClick={handleCloseDescargo} autoFocus>
                            Cancelar
                        </Button>
                    </DialogActions>
                </Dialog>
                <button type="button" className="btn btn-sm btn-primary" onClick={handleClickOpenAceptar}><ion-icon name="checkmark-circle-outline"></ion-icon>ACEPTAR</button>
                <Dialog
                    open={openAceptar}
                    onClose={handleCloseAceptar}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Aceptar comentario"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Usted está a punto de aceptar un comentario escrito por el usuario {Nombre}. Dicho comentario será visible para todos los usuarios. ¿Está seguro que desea hacerlo?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseAceptarConfirmar}>
                            Confirmar
                        </Button>
                        <Button onClick={handleCloseAceptar} autoFocus>
                            Cancelar
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    )
    }

export default ComentarioProfesor;