import React from "react";
import '../Hojas-de-estilo/PopupWindowValorar.css'

function PopupWindowValorar(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner valorar">
                <div className="caja-btn-popup">
                    <button className="close-btn" onClick={() => props.setTrigger(false)}><ion-icon name="close-outline"></ion-icon></button>
                </div>
                <div className="titulo-ventana-valorar">Valorar clase</div>
                <div className="texto-valorar-clase">
                    <h5>Seleccione una valoración del siguiente menu desplegable</h5>
                </div>
                <div className="menu-desplegable-valorar-clase">
                    <div class="dropdown">
                        <button class="btn btn-primary dropdown-toggle desplegable" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Cantidad de estrellas
                        </button>
                        <ul class="dropdown-menu estrellas">
                            <li><button class="dropdown-item" type="button"><ion-icon name="star"></ion-icon></button></li>
                            <li><button class="dropdown-item" type="button"><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon></button></li>
                            <li><button class="dropdown-item" type="button"><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon></button></li>
                            <li><button class="dropdown-item" type="button"><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon></button></li>
                            <li><button class="dropdown-item" type="button"><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon></button></li>
                            
                        </ul>
                    </div>
                </div>
                <div className="contenedor-btn-ventana-valorar">
                    <button onClick={() => props.setTrigger(false)}>VALORAR</button>
                </div>
            </div>
        </div>
    ) : "";
}

export default PopupWindowValorar;