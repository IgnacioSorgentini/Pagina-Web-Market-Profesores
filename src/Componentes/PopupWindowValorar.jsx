import React from "react";
import '../Hojas-de-estilo/PopupWindowValorar.css'
import Rating from '@mui/material/Rating';

function PopupWindowValorar(props) {

    const [value, setValue] = React.useState(2);

    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner valorar">
                <div className="caja-btn-popup">
                    <button className="close-btn" onClick={() => props.setTrigger(false)}><ion-icon name="close-outline"></ion-icon></button>
                </div>
                <div className="titulo-ventana-valorar">Valorar clase</div>
                <div className="texto-valorar-clase">
                    <h5>Seleccione una valoración</h5>
                </div>
                <div className="estrellas-valorar">
                <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                    setValue(newValue);
                    }}
                    size="large"
                />
                </div>
                <div className="contenedor-btn-ventana-valorar">
                    <button onClick={() => props.setTrigger(false)}>VALORAR</button>
                </div>
            </div>
        </div>
    ) : "";
}

export default PopupWindowValorar;