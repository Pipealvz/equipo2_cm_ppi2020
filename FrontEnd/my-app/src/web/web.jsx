/*IMPORT-REACT*/
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'; //IMPORT useHistory
/*IMPORT-BOOTSTRAP*/
import 'bootstrap/dist/css/bootstrap.min.css';
/*IMPORT-COMPONENTS*/
import './web.css';
/*IMPORT-IMAGES*/
import logo_domiapp from '../Images_proyectos/Logo_domiApp.png';
/*IMPORT AXIOS { GET, POST, PUT, DELETE }*/
import axios from 'axios'

export default class web extends React.Component{
    render(){
    return (
        <div className="appweb">
        <nav class="navbar navbar-light align-self-center sticky-top bg-inverse" id="navbarweb">
        <div class="row col-6">
            <img src={logo_domiapp}  className="img-icon"/>
    </div>
    <div class="row col-6 justify-content-end">
        <button class="btn btn-primary" id="btn">Iniciar sesión</button>
    </div>
    </nav>
    <div className="container-fluid bg-primary" id="bg-web">

    </div>
    <div className="container-fluid" id="bg-web2">

    </div>
    </div>
    )
}
}