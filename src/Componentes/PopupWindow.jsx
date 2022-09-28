import React from "react";
import '../Hojas-de-estilo/PopupWindow.css'

function Popup(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <div className="caja-btn-popup">
                    <button className="close-btn" onClick={() => props.setTrigger(false)}><ion-icon name="close-outline"></ion-icon></button>
                </div>
                <div className="caja-texto-popup">{ props.children }</div>
            </div>
        </div>
    ) : "";
}

export default Popup