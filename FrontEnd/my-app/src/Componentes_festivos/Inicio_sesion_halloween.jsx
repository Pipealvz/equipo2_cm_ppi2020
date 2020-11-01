/*IMPORT-REACT*/
import React from 'react';
import { Link } from 'react-router-dom';
/*IMPORT-BOOTSTRAP*/
import 'bootstrap/dist/css/bootstrap.min.css';
/*IMPORT-COMPONENTS*/
import './Inicio_sesion_h.css';
/*IMPORT-IMAGES*/ 
import logo_domiapp from '../Images_proyectos/Logo_domiApp.png';

class Inicio_sesion_h extends React.Component {
        render(){
                return (
                        <div className="App-f">
                                <div className="container vh-100" id="container">
                                        <div className="row vh-100 justify-content-start">
                                                <div className="col-12 col-lg-4 align-self-center" id="Bloque_inicio-f">
                                                        <img src={logo_domiapp} className="img-fluid img-h"/>
                                                        <h1 className="text-center mt-4" id="Texto_inicio-f">Iniciar Sesión</h1>
                                                        <hr/>
                                                        <br/>
                                                        <form>
                                                                <div className="form-group" id="form-group">
                                                                     <input
                                                                                type="email"
                                                                                name="correo"
                                                                                id="i-email-f"
                                                                                className="form-control f"
                                                                                required
                                                                                placeholder="correo"
                                                                     />
                                                                <label for="name" className="form-label" id="form-label">Correo</label>
                                                                     <br/>
                                                                     <input
                                                                                type="password"
                                                                                name="contrasena"
                                                                                id="i-pass-f"
                                                                                className="form-control f"
                                                                                required
                                                                                placeholder="contraseña"
                                                                     />
                                                                <label for="password" className="form-label" id="form-label">Contraseña</label>
                                                                </div>
                                                                <Link id="link-f" to="/Solicitud"> 
                                                                <button className=" btn btn-primary btn-block mt-0" type="submit" id="btn_inicio-f">
                                                                 <strong>Iniciar sesión</strong>
                                                                </button>
                                                                <hr/>
                                                                </Link>
                                                                <span className="link-registro-f">¿No tienes cuenta? <Link id="link" to="/Registro_h">¡Registrate!</Link>
                                                                </span> 
                                                        </form>
                                                        <br/>
                                                </div>
                                        </div>
                                </div>              
                        </div>  
                );
        }
}
export default Inicio_sesion_h;