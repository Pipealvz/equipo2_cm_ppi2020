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
                                        <div className="row">
                                                <div className="col-12">
                                                        <div className="mt-1 col-10" id="Bloque_solicitud">
                                                                <h1 className="text-center mt-4" id="Texto_inicio">Solicitudes</h1>
                                                                <hr />
                                                                <br />
                                                                <div class=" row justify-content-center mt-0 btn-group" id="btn-farm">
                                                                        <input type="summit" readonly="readonly" className="col-9 col-lg-10 btn btn-primary bg-light" placeholder="Seleccionar farmacia" id="text-box"></input>
                                                                        <button type="button" className="col-2 col-lg-1 btn btn-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                <span class="sr-only"></span>
                                                                        </button>
                                                                        <div class="text-left dropdown-menu" id="dropmenu">
                                                                                <a className="dropdown-item">Farmacia Rosales</a>
                                                                                <hr className="m-0"/>
                                                                                <a className="dropdown-item">Farmacia Athena SS</a>
                                                                                <hr className="m-0"/>
                                                                                <a className="dropdown-item" >Farmacia D2</a>
                                                                        </div>
                                                                </div>
                                                                <br />
                                                                <div class="row justify-content-center btn-group" id="btn-farm">
                                                                        <input type="summit" readonly="readonly" className="col-9 col-lg-10 btn btn-primary bg-light" placeholder="Tipo de documento" id="text-box"></input>
                                                                        <button type="button" className="col-2 col-lg-1 btn btn-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                <span class="sr-only"></span>
                                                                        </button>
                                                                        <div class="text-left dropdown-menu" id="dropmenu">
                                                                                <a className="dropdown-item">T.I.</a>
                                                                                <hr className="m-0"/>
                                                                                <a className="dropdown-item">C.C</a>
                                                                        </div>
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
                                <div className="row-fluid">
                                <Footer/>   
                                </div>  
                        </div>
                );
        }
}
export default Solicitud;