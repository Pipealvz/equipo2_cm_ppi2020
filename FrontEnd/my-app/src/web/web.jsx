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
        <nav className="navbar navbar-light align-self-center sticky-top" id="navbarweb">
        <div className="row col-6">
            <img src={logo_domiapp}  className="img-icon"/>
    </div>
    <div className="row col-6 justify-content-end">
        <button className="btn btn-primary" id="btn">Iniciar sesión</button>
        <div className="mr-5"></div>
        <button className="btn btn-primary" id="btn">Registro</button>
    </div>
    </nav>
    <div className="container-fluid" id="bg-web">
        <div className="row-fluid d-flex justify-content-center" id="entrada">
            <span className="align-self-center text-uppercase" id="spantitle">Bienvenidos a la web de <img src={logo_domiapp}/> </span>
        </div>
    </div>
    <div className="mt-2"></div>
    <div className="container-fluid" id="bg-web2">

    </div>
    </div>
    )
}
}