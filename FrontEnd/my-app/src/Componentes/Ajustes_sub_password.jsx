/*IMPORT-REACT*/
import React from 'react';
import { Link } from 'react-router-dom';
/*IMPORT-BOOTSTRAP*/
import 'bootstrap/dist/css/bootstrap.min.css';
/*IMPORT-COMPONENTS*/
import Footer from './Footer';
import Navbar from './Navbar-btn';
import '../Estilos/Ajustes.css';
/*IMPORT-IMAGES*/

class Ajustes_sub_pass extends React.Component {
        render() {
                return (
                        <div className="App">
                                <Navbar id="header_global" />
                                <br />
                                <div className="container vh-100">
                                        <div className="row justify-content-center">
                                                <div className="col-12">
                                                        <div className="mt-1 col-10" id="Bloque_ajustes">
                                                                <h1 className="text-left mt-4" id="Texto_inicio_sub">Cambiar contraseña</h1>
                                                                <hr />
                                                                <br />                                                                
                                                                <div class="form-group mt-2 row justify-content-center mt-0 btn-group" id="btn-farm">
                                                                        <input type="password" className="col-lg-11 col-11 btn btn-primary bg-light justify-content-between d-flex" id="text-box" placeholder="Ingrese contraseña actual:"></input>
                                                                </div>
                                                                <br />
                                                                <div class="form-group mt-2 row justify-content-center mt-0 btn-group" id="btn-farm">
                                                                        <input type="password" className="col-lg-11 col-11 btn btn-primary bg-light justify-content-between d-flex standard-secondary" id="text-box" placeholder="Nueva contraseña:" required></input>
                                                                </div>
                                                                <br />
                                                                <div class="form-group mt-2 row justify-content-center mt-0 btn-group" id="btn-farm">
                                                                <input type="password" className="col-lg-11 col-11 btn btn-primary bg-light justify-content-between d-flex" id="text-box" placeholder="Verificar nueva contraseña:" required></input>
                                                                </div>
                                                                <br />
                                                                <div className="row justify-content-center mt-0">
                                                                        <Link className="col-lg-4 col-8 btn btn-primary btn-block" type="submit"  to="/Ajustes" id="btn_solicitar">Aceptar</Link>
                                                                </div>
                                                                <br/>
                                                                <div className="row justify-content-center mt-0" to="/Ajustes">
                                                                <Link className="col-lg-4 col-8 btn btn-primary btn-block" type="submit"  to="/Ajustes" id="btn_solicitar">Cancelar</Link>
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
export default Ajustes_sub_pass;
