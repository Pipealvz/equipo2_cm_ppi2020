/*IMPORT-REACT*/
import React from 'react';
import '../Estilos/Ajustes.css';
/*IMPORT-BOOTSTRAP*/
import 'bootstrap/dist/css/bootstrap.min.css';
/*IMPORT-COMPONENTS*/
import Footer from './Footer';
import Navbar from './Navbar-btn';
/*IMPORT-IMAGES*/
import icon_edit from '../Images_proyectos/btn-icon-edit.png';

class Solicitud extends React.Component {
        render() {
                return (
                        <div className="App">
                                <Navbar id="header_global" />
                                <br/>
                                <div className="container vh-100">
                                        <div className="row justify-content-center">
                                                <div className="col-12">
                                                        <div className="mt-1 col-10" id="Bloque_ajustes">
                                                                <h1 className="text-center mt-4" id="Texto_inicio">Ajustes</h1>
                                                                <hr />
                                                                <br/>
                                                                <div class="mt-2 row justify-content-center mt-0 btn-group" id="btn-farm">
                                                                        <lable type="summit" readonly="readonly" className="col-lg-11 col-11 btn btn-primary bg-light justify-content-between d-flex" id="text-box">Nombre: Androly-San <button type="button" className="btn-edit"><img src={icon_edit} className=""/></button></lable>
                                                                </div>
                                                                <br/>
                                                                <div class="mt-2 row justify-content-center mt-0 btn-group" id="btn-farm">
                                                                        <lable type="summit" readonly="readonly" className="col-lg-11 col-11 btn btn-primary bg-light justify-content-between d-flex" id="text-box">Nombre: Androly-San <button type="button" className="btn-edit"><img src={icon_edit} className=""/></button></lable>
                                                                </div>
                                                                <br/>
                                                                <div class="mt-2 row justify-content-center mt-0 btn-group" id="btn-farm">
                                                                        <lable type="summit" readonly="readonly" className="col-lg-11 col-11 btn btn-primary bg-light justify-content-between d-flex" id="text-box">Nombre: Androly-San <button type="button" className="btn-edit"><img src={icon_edit} className=""/></button></lable>
                                                                </div>
                                                                <br/>
                                                                <div class="mt-2 row justify-content-center btn-group" id="btn-farm">
                                                                        <input type="summit" readonly="readonly" className="col-9 btn btn-primary bg-light" placeholder="Tipo de documento" id="text-box"></input>
                                                                        <button type="button" className="col-2 btn btn-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                <span class="sr-only"></span>
                                                                        </button>
                                                                        <div class="text-left dropdown-menu" id="dropmenu">
                                                                                <a className="dropdown-item">T.I.</a>
                                                                                <a className="dropdown-item">C.C</a>
                                                                        </div>
                                                                </div>
                                                                <br/>
                                                                <div className="row justify-content-center mt-0 ">
                                                                <button className="col-lg-7 col-8 btn btn-primary btn-block" type="submit" id="btn_solicitar">                                                                                                                                           
                                                                 <strong>Cerrar Sesión</strong>                                                       
                                                                </button>
                                                                </div>
                                                                <br />
                                                                <h6></h6>
                                                                <br />
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                                <Footer />
                        </div>
                );
        }
}
export default Solicitud;