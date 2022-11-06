import React from "react";
import '../Hojas-de-estilo/Contratacion.css'
import Chip from '@mui/material/Chip';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';



const options = [
    'Solicitada',
    'Aceptada',
    'Finalizada',
    'Cancelada',
  ];
  
  function ConfirmationDialogRaw(props) {
    const { onClose, value: valueProp, open, ...other } = props;
    const [value, setValue] = React.useState(valueProp);
    const radioGroupRef = React.useRef(null);
  
    React.useEffect(() => {
      if (!open) {
        setValue(valueProp);
      }
    }, [valueProp, open]);
  
    const handleEntering = () => {
      if (radioGroupRef.current != null) {
        radioGroupRef.current.focus();
      }
    };
  
    const handleCancel = () => {
      onClose();
    };
  
    const handleOk = () => {
      onClose(value);
    };
  
    const handleChange = (event) => {
      setValue(event.target.value);
    };
  
    return (
      <Dialog
        sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
        maxWidth="xs"
        TransitionProps={{ onEntering: handleEntering }}
        open={open}
        {...other}
      >
        <DialogTitle>Estados</DialogTitle>
        <DialogContent dividers>
          <RadioGroup
            ref={radioGroupRef}
            aria-label="estadoClase"
            name="estadoClase"
            value={value}
            onChange={handleChange}
          >
            {options.map((option) => (
              <FormControlLabel
                value={option}
                key={option}
                control={<Radio />}
                label={option}
              />
            ))}
          </RadioGroup>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleCancel}>
            Cancel
          </Button>
          <Button onClick={handleOk}>Ok</Button>
        </DialogActions>
      </Dialog>
    );
  }
  
  ConfirmationDialogRaw.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    value: PropTypes.string.isRequired,
  };


// Esta es la única función que se exporta
function Contratacion ({Clase, Alumno, Telefono, Mail, HorarioRef, Mensaje}) {
    
    const [openCambiar, setOpenCambiar] = React.useState(false);
    const [value, setValue] = React.useState('Dione');
    const handleClickListItem = () => {
        setOpenCambiar(true);
      };
      const handleCloseCambiar = (newValue) => {
        setOpenCambiar(false);
    
        if (newValue) {
          setValue(newValue);
        }
      };
    
    
    
    
    const [openEliminar, setOpenEliminar] = React.useState(false);
    const handleClickOpenEliminar = () => {
        setOpenEliminar(true);
    };
    const handleCloseEliminar = () => {
        setOpenEliminar(false);
    };
    
    
    return(
        <div className="contenedor-contratacion">
            <div className="datos-contratacion">
                <div className="clase-contratada">
                    <div className="nombre-clase-contratada"><h4 style={{color:"#E6E6E6"}}>{Clase}</h4></div>
                    <div className="estado-clase-contratada" style={{display:"flex", alignItems:"center"}}> <Chip color="warning" size="small" icon={<AccessTimeIcon />} label="Pendiente" /></div>
                </div>
                <div className="detalles-contratacion">
                    <div className="alumno-contratador">
                        <h6>Nombre del interesado: {Alumno}</h6>
                    </div>
                    <div className="telefono-contratador">
                        <h6>Numero de telefono: {Telefono}</h6>
                    </div>
                    <div className="mail-contratador">
                        <h6>Direccion de correo: {Mail}</h6>
                    </div>
                    <div className="hora-ref-contratador">
                        <h6>Horario de referencia para el contacto: {HorarioRef}</h6>
                    </div>
                </div>
                <div className="mensaje-contratador">
                    <h5 style={{paddingLeft:"10px"}}>Mensaje</h5>
                    <hr/>
                    <h6 style={{paddingLeft:"10px"}}>{Mensaje}</h6>
                </div>
            </div>
            <div className="acciones-contratacion">
                <div className="boton-cambiar-estado-contratacion">
                    <button type="button" class="btn btn-outline-primary btn-sm" onClick={handleClickListItem}>CAMBIAR ESTADO</button>
                    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: '#14279B' }}>
                        <List component="div" role="group">
                            <ConfirmationDialogRaw
                                id="estadosClase-menu"
                                keepMounted
                                open={openCambiar}
                                onClose={handleCloseCambiar}
                                value={value}
                            />
                        </List>
                    </Box>
                </div>
                <div className="boton-eliminar-contratacion">
                    <button type="button" class="btn btn-outline-primary btn-sm" onClick={handleClickOpenEliminar}>ELIMINAR</button>
                    <Dialog
                        open={openEliminar}
                        onClose={handleCloseEliminar}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">
                            {"Eliminar contratacion"}
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                ¿Seguro que desea eliminar la contratacion de {Alumno} ?
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleCloseEliminar}>
                                Disagree
                            </Button>
                            <Button onClick={handleCloseEliminar} autoFocus>
                                Agree
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
            </div>
        </div>

    )
}

export default Contratacion;