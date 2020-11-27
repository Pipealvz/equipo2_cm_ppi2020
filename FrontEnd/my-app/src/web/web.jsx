/*IMPORT-REACT*/
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'; //IMPORT useHistory
/*IMPORT-BOOTSTRAP*/
import 'bootstrap/dist/css/bootstrap.min.css';
/*IMPORT-COMPONENTS*/
import './web.css';
/*IMPORT-IMAGES*/
import logo_domiapp from '../Images_proyectos/Logo_domiApp.png';
import gitHub from '../Images_proyectos/git_icon.png';
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
    {/*PRIMERA PARTE MI WACHIN*/}
    <div className="container-fluid" id="bg-web">
        <div className="row-fluid d-flex justify-content-center" id="entrada">
            <span className="align-self-center text-uppercase" id="spantitle">Conoce la web de <img src={logo_domiapp}/> </span>
            <div className="mt-5"></div>
        </div>
        <span className="align-self-center text-uppercase" id="spantitle">¡Bienvenido!</span>
    </div>
    <div className="mt-2"></div>
    {/*SEGUNDA PARTE MI WACHIN*/}
    <div className="container-fluid" id="bg-web2">
    <div className="row-fluid d-flex justify-content-start" id="entrada2">
    <div className="col-12 col-lg-4 ml-5 align-self-center" id="Bloque_registro">
    <h1 className="text-center mt-4" id="Texto_registro">Registro de farmacia</h1>
    <form>
    <div className="mt-5"></div>
                                <div className="form-group">
                                    <input
                                        type="name"
                                        name="nombre"
                                        id="input_Name"
                                        className="form-control"
                                        required
                                        placeholder="Nombre"                                      
                                    />
                                    <label className="label">Nombre</label>
                                    <div className="mt-3"></div>
                                    <input
                                        type="email"
                                        name="correo"
                                        id="input_Email"
                                        className="form-control"
                                        required
                                        placeholder="Correo"
                                    />
                                    <label className="label">Correo</label>
                                    <div className="mt-3"></div>
                                    <input
                                        type="password"
                                        name="contrasena"
                                        id="input_Password"
                                        className="form-control"
                                        required
                                        placeholder="Contraseña"
                                    />
                                    <label className="label">Contraseña</label>
                                    <div className="mt-3"></div>
                                </div>
                                <div className="mt-5"></div>
                                <button className="btn btn-block mt-4 btn-primary" type="submit" id="btn_registrar">
                                    <strong>Crear cuenta</strong>
                                </button>
                                <hr />
                            </form>
                    </div>
                </div>
            </div>
        <div className="mt-2"></div>
        {/*FOOTER MI WACHIN*/}
        <footer className="d-flex row-fluid justify-content-around" id="footerweb">
            <div className="row col-4 text-white text-uppercase justify-content-center" >
                <span className="title1">¿Qué es DomiApp?</span>
                <span id="foot1">DomiApp es un aplicativo que ayude a los usuarios discapacitados y apoya a las entidades de salud y a los usuarios que las componen, de una forma más eficaz y sencilla en la entrega de los productos farmacéuticos facilitándoles una plataforma para solicitar y reclamar sus medicamentos, y así despejar las multitudes que se presentan al momento de reclamar medicinas, evitando esfuerzos innecesarios.</span>
            </div>
            
            <div className="row col-4 text-white text-uppercase justify-content-center">
                <span className="title1">Equipo de trabajo</span>
                <div className="row">
                    <div className="">                
                    <form className="ml-5" action="https://github.com/Felipe-Alvarez/" target="_blank">
                        <button className="btn-social">
                            <div>
                                <img src={gitHub} />
                            </div>
                            <div className="">GitHub</div>
                        </button>
                </form>
                <span>FELIPE ÁLVAREZ</span>
                </div>
                <div>                
                <form className="ml-5" action="https://github.com/LilJuanjose" target="_blank">
                        <button className="btn-social">
                            <div>
                                <img src={gitHub} />
                            </div>
                            <div className="">GitHub</div>
                        </button>
                </form>
                <span>JUAN GARCÍA</span>
                </div>
                <div className="">
                <form className="ml-5" action="https://github.com/Guerralowsky" target="_blank">
                        <button className="btn-social">
                            <div>
                                <img src={gitHub} />
                            </div>
                            <div className="">GitHub</div>
                        </button>
                </form>
                <span>ALEJANDRO GUERRA</span>
                </div>
                </div>
            </div>
        </footer>
    </div>
    )
}
}