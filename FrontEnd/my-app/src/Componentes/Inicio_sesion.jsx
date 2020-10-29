/*IMPORT-REACT*/
import React from 'react';
import { Link } from 'react-router-dom';
/*IMPORT-BOOTSTRAP*/
import 'bootstrap/dist/css/bootstrap.min.css';
/*IMPORT-COMPONENTS*/
import '../Estilos/App.css';
import Footer from './Footer';
/*IMPORT-IMAGES*/ 

class Inicio_sesion extends React.Component {
        render(){
                return (
                        <div className="App">
                                <div className="container-fluid vh-100" id="container">
                                        <div className="row vh-100 justify-content-center">
                                                <div className="col-12 col-lg-6 align-self-end" id="Bloque_inicio">
                                                        <h1 className="text-center mt-4" id="Texto_inicio">Iniciar Sesión</h1>
                                                        <hr/>
                                                        <br/>
                                                        <form >
                                                                <div className="form-group">
                                                                        <label className="input_Email">Correo</label>
                                                                        <input
                                                                                type="email"
                                                                                name="email"
                                                                                id="inputEmail"
                                                                                className="form-control"
                                                                                required
                                                                                placeholder="Correo"
                                                                        />
                                                                </div>
                                                                <div className="form-group ">
                                                                        <label className="input_Password">Contraseña</label>
                                                                        <input
                                                                                type="password"
                                                                                name="contrasena"
                                                                                id="inputPassword"
                                                                                className="form-control"
                                                                                required
                                                                                placeholder="Contraseña"
                                                                        />
                                                                </div>
                                                                <Link id="link" to="/Solicitud"> 
                                                                <button className=" btn btn-primary btn-block" type="submit" id="btn_inicio">                                                                                                                                           
                                                                 <strong>Iniciar Sesión</strong>                                                       
                                                                </button>
                                                                <hr/>
                                                                </Link>                                                                   
                                                                <span className="link-registro">¿No tienes cuenta? <Link id="link" to="/Registro"> ¡¡Registrate!!</Link>
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
export default Inicio_sesion;