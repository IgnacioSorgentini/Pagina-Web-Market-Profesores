import React from "react";
import Avatar from '@mui/material/Avatar';
import '../Hojas-de-estilo/ComentarioProfesor.css';

function ComentarioProfesor ({Nombre, Comentario}) {
    
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
        <div className="contenedor-comentario-profesor">
            <div className="lado-izquierdo-comentario">
                <div className="nombre-comentador">
                    <div className="avatar-comentador">
                        <Avatar {...stringAvatar(`${Nombre}`)} sx={{ width: 34, height: 34 }} />
                    </div>
                    <div style={{display:"flex", alignItems:"center"}}>
                        <h4 style={{color:"white"}}>{Nombre}</h4>
                    </div>
                </div>
                <div className="texto-comentario">
                    <p>{Comentario}</p>
                </div>
            </div>
            <div className="lado-derecho-comentario">
                <button type="button" className="btn btn-bloquear btn-sm btn-primary"><ion-icon name="close-circle-outline"></ion-icon>BLOQUEAR</button>
                <button type="button" className="btn btn-sm btn-primary"><ion-icon name="checkmark-circle-outline"></ion-icon>ACEPTAR</button>
            </div>
        </div>
    )
}

export default ComentarioProfesor;