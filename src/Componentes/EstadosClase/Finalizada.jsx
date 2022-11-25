import React from "react";
import Chip from '@mui/material/Chip';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { Button } from "@mui/material";

function Finalizada() {
    return(  
        <Button><Chip color="primary" icon={<DoneAllIcon />} label="Finalizada" size="small" /></Button>
    )
}

export default Finalizada;