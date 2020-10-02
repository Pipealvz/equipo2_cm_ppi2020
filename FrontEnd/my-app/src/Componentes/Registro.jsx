import React from 'react';
import '../Estilos/Registro.css';
import Logo_domiapp from '../Images_proyectos/Logo_domiApp.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import Navbar from './Navbar';
class Registro extends React.Component {
    render() {
        return (
            <div className="App">
                <Navbar titulo="Registro" />
                <div className="container vh-100 mt-4">
                    <div className="logo_domiapp">
                        <img src={Logo_domiapp} alt="" className="img-fluid" />
                    </div>
                    <div className="row">
                        <div className="col"></div>
                        <div className="col-8" id="Bloque_registro">
                            <h1 className="text-center mt-4" id="Texto_inicio">Registro</h1>
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
                                    <strong>Registrarse</strong>
                                </button>
                                <div className="Link_sesion">
                                    <p>¿Ya tienes cuenta?<a href="" className="">
                                        Inicia sesión
                                </a>
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