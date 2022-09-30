import React from "react";
import '../Hojas-de-estilo/PopupWindow.css'
import '../Hojas-de-estilo/PopupWindowContratar.css';

function PopupContratar(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner contratar">
                <div className="caja-btn-popup">
                    <button className="close-btn" onClick={() => props.setTrigger(false)}><ion-icon name="close-outline"></ion-icon></button>
                </div>
                <div className="contenedor-titulo-ventana-contratar">
                    <div className="titulo-ventana-contratar">Datos personales</div>
                </div>
                <div className="contenedor-texto-ventana">
                    <input type="text" className="texto-ventana" placeholder="Telefono..." maxLength={100} />
                </div>
                <div className="contenedor-texto-ventana">
                    <input type="text" className="texto-ventana" placeholder="Mail de contacto..." maxLength={100} />
                </div>
                <div className="contenedor-texto-ventana">
                    <input type="text" className="texto-ventana" placeholder="Horario referencia para contacto..." maxLength={100} />
                </div>
                <div className="contenedor-texto-ventana">
                    <input type="text" className="texto-ventana" placeholder="Mensaje al profesor..." maxLength={100} />
                </div>
                <div className="contenedor-btn-ventana-contratar">
                    <button onClick={() => props.setTrigger(false)}>CONTRATAR</button>
                </div>
            </div>
        </div>
    ) : "";
}

export default PopupContratar