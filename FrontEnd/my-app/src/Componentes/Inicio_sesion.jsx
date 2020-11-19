/*IMPORT-REACT*/
import React from 'react';
import { Link } from 'react-router-dom';
/*IMPORT-BOOTSTRAP*/
import 'bootstrap/dist/css/bootstrap.min.css';
/*IMPORT-COMPONENTS*/
import '../Estilos/Inicio_sesion.css';
/*IMPORT-IMAGES*/ 
import logo_domiapp from '../Images_proyectos/Logo_domiApp.png';
/*IMPORT AXIOS { GET, POST, PUT, DELETE }*/
import axios from 'axios';

export default class Inicio_sesion extends React.Component {
        render(){
                return (
                        <div className="App">
                                <div className="container vh-100" id="container">
                                        <div className="row vh-100 justify-content-end">
                                                <div className="col-12 col-lg-4 align-self-center" id="Bloque_inicio">
                                                        <img src={logo_domiapp} className="img-fluid"/>
                                                        <h1 className="text-center mt-4" id="Texto_inicio">Iniciar Sesión</h1>
                                                        <hr/>
                                                        <br/>
                                                        <form>
                                                                <div className="form-group">
                                                                     <input
                                                                                type="email"
                                                                                name="correo"
                                                                                id="i-email"
                                                                                className="form-control"
                                                                                required
                                                                                placeholder="correo"
                                                                     />
                                                                <label for="name" className="form-label">Correo</label>
                                                                     <br/>
                                                                     <input
                                                                                type="password"
                                                                                name="contrasena"
                                                                                id="i-pass"
                                                                                className="form-control"
                                                                                required
                                                                                placeholder="contraseña"
                                                                     />
                                                                <label for="password" className="form-label">Contraseña</label>
                                                                </div>
                                                                <Link id="link" to="/Solicitud"> 
                                                                <button className=" btn btn-dark btn-block mt-0" type="submit" id="btn_inicio">
                                                                 <strong>Iniciar sesión</strong>
                                                                </button>
                                                                <hr/>
                                                                </Link>
                                                                <span className="link-registro">¿No tienes cuenta? <Link id="link" to="/Registro">¡Registrate!</Link>
                                                                </span> 
                                                        </form>
                                                        <br/>
                                                </div>
                                        </div>
                                </div>              
                        </div>  
                );
        }
}