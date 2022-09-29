import React from "react";
import '../Hojas-de-estilo/PopupWindow.css'
import '../Hojas-de-estilo/PopupWindowNuevaClase.css';

function PopupNuevaClase(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <div className="caja-btn-popup">
                    <button className="close-btn" onClick={() => props.setTrigger(false)}><ion-icon name="close-outline"></ion-icon></button>
                </div>
                <div className="contenedor-titulo-ventana-nueva-clase">
                    <input type="text" className="titulo-ventana-nueva-clase" placeholder="Titulo de la clase..." />
                </div>
                <div className="contenedor-texto-ventana">
                    <input type="text" className="texto-ventana" placeholder="Descripcion..." maxLength={100} />
                </div>
                <div className="contenedor-texto-ventana">
                    <input type="text" className="texto-ventana" placeholder="Precio..." maxLength={100} />
                </div>
                <div className="contenedor-texto-ventana">
                    <input type="text" className="texto-ventana" placeholder="Materia..." maxLength={100} />
                </div>
                <div className="contenedor-texto-ventana">
                    <input type="text" className="texto-ventana" placeholder="Dias de cursada..." maxLength={100} />
                </div>
                <div className="contenedor-texto-ventana">
                    <input type="text" className="texto-ventana" placeholder="Frecuencia..." maxLength={100} />
                </div>
                <div className="contenedor-btn-ventana-nueva-clase">
                    <button onClick={() => props.setTrigger(false)}>CREAR</button>
                </div>
            </div>
        </div>
    ) : "";
}

export default PopupNuevaClase