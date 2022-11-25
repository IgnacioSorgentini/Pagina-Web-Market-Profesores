import React from "react";
import { useState } from "react";
import '../Hojas-de-estilo/Mis-clases.css';
import ClaseContratada from "../Componentes/ClaseContratada";
import MenuAlumno from '../Componentes/Menu/MenuAlumno';

function MisClasesAlumno ({id}) {


    const user = "637825f755610aa44323d5f2"
    const [recarga, setRecarga] = React.useState(-20);
    const[listaClases, setListaClases] = useState([]);

    React.useEffect(()=>{
        let userid
        if (id==undefined){
            userid = user
        }
        else{
            userid = id
        }
        fetch(`http://localhost:3001/clases/solicitudes/user/${userid}`)
        .then((response) => response.json())
         .then((response) => {
             var lista2 = []

             for (var i in response){

                     lista2.push({
                        "_id": response[i]._id,
                        "idClase": response[i].idClase,
                         "profesor": response[i].profesor,
                         "nombre": response[i].nombre,
                         "materia": response[i].materia,
                         "frecuencia": response[i].frecuencia,
                         "costo": response[i].costo,
                         "valoracion": response[i].valoracion,
                         "descripcion": response[i].descripcion,
                         "estado": response[i].estado,
                         "tipo": response[i].tipo,
                         "duracion": response[i].duracion,
                         "idAlumno": response[i].idAlumno
                         }
                 )  
                  
                
             }
            
             setListaClases(lista2)
     
        })
 
        setRecarga(1)
     },[recarga]);



 

     return(
        <div className="misClasesAlumno">
            <MenuAlumno />
            <div className="contenedor-mis-clases">
            <div className="titulo-pantalla">
                <h3 style={{color:"#334756"}}>Mis clases</h3>
            </div>
            <div className="lista-clases">
            {listaClases.map((clase) =>{
                return <ClaseContratada Nombre={clase.nombre} Descripcion={clase.descripcion} Materia={clase.materia} Profesor={clase.profesor}  Horario={clase.duracion} Tipo={clase.tipo} Frecuencia={clase.frecuencia} Calificacion= {clase.valoracion} Costo={clase.costo} Estado={clase.estado} Id ={clase._id} IdClase = {clase.idClase} IdAlumno={clase.idAlumno}/>
                    })
            }
               
            </div>
        </div>
        </div>
    )



}
export default MisClasesAlumno;