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
                <ClaseDisponible Nombre='Biologia A' Descripcion='Clase de biologia nivel intermedio' Materia="Biologia" Profesor='Fernanda Gimenez' Horario='3 horas' Tipo="Grupal" Frecuencia="Unica" Calificacion="3" Costo="$2350,00"/>
                <ClaseDisponible Nombre='Geometria' Descripcion='Clases de geometria para principiantes' Materia="Matematica" Profesor='Gustavo Hernandez' Horario='1 hora' Tipo="Individual" Frecuencia="Semanal" Calificacion="5" Costo="$1000,00"/>
                <ClaseDisponible Nombre='Logica' Descripcion='Clases cortas de logica para principiantes' Materia="Programacion" Profesor='Ricardo Tomilsonn' Horario='1 hora' Tipo="Grupal" Frecuencia="Semanal" Calificacion="4" Costo="$1050,00"/>
                <ClaseDisponible Nombre='Estadistica Gral.' Descripcion='Introduccion a las variables aleatorias' Materia="Estadistica" Profesor='Sergio Salas' Horario='2 horas' Tipo="Grupal" Frecuencia="Mensual" Calificacion="3" Costo="$3000,00"/>
                <ClaseDisponible Nombre='1ra Guerra Mundial' Descripcion='Clase general sobre el gran hecho historico' Materia="Historia" Profesor='Antonelia Ramos' Horario='4 horas' Tipo="Grupal" Frecuencia="Unica" Calificacion="5" Costo="$4000,00"/>
                <ClaseDisponible Nombre='AutoCAD' Descripcion='Curso de introduccion a AutoCAD' Materia="Tecnologia" Profesor='Ariel Morales' Horario='1 hora' Tipo="Grupal" Frecuencia="Semanal" Calificacion="4" Costo="$1460,00"/>
                <ClaseDisponible Nombre='Gases' Descripcion='Introduccion a los distintos gases' Materia="Quimica" Profesor='Martina Ares' Horario='1 hora' Tipo="Individual" Frecuencia="Semanal" Calificacion="5" Costo="$1000,00"/>
                <ClaseDisponible Nombre='Past Simple' Descripcion='Clases del tiempo Past Simple. Inicial.' Materia="Ingles" Profesor='Ana de Armas' Horario='2 horas' Tipo="Individual" Frecuencia="Unica" Calificacion="5" Costo="$2500,00"/>

            </div>
        </div>
    )
}

export default ContratarCLase;