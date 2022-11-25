import React from "react";
import Contratacion from "../Componentes/Contratacion";
import '../Hojas-de-estilo/Contrataciones.css'
import MenuProfesor from "../Componentes/Menu/MenuProfesor";
import { useLocation } from 'react-router-dom';

function Contrataciones() {

    const location = useLocation()
    const { from } = location.state
    

    const[listaClases, setListaClases] = React.useState([]);
    const[recarga, setRecarga] = React.useState(0);
    const user = "profesor"
    
    React.useEffect(()=>{
       fetch(`http://localhost:3001/clases/solicitudes/profesor/${location.state.nombre}`)
       .then((response) => response.json())
        .then((response) => {
            var lista3 = []
            for (var i in response){
                    lista3.push({
                        "clase": response[i].nombre,
                        "alumno": response[i].idAlumno,
                        "telefono": response[i].telefono,
                        "mail": response[i].mail,
                        "horario": response[i].horario,
                        "mensaje": response[i].mensaje
                        }
                ) 
            }
            setListaClases(lista3)
    
       })

       setRecarga(1)

    },[recarga]);

    return(
        <div className="Contrataciones">
            <MenuProfesor  state ={location.state}/>
            <div className="contenedor-contrataciones">
            <div className="titulo-pantalla">
                <h3 style={{color:"#334756"}}>Contrataciones</h3>
            </div>
            <div className="lista-contrataciones">
            {
                    listaClases.map((clase) =>{
                return <Contratacion Clase={clase.clase} Alumno={clase.alumno} Telefono={clase.telefono} Mail={clase.mail} HorarioRef={clase.horario} Mensaje={clase.mensaje}/>
                    })
                    }
            </div>
        </div>
        </div>
    )
}

export default Contrataciones;