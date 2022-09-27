import React from "react";
import '../Hojas-de-estilo/Menu.css'
import {Link} from "react-router-dom"

function Menu() {
    return(
        <div className="contenedor-menu">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand titulo-menu" href="#">Nombre de la pagina</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="items-menu collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="#"><button type="button" class="btn-menu btn-outline-dark"><Link to="/mis-clases-alumno">Mis clases</Link></button></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><button type="button" class="btn-menu btn-outline-dark"><Link to="/contratar-clase">Contratar clase</Link></button></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><button type="button" class="btn-menu btn-outline-dark"><Link to="/">Cerrar sesion</Link></button></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
export default Menu;