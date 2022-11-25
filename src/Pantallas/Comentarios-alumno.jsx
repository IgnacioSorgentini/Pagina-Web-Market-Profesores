import React from "react";
import '../Hojas-de-estilo/ComentariosAlumno.css';
import ComentarioAlumno from '../Componentes/ComentarioAlumno';
import MenuAlumno from "../Componentes/Menu/MenuAlumno";
import { useLocation } from 'react-router-dom';

function ComentariosAlumno (props) {
    const location = useLocation()
    const { from } = location.state
    const [recarga, setRecarga] = React.useState(-20);
    const[listaClases, setListaClases] = React.useState([]);

    
    
    React.useEffect(()=>{
        fetch(`http://localhost:3001/clases/comentarios/${location.state.idclase}`)

       
       .then((response) => response.json())
       .then((response) => {
           var lista30 = []
           for (var i in response){
               if (response[i].isVisible==true){
                console.log(response[i].isVisible)
                if (response[i].isVisible==true){
                   lista30.push({
                       "_id": response[i]._id,
                       "comentario": response[i].comentario,
                       "usuario": response[i].usuario
                       }
               )} }
           }
           
           setListaClases(lista30)
           setRecarga(1)
           
       })
   },[recarga]);
    return(
        <div className="ComentariosAlumno">
            <MenuAlumno state={location.state}/>
            <div className="contenedor-comentarios">
            <div className="titulo-pantalla">
                <h3 style={{color:"#334756"}}>Comentarios</h3>
            </div>
            <div className="lista-comentarios">
            {listaClases.map((clase) =>{
                return  <ComentarioAlumno Nombre={clase.usuario} Comentario={clase.comentario} Id={clase._id}/>
                })
            }

            </div>
        </div>
        </div>
        
    )
}

export  default ComentariosAlumno;