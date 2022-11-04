import React from "react";
import Chip from '@mui/material/Chip';
import DoneAllIcon from '@mui/icons-material/DoneAll';

function Finalizada() {
    return(  
        <Chip color="primary" icon={<DoneAllIcon />} label="Finalizada" size="small" />
    )
}

export default Finalizada;