import React from "react";
import '../Hojas-de-estilo/PopupWindowEditar.css';

function PopupEditarClase(props) {
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
                    <input type="text" className="texto-ventana" defaultvalue={props.Descripcion} maxLength={100} />
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
                    <button onClick={() => props.setTrigger(false)}>CONFIRMAR</button>
                    <button onClick={() => props.setTrigger(false)}>CANCELAR</button>

                </div>
            </div>
        </div>
    ) : "";
}

export default PopupEditarClase;