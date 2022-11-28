import React from "react";
import '../Hojas-de-estilo/ComentariosProfesor.css';
import ComentarioProfesor from '../Componentes/ComentarioProfesor';
import MenuProfesor from "../Componentes/Menu/MenuProfesor";
import { useLocation } from 'react-router-dom';

function ComentariosProfesor () {
    const location = useLocation()
    const { from } = location.state
    const [recarga, setRecarga] = React.useState(-20);
    const[listaClases, setListaClases] = React.useState([]);

    console.log(location.state.nombre)

    React.useEffect(()=>{
        fetch(`http://localhost:3001/clases/comentarios/${location.state.idclase}`)

       
       .then((response) => response.json())
       .then((response) => {
           var lista30 = []
           for (var i in response){
            if (response[i].isVisible!=true && response[i].isBloqueado==false){
                   lista30.push({
                       "_id": response[i]._id,
                       "comentario": response[i].comentario,
                       "usuario": response[i].usuario,
                       "isVisible": response[i].isVisible
                       }
               )
                }
           }
           setListaClases(lista30)
           setRecarga(1)
           
       })
       console.log(listaClases)
   },[recarga]);

    return(
       <div className="ComentariosProfesor">
        <MenuProfesor />
        <div className="contenedor-comentarios">
            <div className="titulo-pantalla">
                <h3 style={{color:"#334756"}}>Comentarios</h3>
            </div>
            <div style={{marginLeft:"20px"}}>
                <h5>Los comentarios a continuación no se encuentran públicos. Puede bloquear o aceptar cualquiera de ellos:</h5>
            </div>
            <div className="lista-comentarios">
            {listaClases.map((clase) =>{
                return  <ComentarioProfesor Nombre={clase.usuario} Comentario={clase.comentario} Id={clase._id} setRecarga={setRecarga} NombreProfesor={location.state.nombre} IdClase={location.state.idclase}/>
                })
            }

            </div>
        </div>
       </div>
        
    )
}

export  default ComentariosProfesor;