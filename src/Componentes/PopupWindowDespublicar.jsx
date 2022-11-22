import React from "react";
import '../Hojas-de-estilo/PopupWindow.css';
import '../Hojas-de-estilo/PopupWindowPublicar.css';

function PopupDespublicar(props) {

    function despublicar(){
        fetch(`http://localhost:3001/clases/despublicar/${props.id}`, {
            method: 'PATCH', 
            headers: {
            'Content-Type': 'application/json',
            }})
           .then((response) => response.json())
           .then((data)=> console.log(data))
                
         

        props.setTrigger(false)
        props.setRecarga(30)

}

    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <div className="caja-btn-popup">
                    <button className="close-btn" onClick={() => props.setTrigger(false)}><ion-icon name="close-outline"></ion-icon></button>
                </div>
                <div className="titulo-ventana-publicar">Confirma que quiere despublicar esta clase?</div>
                <div className="contenedor-texto-ventana">
                </div>
                <div className="contenedor-btn-ventana-publicar">
                    <button onClick={despublicar}>DESPUBLICAR</button>
                    <button onClick={() => props.setTrigger(false)}>DESCARTAR</button>
                </div>
            </div>
        </div>
    ) : "";
}

export default PopupDespublicar