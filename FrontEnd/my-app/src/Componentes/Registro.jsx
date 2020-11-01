/*IMPORT-REACT*/
import React from 'react';
import { Link } from 'react-router-dom';
/*IMPORT-COMPONENTS*/
import Footer from './Footer';
import '../Estilos/Registro.css';
/*IMPORT-BOOTSTRAP*/
import 'bootstrap/dist/css/bootstrap.min.css';
/*IMPORT-IMAGES*/
import logo_domiapp from '../Images_proyectos/Logo_domiApp.png';
class Registro extends React.Component {
    render() {
        return (
            <div className="App-r">
                <div className="container vh-100" id="container">
                    <div className="row vh-100 justify-content-end">
                        <div className="col-12 col-lg-4 align-self-center" id="Bloque_registro">
                            <img src={logo_domiapp} className="img-fluid mt-5 mb-5"/>
                            <h1 className="text-center mt-4" id="Texto_registro">Registro</h1>
                            <hr />
                            <br />
                            <form>
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
                                    <input
                                        type="email"
                                        name="correo"
                                        id="input_Email"
                                        className="form-control"
                                        required
                                        placeholder="Correo"
                                    />
                                    <label className="label">Correo</label>
                                    <input
                                        type="password"
                                        name="contrasena"
                                        id="input_Password"
                                        className="form-control"
                                        required
                                        placeholder="Contraseña"
                                    />
                                <label className="label">Contraseña</label>
                                </div>
                                <button className="btn btn-block mt-4" type="submit" id="btn_registrar">
                                    <strong>Crear cuenta</strong>
                                </button>
                                <hr/>
                                <div className="Link_sesion">
                                    <span className="Link_sesion">¿Ya tienes cuenta? <Link id="link" to="/">
                                        ¡Inicia Sesión!</Link>
                                    </span>
                                </div>
                            </form>
                            <br />
                        </div>
                    </div>
                </div>
                <Footer/>
                </div>
        );
    }
}
export default Registro;