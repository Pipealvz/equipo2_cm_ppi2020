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
            <div className="App-r">
                <div className="container-fluid vh-100" id="container">
                    <div className="row vh-100 justify-content-center">
                        <div className="col-12 col-lg-6 align-self-end" id="Bloque_registro">
                            <h1 className="text-center mt-4" id="Texto_registro">Registro</h1>
                            <hr />
                            <br />
                            <form>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="nombre"
                                        id="inputName"
                                        className="form-control"
                                        required
                                        placeholder=""
                                    />
                                    <label className="label">Nombre</label>
                                </div>
                                <div className="form-group">
                                    <input
                                        type="email"
                                        name="correo"
                                        id="inputEmail"
                                        className="form-control"
                                        required
                                        placeholder=""
                                    />
                                    <label className="label">Correo</label>
                                </div>
                                <div className="form-group">
                                    <input
                                        type="password"
                                        name="contrasena"
                                        id="inputPassword"
                                        className="form-control"
                                        required
                                        placeholder=""
                                    />
                                <label className="label">Contraseña</label>
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
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Registro;