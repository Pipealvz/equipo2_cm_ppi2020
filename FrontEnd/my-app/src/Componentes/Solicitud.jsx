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
                        <div className="App-s">
                                <Navbar id="header_global"/>
                                <br />
                                <div className="container">
                                        <div className="row mb-5 justify-content-center">
                                                        <div className="col-12 col-lg-5 align-self-start" id="Bloque_solicitud">
                                                                <h1 className="text-center" id="Texto_solicitud">Solicitudes</h1>
                                                                <hr />
                                                                <br />
                                                                <div class="row justify-content-center btn-group" id="btn-farm">
                                                                        <select class="text-left col-11 col-lg-11 btn btn-primary bg-light text-dark sub-item" id="dropmenu">
                                                                        <option className="sub-item-big" disabled selected>Seleccionar farmacia</option>
                                                                                <option className="sub-item">Farmacia Rosales</option>
                                                                                <option className="sub-item">Farmacia Athena SS</option>
                                                                                <option className="sub-item" >Farmacia D2</option>
                                                                        </select>
                                                                </div>
                                                                <br/>
                                                                <br/>
                                                                <div class="row justify-content-center btn-group" id="btn-farm">
                                                                        <select class="text-left col-11 col-lg-11 btn btn-primary bg-light text-dark sub-item" id="dropmenu">
                                                                        <option className="sub-item-big" disabled selected>Tipo de documento</option>
                                                                                <option className="sub-item">T.I.</option>
                                                                                <option className="sub-item" >C.C.</option>
                                                                        </select>
                                                                </div>
                                                                <br/>
                                                                <br />
                                                                <div class="row justify-content-center btn-group" id="btn-farm">
                                                                        <input type="int" className="col-11 col-lg-11 btn btn-primary bg-light" placeholder="Número de documento" id="text-box" required></input>
                                                                </div>
                                                                <br/>
                                                                <br />
                                                                <div class="row justify-content-center btn-group" id="input-farm">
                                                                        <button className="justify-content-around mt-0 col-lg-4 d-flex" id="btn-add-form">Adjunte la fórmula<img className="" src={btn_form} /></button>
                                                                </div>
                                                                <br />
                                                                <br/>
                                                                <div className="row justify-content-center mt-0">
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
                                <Footer />
                        </div>
                );
        }
}
export default Solicitud;