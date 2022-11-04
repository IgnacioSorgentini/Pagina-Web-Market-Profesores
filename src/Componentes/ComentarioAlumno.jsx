import React from "react";
import '../Hojas-de-estilo/ComentarioAlumno.css';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

function Comentario({Nombre, Comentario}) {
    
    function stringToColor(string) {
        let hash = 0;
        let i;
      
        /* eslint-disable no-bitwise */
        for (i = 0; i < string.length; i += 1) {
          hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }
      
        let color = '#';
      
        for (i = 0; i < 3; i += 1) {
          const value = (hash >> (i * 8)) & 0xff;
          color += `00${value.toString(16)}`.slice(-2);
        }
        /* eslint-enable no-bitwise */
      
        return color;
      }
      
      function stringAvatar(name) {
        return {
          sx: {
            bgcolor: stringToColor(name),
          },
          children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
        };
      }
    
    
    return(
        <div className="contenedor-comentario">
            <div className="nombre-comentador">
                <div className="avatar-comentador">
                <Avatar {...stringAvatar(`${Nombre}`)} sx={{ width: 34, height: 34 }} />
                </div>
                <div style={{display:"flex", alignItems:"center", paddingTop:"5px"}}>
                    <h4 style={{color:"white"}}>{Nombre}</h4>
                </div>
            </div>
            <div className="texto-comentario">
                <p>{Comentario}</p>
            </div>
        </div>
    )
}

export default Comentario;
