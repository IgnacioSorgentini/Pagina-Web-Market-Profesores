import React from "react";
import Chip from '@mui/material/Chip';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function Solicitada(estado) {
    return(  
        <Chip color="warning" icon={<AccessTimeIcon />} label={estado} size="small" />
    )
}

export default Solicitada;