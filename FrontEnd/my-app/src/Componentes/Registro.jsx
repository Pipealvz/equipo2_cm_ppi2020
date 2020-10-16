/*IMPORT-REACT*/
import React from 'react';
import { Link } from 'react-router-dom';
/*IMPORT-COMPONENTS*/
import Footer from './Footer';
import Navbar from './Navbar';
import '../Estilos/Registro.css';
import Logo_domiapp from '../Images_proyectos/Logo_domiApp.png';
/*IMPORT-BOOTSTRAP*/
import 'bootstrap/dist/css/bootstrap.min.css';

class Registro extends React.Component {
    render() {
        return (
            <div className="App">
                <div className="container vh-100 mt-5">
                    <div className="logo_domiapp">
                        <img src={Logo_domiapp} alt="" className="img-fluid" />
                    </div>
                    <div className="row">
                        <div className="col"></div>
                        <div className="col-lg-9 col-12" id="Bloque_registro">
                            <h1 className="text-center mt-4" id="Texto_registro">Registro</h1>
                            <hr/>
                            <br />
                            <form >
                                <div className="form-group">
                                    <label className="inputName">Nombre de usuario</label>
                                    <input
                                        type="text"
                                        name="Nombre"
                                        id="input_Name"
                                        className="form-control"
                                        required
                                        placeholder="Nombre"
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="inputEmail">Correo</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="input_Email"
                                        className="form-control"
                                        required
                                        placeholder="Correo"
                                    />
                                </div>
                                <div className="form-group ">
                                    <label className="inputPassword">Contraseña</label>
                                    <input
                                        type="password"
                                        name="contrasena"
                                        id="input_Password"
                                        className="form-control"
                                        required
                                        placeholder="Contraseña"
                                    />
                                </div>
                                <button className=" btn btn-primary btn-block" type="submit" id="btn_registrar">
                                    <strong>Crear cuenta</strong>
                                </button>
                                <div className="Link_sesion">
                                    <p>¿Ya tienes cuenta? <Link id="link" to="/">
                                    ¡¡Inicia Sesión!!</Link>
                                    </p>
                                </div>
                            </form>
                            <br />
                            <h6></h6>
                            <br />
                        </div>
                        <div className="col"></div> 
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
export default Registro;