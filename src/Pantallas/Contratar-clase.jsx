import React from "react";
import PopupWindow from '../Componentes/PopupWindow';
import { useState } from "react";
import '../Hojas-de-estilo/Contratar-clase.css';
import ClaseDisponible from '../Componentes/ClaseDisponible';

function ContratarCLase () {

    return(
        <div className="contenedor-mis-clases">
            <div className="cabecera-pantalla">
                <div className="titulo-pantalla">
                    <h3>Clases disponibles</h3>
                </div>
                <div className="filtro-clases">
                    <div class="btn-group">
                        <button type="button" class="btn btn-sm">MATERIA</button>
                        <button type="button" class="btn btn-sm dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                            <span class="visually-hidden">Toggle Dropdown</span>
                        </button>
                        <ul class="dropdown-menu dropdown-menu-end">
                            <li><button class="dropdown-item" type="button">Biologia</button></li>
                            <li><button class="dropdown-item" type="button">Matematica</button></li>
                            <li><button class="dropdown-item" type="button">Electronica</button></li>
                        </ul>
                    </div>
                    <div class="btn-group">
                        <button type="button" class="btn btn-sm">CLASE</button>
                        <button type="button" class="btn btn-sm dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                            <span class="visually-hidden">Toggle Dropdown</span>
                        </button>
                        <ul class="dropdown-menu dropdown-menu-end">
                            <li><button class="dropdown-item" type="button">Individual</button></li>
                            <li><button class="dropdown-item" type="button">Grupal</button></li>
                        </ul>
                    </div>
                    <div class="btn-group">
                        <button type="button" class="btn btn-sm">FRECUENCIA</button>
                        <button type="button" class="btn btn-sm dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                            <span class="visually-hidden">Toggle Dropdown</span>
                        </button>
                        <ul class="dropdown-menu dropdown-menu-end">
                            <li><button class="dropdown-item" type="button">Unica</button></li>
                            <li><button class="dropdown-item" type="button">Semanal</button></li>
                            <li><button class="dropdown-item" type="button">Mensual</button></li>
                        </ul>
                    </div>
                    <div class="btn-group estrellas">
                        <button type="button" class="btn btn-sm">CALIFICACION</button>
                        <button type="button" class="btn btn-sm dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                            <span class="visually-hidden">Toggle Dropdown</span>
                        </button>
                        <ul class="dropdown-menu dropdown-menu-end">
                            <li><button class="dropdown-item" type="button"><ion-icon name="star"></ion-icon></button></li>
                            <li><button class="dropdown-item" type="button"><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon></button></li>
                            <li><button class="dropdown-item" type="button"><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon></button></li>
                            <li><button class="dropdown-item" type="button"><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon></button></li>
                            <li><button class="dropdown-item" type="button"><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon></button></li>
                       </ul>
                    </div>
                </div>
            </div>
            <div className="lista-clases">
                <ClaseDisponible Nombre='Biologia' Descripcion='Clase de biologia nivel intermedio' Profesor='Fernanda Gimenez' Dia='Viernes' Horario='7:45am a 11:45am'/>
                <ClaseDisponible Nombre='Biologia' Descripcion='Clase de biologia nivel intermedio' Profesor='Fernanda Gimenez' Dia='Viernes' Horario='7:45am a 11:45am'/>
                <ClaseDisponible Nombre='Biologia' Descripcion='Clase de biologia nivel intermedio' Profesor='Fernanda Gimenez' Dia='Viernes' Horario='7:45am a 11:45am'/>
                <ClaseDisponible Nombre='Biologia' Descripcion='Clase de biologia nivel intermedio' Profesor='Fernanda Gimenez' Dia='Viernes' Horario='7:45am a 11:45am'/>
                <ClaseDisponible Nombre='Biologia' Descripcion='Clase de biologia nivel intermedio' Profesor='Fernanda Gimenez' Dia='Viernes' Horario='7:45am a 11:45am'/>
                <ClaseDisponible Nombre='Biologia' Descripcion='Clase de biologia nivel intermedio' Profesor='Fernanda Gimenez' Dia='Viernes' Horario='7:45am a 11:45am'/>


            </div>
        </div>
    )
}

export default ContratarCLase;