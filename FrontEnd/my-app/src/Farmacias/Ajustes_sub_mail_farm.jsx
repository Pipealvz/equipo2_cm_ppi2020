/*IMPORT-REACT*/
import React from 'react';
import { Link } from 'react-router-dom';
/*IMPORT-BOOTSTRAP*/
import 'bootstrap/dist/css/bootstrap.min.css';
/*IMPORT-COMPONENTS*/
import Navbar from './Navbar-btn';
import '../Estilos/Ajustes_subs.css';
/*IMPORT-IMAGES*/

class Ajustes_sub_mail extends React.Component {
        render() {
                return (
                        <div className="App-s-a">
                                <Navbar id="header_global" />
                                <br />
                                <div className="container">
                                        <div className="row justify-content-center">
                                                        <div className="mb-5 col-12 col-lg-5" id="Bloque_ajustes">
                                                                <h1 className="text-left mt-4" id="Texto_inicio_sub">Cambiar correo</h1>
                                                                <hr />
                                                                <div className="mt-5"></div>
                                                                <div className="form-group">
                                                                     <input
                                                                                type="email"
                                                                                name="correo"
                                                                                id="i-email"
                                                                                className="form-control"
                                                                                required
                                                                                placeholder="correo actual"
                                                                     />
                                                                     <label for="name" className="form-label">Correo farmacia</label>
                                                                     <div className="mt-3"></div>
                                                                     <input
                                                                                type="email"
                                                                                name="correo"
                                                                                id="i-email"
                                                                                className="form-control"
                                                                                required
                                                                                placeholder="nuevo correo"
                                                                     />
                                                                <label for="name" className="form-label">Nuevo correo</label>
                                                                <div className="mt-3"></div>
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
                                                                <div className="mt-3"></div>
                                                                <div className="row justify-content-center mt-0">
                                                                        <Link className="col-lg-10 col-10 btn btn-dark btn-block" type="submit"  to="/Ajustes_f" id="btn_solicitar">Aceptar</Link>
                                                                </div>
                                                                <div className="mt-3"></div>
                                                                <div className="row justify-content-center mt-0" to="/Ajustes">
                                                                <Link className="col-lg-10 col-10 btn btn-danger btn-block" type="submit"  to="/Ajustes_f" id="btn_solicitar">Cancelar</Link>
                                                                </div>
                                                                <div className="mb-5"></div>
                                                        </div>
                                                </div>
                                        </div>
                        </div>
                );
        }
}
export default Ajustes_sub_mail;
