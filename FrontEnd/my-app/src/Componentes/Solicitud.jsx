/*IMPORT-REACT*/
import React from 'react';
import '../Estilos/Solicitud.css';
import { Link } from 'react-router-dom';
/*IMPORT-BOOTSTRAP*/
import 'bootstrap/dist/css/bootstrap.min.css';
/*IMPORT-COMPONENTS*/
import Footer from './Footer';
import Navbar from './Navbar-btn';
/*IMPORT-IMAGES*/
import btn_form from '../Images_proyectos/btn-add-formula.png';


class Solicitud extends React.Component {
        render() {
                return (
                        <div className="App">
                                <Navbar id="header_global" />
                                <br />
                                <div className="container">
                                        <div className="row vh-100">
                                                <div className="col-12">
                                                        <div className="mt-1 col-12 col-lg-10" id="Bloque_solicitud">
                                                                <h1 className="text-center mt-4" id="Texto_inicio">Solicitudes</h1>
                                                                <hr />
                                                                <br />
                                                                <div class="row justify-content-center mt-0 btn-group" id="btn-farm">               
                                                                        <select class="text-left col-9 col-lg-11 btn btn-primary bg-light text-dark sub-item" id="dropmenu">
                                                                        <option className="sub-item">Farmacia Rosales</option>
                                                                                <hr className=""/>
                                                                                <option className="sub-item">Farmacia Athena SS</option>
                                                                                <hr className=""/>
                                                                                <option className="sub-item" >Farmacia D2</option> 
                                                                        </select>
                                                                </div>
                                                                <br />
                                                                <div class="row justify-content-center btn-group" id="btn-farm">
                                                                <select class="text-left col-9 col-lg-11 btn btn-primary bg-light text-dark sub-item" id="dropmenu">
                                                                        <option className="sub-item">TI</option>
                                                                                <hr className=""/>
                                                                        <option className="sub-item">Farmacia Athena SS</option>
                                                                                <hr className=""/>
                                                                        <option className="sub-item" >Farmacia D2</option>
                                                                        </select>
                                                                </div>
                                                                <br />
                                                                <div class="row justify-content-center btn-group" id="btn-farm">
                                                                        <input type="int" className="col-11 btn btn-primary bg-light" placeholder="Número de documento" id="text-box" required></input>
                                                                </div>
                                                                <br />
                                                                <div class="row justify-content-center btn-group" id="input-farm">
                                                                        <p className="align-items-start" id="text-add-form">Adjunte la fórmula</p><button className="justify-content-center ml-2 a-add-form" id="btn-form"><img className="icon" src={btn_form} /></button>
                                                                </div>
                                                                <br />
                                                                <div className="row justify-content-center mt-0 ">
                                                                        <button className="col-lg-7 col-8 btn btn-primary btn-block" type="submit" id="btn_solicitar">
                                                                                <strong>Solicitar</strong>
                                                                        </button>
                                                                </div>
                                                                <br />
                                                                <h6></h6>
                                                                <br />
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                                <Footer/>   
                        </div>
                );
        }
}
export default Solicitud;