import React from "react";
import Chip from '@mui/material/Chip';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function Solicitada() {
    return(  
        <Chip color="warning" icon={<AccessTimeIcon />} label="Solicitada" size="small" />
    )
}

export default Solicitada;