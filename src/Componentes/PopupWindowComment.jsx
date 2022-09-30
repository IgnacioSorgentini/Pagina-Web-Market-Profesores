import React from "react";
import '../Hojas-de-estilo/PopupWindow.css';
import '../Hojas-de-estilo/PopupWindowComment.css';

function PopupComment(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <div className="caja-btn-popup">
                    <button className="close-btn" onClick={() => props.setTrigger(false)}><ion-icon name="close-outline"></ion-icon></button>
                </div>
                <div className="titulo-ventana-comentario">Escribe un comentario</div>
                <div className="contenedor-texto-ventana">
                    <input type="text" className="texto-ventana" placeholder="Comentario..." maxLength={100} />
                </div>
                <div className="contenedor-btn-ventana-comentario">
                    <button>ENVIAR</button>
                </div>
            </div>
        </div>
    ) : "";
}

export default PopupComment