import React from "react";
import Chip from '@mui/material/Chip';
import ClearIcon from '@mui/icons-material/Clear';
import { Button } from "@mui/material";

function Finalizada() {
    return(  
        <Button><Chip color="error" icon={<ClearIcon />} label="Cancelada" size="small" /></Button>
    )
}

export default Finalizada;