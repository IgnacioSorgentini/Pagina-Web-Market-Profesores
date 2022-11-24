import React from "react";
import Chip from '@mui/material/Chip';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function Solicitada({Estado}) {
    return(  
        <Chip color="warning" icon={<AccessTimeIcon />} label= {Estado}  size="small" />
    )
}

export default Solicitada;