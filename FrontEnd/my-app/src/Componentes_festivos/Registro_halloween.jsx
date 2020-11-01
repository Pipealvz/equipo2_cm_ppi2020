/*IMPORT-REACT*/
import React from 'react';
import { Link } from 'react-router-dom';
/*IMPORT-COMPONENTS*/
import './Registro_h.css';
/*IMPORT-BOOTSTRAP*/
import 'bootstrap/dist/css/bootstrap.min.css';
/*IMPORT-IMAGES*/
import logo_domiapp from '../Images_proyectos/Logo_domiApp.png';
class Registro_h extends React.Component {
    render() {
        return (
            <div className="App-r-f">
                <div className="container vh-100" id="container">
                    <div className="row vh-100 justify-content-start">
                        <div className="col-12 col-lg-4 align-self-center" id="Bloque_registro-f">
                            <img src={logo_domiapp} className="img-fluid mt-5 mb-5"/>
                            <h1 className="text-center mt-4" id="Texto_registro-f">Registro</h1>
                            <hr />
                            <br /> 
                            <form>
                                <div className="form-group">
                                    <input
                                        type="name"
                                        name="nombre"
                                        id="input-n-r"
                                        className="form-control f-r-h"
                                        required
                                        placeholder="Nombre"
                                    />
                                    <label className="label-r-h">Nombre</label>
                                    <input
                                        type="email"
                                        name="correo"
                                        id="input-e-r"
                                        className="form-control f-r-h"
                                        required
                                        placeholder="Correo"
                                    />
                                    <label className="label-r-h">Correo</label>
                                    <input
                                        type="password"
                                        name="contrasena"
                                        id="input-p-r"
                                        className="form-control f-r-h"
                                        required
                                        placeholder="Contraseña"
                                    />
                                <label className="label-r-h">Contraseña</label>
                                </div>
                                <button className="btn btn-block mt-4" type="submit" id="btn_registrar-f">
                                    <strong>Crear cuenta</strong>
                                </button>
                                <hr/>
                                <div className="Link_sesion-f">
                                    <span className="Link_sesion-f">¿Ya tienes cuenta? <Link id="link-f" to="/_h">
                                        ¡Inicia Sesión!</Link>
                                    </span>
                                </div>
                            </form>
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Registro_h;