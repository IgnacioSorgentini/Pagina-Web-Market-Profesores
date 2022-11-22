import React from "react";
import '../Hojas-de-estilo/PopupWindowEditar.css';

function PopupEditarClase(props) {

    function editar(){
        console.log("holaaaaaaaaaaaaaaaaaaaa")
        const data2 ={
            nombre: props.Nombre,
            descripcion: props.Descripcion,
            materia: props.Materia,
            duracion: props.Duracion,
            frecuencia: props.Frecuencia,
            costo: props.Precio,
        }

        fetch(`http://localhost:3001/clases/actualizar/${props.id}`, {
            method: 'PATCH', 
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(data2),
            })
        .then((response) => response.json())
        .then((data)=> console.log(data))
        props.setTrigger(false)
        props.setRecarga(40)

}
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner nueva-clase">
                <div className="caja-btn-popup">
                    <button className="close-btn" onClick={() => props.setTrigger(false)}><ion-icon name="close-outline"></ion-icon></button>
                </div>
                <div className="contenedor-titulo-ventana-nueva-clase">
                    <input type="text" className="titulo-ventana-nueva-clase" placeholder="Titulo de la clase..." />
                </div>
                <div className="contenedor-texto-ventana">
                    <input type="text" className="texto-ventana" defaultvalue={props.Descripcion} maxLength={100}/>
                </div>
                <div className="contenedor-texto-ventana">
                    <input type="text" className="texto-ventana" defaultvalue={props.Precio} maxLength={100} />
                </div>
                <div className="contenedor-texto-ventana">
                    <input type="text" className="texto-ventana" defaultValue={props.Materia} maxLength={100} />
                </div>
                <div className="contenedor-texto-ventana">
                    <input type="text" className="texto-ventana" defaultValue={props.Tipo} maxLength={100} />
                </div>
                <div className="contenedor-texto-ventana">
                    <input type="text" className="texto-ventana" defaultValue={props.Frecuencia} maxLength={100} />
                </div>
                <div className="contenedor-btn-ventana-nueva-clase">
                    <button onClick={editar}>CONFIRMAR</button>
                    <button onClick={() => props.setTrigger(false)}>CANCELAR</button>

                </div>
            </div>
        </div>
    ) : "";
}

export default PopupEditarClase;