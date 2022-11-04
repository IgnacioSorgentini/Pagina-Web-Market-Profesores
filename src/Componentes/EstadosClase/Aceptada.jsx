import React from "react";
import Chip from '@mui/material/Chip';
import DoneIcon from '@mui/icons-material/Done';

function Aceptada() {
    return(  
        <Chip color="succes" icon={<DoneIcon />} label="Aceptada" size="small" />
    )
}

export default Aceptada;