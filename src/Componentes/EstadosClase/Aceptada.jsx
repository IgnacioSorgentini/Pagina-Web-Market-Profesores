import React from "react";
import Chip from '@mui/material/Chip';
import DoneIcon from '@mui/icons-material/Done';
import {Link} from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from "@mui/material";
import Tooltip from '@mui/material/Tooltip';

function Aceptada(){
    
    const [open, setOpen] = React.useState(false);
        const handleClickOpen = () => {
            setOpen(true);
        };
        const handleClose = () => {
            setOpen(false);
        };
    
    return(
        <div style={{cursor:"pointer"}}>
            <Tooltip title="Cambiar estado"><Button onClick={handleClickOpen}><Chip color="success" icon={<DoneIcon />} label="Aceptada" size="small" /></Button></Tooltip>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Cambiar Estado</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        La clase se encuentra Aceptada. ¿Desea cambiar el estado a Finalizada?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cambiar a Finalizada</Button>
                    <Button onClick={handleClose}>Cancelar</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default Aceptada;