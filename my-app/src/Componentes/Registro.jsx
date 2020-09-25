import React from 'react';
import '../Estilos/App.css';
import Logo_domiapp from '../Images_proyectos/Logo_domiApp.png';
import 'bootstrap/dist/css/bootstrap.min.css';

class Registro extends React.Component {
        render() {
                return (
                        <div className="App">
                        <header className="App-header">
                         <a className="header_registro" href="/">
                         Registrarse
                        </a>
                        </header>
                        <div className="container vh-100 mt-4">
                        <img src={Logo_domiapp} alt="" className="logo_domiapp"/>
                                <div className="row">
                                        <div className="col"></div>
                                        <div className="col-6 border">
                                                <h1 className="text-center mt-4">Iniciar Sesión</h1>
                                                <br />
                                                <form >
                                                        <div className="form-group">
                                                                <label className="inputEmail">Usuario</label>
                                                                <input
                                                                        type="email"
                                                                        name="email"
                                                                        id="inputEmail"
                                                                        className="form-control"
                                                                        required
                                                                        placeholder="Nombre de usuario"
                                                                        />
                                                        </div>
                                                        <div className="form-group ">
                                                                <label className="Text_contraseña">Contraseña</label>
                                                                <input className="cajon_password"
                                                                        type="password"
                                                                        name="contrasena"
                                                                        id="inputPassword"
                                                                        className="form-control"
                                                                        required
                                                                        placeholder="Contraseña"
                                                                        />
                                                        </div>
                                                        <button className=" btn btn-primary btn-block" type="submit">
                                                                <strong>Iniciar Sesión</strong>
                                                        </button>
                                                </form>
                                                <br />
                                                <h6></h6>
                                                <br />
                                        </div>
                                        <div className="col"></div>
                                </div>
                        </div>
                </div>
                );
        }
}

export default Registro;
