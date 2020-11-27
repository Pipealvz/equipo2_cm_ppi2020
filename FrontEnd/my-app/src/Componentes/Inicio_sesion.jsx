/*IMPORT-REACT*/
import React,{useState} from 'react';
import { Link, useHistory } from 'react-router-dom'; //IMPORT useHistory
/*IMPORT-BOOTSTRAP*/
import 'bootstrap/dist/css/bootstrap.min.css';
/*IMPORT-COMPONENTS*/
import '../Estilos/Inicio_sesion.css';
/*IMPORT-IMAGES*/
import logo_domiapp from '../Images_proyectos/Logo_domiApp.png';
/*IMPORT AXIOS { GET, POST, PUT, DELETE }*/
import axios from 'axios'


export default function Inicio_sesion() {

        const history = useHistory(); //DEFINIMOS useHistory
        const [correo, setCorreo] = useState("");
        const [clave, setPassword] = useState("");
        const eventoRegistrar = (e)=>{
        e.preventDefault();
        const loginUser = {
                correo:correo,
                contraseña:clave
        }
        axios.post('https://equipo2cmppi2020-2.felipealvarez8.repl.co/api/usuario/login',loginUser)
                .then(()=> {
                        if(eventoRegistrar === correo,clave){
                                history.push("Solicitud");
                        }
                        alert('Lo siento, algo anda mal :/')
                })
                .catch((error)=>{
                        console.log(error)
                })
        }
        return (
                <div className="App">
                        <div className="container vh-100" id="container">
                                <div className="row vh-100 justify-content-end">
                                        <div className="col-12 col-lg-4 align-self-center" id="Bloque_inicio">
                                                <img src={logo_domiapp} className="img-fluid" />
                                                <h1 className="text-center mt-4" id="Texto_inicio">Iniciar Sesión</h1>
                                                <hr />
                                                <br />
                                                <form onSubmit={eventoRegistrar} method="post" name="Loginform">
                                                        <div className="form-group">
                                                                <input
                                                                        type="email"
                                                                        name="correo"
                                                                        id="i-email"
                                                                        className="form-control"
                                                                        required
                                                                        placeholder="correo"
                                                                        onChange={function({target}){
                                                                                setCorreo(target.value);
                                                                        }}
                                                                />
                                                                <label for="name" className="form-label">Correo</label>
                                                                <br />
                                                                <input
                                                                        type="password"
                                                                        name="contrasena"
                                                                        id="i-pass"
                                                                        className="form-control"
                                                                        required
                                                                        placeholder="contraseña"
                                                                        onChange={function({target}){
                                                                                setPassword(target.value);
                                                                        }}
                                                                />
                                                                <label for="password" className="form-label">Contraseña</label>
                                                        </div>
                                                        <Link id="link" to="/Solicitud">
                                                                <button className=" btn btn-dark btn-block mt-0"  type="submit" id="btn_inicio">
                                                                        <strong>Iniciar sesión</strong>
                                                                </button>
                                                                <hr />
                                                        </Link>
                                                        <span className="link-registro">¿No tienes cuenta de usuario? <Link id="link" to="/Registro">¡Registrate!</Link>
                                                        </span>
                                                        <div className="row"></div>
                                                        <span className="link-registro">¿Eres una farmacia? <Link id="link" to="/Login.farmacia">¡Inicia sesión!</Link>
                                                        </span>
                                                </form>
                                                <br />
                                        </div>
                                </div>
                        </div>
                </div>
        );
}