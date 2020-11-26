/*IMPORT-REACT*/
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'; //IMPORT useHistory
/*IMPORT-BOOTSTRAP*/
import 'bootstrap/dist/css/bootstrap.min.css';
/*IMPORT-COMPONENTS*/
import '../Estilos/Inicio_sesion.css';
/*IMPORT-IMAGES*/
import logo_domiapp from '../Images_proyectos/Logo_domiApp.png';
/*IMPORT AXIOS { GET, POST, PUT, DELETE }*/
import axios from 'axios'

export default function web() {
    return (
        <div className="App">
            <div className="container vh-100">
                <nav class="navbar navbar-light align-self-center sticky-top bg-inverse" id="navbar">
                    <div class="row col-6">
                        <a class="navbar-brand">
                            <img src="../Images_proyectos/Logo_domiApp-icon.png" alt=""/>
                        </a>
                        <div class="row col-6 justify-content-end">
                            <button class="btn btn-primary" id="btn">Iniciar sesión</button>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}