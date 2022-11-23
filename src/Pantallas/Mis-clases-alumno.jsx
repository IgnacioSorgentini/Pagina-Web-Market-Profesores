import React from "react";
import { useState } from "react";
import '../Hojas-de-estilo/Mis-clases.css';
import ClaseContratada from "../Componentes/ClaseContratada";
import MenuAlumno from '../Componentes/Menu/MenuAlumno';

function MisClasesAlumno ({id}) {
    const[listaClases, setListaClases] = useState([]);
    const [recarga, setRecarga] = React.useState(-20);
    const userid = "637825f755610aa44323d5f2"
    const nombre = "alumno"
    const [clases,setClases] = React.useState([]);


    React.useEffect(()=>{
        var lista = []
        fetch(`http://localhost:3001/clases/solicitudes/user/${userid}`)
        .then((response) => response.json())
         .then((response) => {
             for (var i in response){
                fetch(`http://localhost:3001/clases/by_profesor/${response[i].idClase}`)
                .then((response2) => response2.json())
                 .then((response2) => {
                    var lista = []
                     for (var j in response2){
                        
                     lista.push({
                         "_id": response2[j]._id,
                         "profesor": response2[j].profesor,
                         "nombre": response2[j].nombre,
                         "materia": response2[j].materia,
                         "duracion": response2[j].duracion,
                         "frecuencia": response2[j].frecuencia,
                         "costo": response2[j].costo,
                         "valoracion": response2[j].valoracion,
                         "calificaciones": response2[j].calificaciones.valor,
                         "tipo": response2[j].isGrupal,
                         "descripcion": response2[j].descripcion
                         })
                        }      
                        setListaClases(lista)
                                 
                    }
                    
                    
                 ) 
                 
             }
             

      
        })
        setListaClases(lista)
        setRecarga(1)
        
        console.log(listaClases)
        listaClases.map((clase) =>{
            console.log(clase)
        })
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
                        return(<ClaseContratada Nombre={clase.nombre}  Descripcion={clase.descripcion} Materia={clase.materia} Profesor={clase.profesor} Horario={clase.duracion} Tipo={clase.tipo} Frecuencia={clase.frecuencia} Calificacion={clase.valoracion} Estado="Solicitada"/>)
                    })
            }
               
            </div>
        </div>
        </div>
    )
}

export default MisClasesAlumno;