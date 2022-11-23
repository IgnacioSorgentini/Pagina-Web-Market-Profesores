import React from "react";
import Chip from '@mui/material/Chip';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import {Link} from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from "@mui/material";
import Tooltip from '@mui/material/Tooltip';

function Solicitada() {
    
    const [open, setOpen] = React.useState(false);
        const handleClickOpen = () => {
            setOpen(true);
        };
        const handleClose = () => {
            setOpen(false);
        };
    
    
    return(  
        <div>
            <Tooltip title="Cambiar estado"><Link style={{textDecoration:"none"}} onClick={handleClickOpen}><Chip color="warning" icon={<AccessTimeIcon />} label="Solicitada" size="small" /></Link></Tooltip>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Cambiar Estado</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        La clase se encuentra Solicitada. ¿Desea cambiar el estado a Cancelada?
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

export default Solicitada;