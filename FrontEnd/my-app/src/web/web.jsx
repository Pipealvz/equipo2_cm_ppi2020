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
        <span className="text-uppercase text-white">¡Para tí, siempre. DomiApp!</span>
    </div>
    </nav>
    <div className="container-fluid" id="bg-web">
        <div className="row-fluid d-flex justify-content-center" id="entrada">
            <span className="align-self-center text-uppercase" id="spantitle">Conoce la web de <img src={logo_domiapp}/> </span>
            <div className="mt-5"></div>
        </div>
        <span className="align-self-center text-uppercase" id="spantitle">¡Bienvenido!</span>
    </div>
    <div className="mt-2"></div>
    <div className="container-fluid" id="bg-web2">
    <div className="row-fluid d-flex justify-content-center bg-dark" id="entrada">
        
    </div>
    </div>
    </div>
    )
}
}