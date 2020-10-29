/*IMPORT-REACT*/
import React from 'react';
import { Link } from 'react-router-dom';
/*IMPORT-COMPONENTS*/
import Footer from './Footer';
import '../Estilos/Registro.css';
/*IMPORT-BOOTSTRAP*/
import 'bootstrap/dist/css/bootstrap.min.css';

class Registro extends React.Component {
    render() {
        return (
            <div className="App">
                <div className="container-fluid vh-100" id="container">
                    <div className="row vh-100 justify-content-center">
                        <div className="col-12 col-lg-6 align-self-end" id="Bloque_registro">
                            <h1 className="text-center mt-4" id="Texto_registro">Registro</h1>
                            <hr />
                            <form >
                                <div className="form-group" id="form-group">
                                    <label className="inputName" id="form-label">Nombre de usuario</label>
                                    <input
                                        type="text"
                                        name="Nombre"
                                        id="input_Name"
                                        className="form-control"
                                        required
                                        placeholder=""
                                    />
                                </div>
                                <div className="form-group" id="form-group">
                                    <label className="inputEmail" id="form-label">Correo</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="input_Email"
                                        className="form-control"
                                        required
                                        placeholder=""
                                    />
                                </div>
                                <div className="form-group" id="form-group">
                                    <label className="inputPassword" id="form-label">Contraseña</label>
                                    <input
                                        type="password"
                                        name="contrasena"
                                        id="input_Password"
                                        className="form-control"
                                        required
                                        placeholder=""
                                    />
                                </div>
                                <button className="btn btn-block mt-4" type="submit" id="btn_registrar">
                                    <strong>Crear cuenta</strong>
                                </button>
                                <hr/>
                                <div className="Link_sesion">
                                    <p>¿Ya tienes cuenta? <Link id="link" to="/">
                                        ¡¡Inicia Sesión!!</Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Registro;