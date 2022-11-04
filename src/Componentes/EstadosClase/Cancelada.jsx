import React from "react";
import Chip from '@mui/material/Chip';
import ClearIcon from '@mui/icons-material/Clear';

function Finalizada() {
    return(  
        <Chip color="error" icon={<ClearIcon />} label="Cancelada" size="small" />
    )
}

export default Finalizada;