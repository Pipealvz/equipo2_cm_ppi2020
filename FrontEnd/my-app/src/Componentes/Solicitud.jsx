import React from 'react';
import '../Estilos/Solicitud.css';
import Logo_domiapp from '../Images_proyectos/Logo_domiApp.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import Navbar from './Navbar';

class Solicitud extends React.Component {
        render() {
                return (
                        <div className="App">
                                <Navbar titulo="Solicitudes" />
                                <div className="container vh-100">
                                        <div className="row">
                                                <div className="col"></div>
                                                <div className="mt-1 col-10" id="Bloque_solicitud">
                                                        <h1 className="text-center mt-4" id="Texto_inicio">Solicitudes</h1>
                                                        <br />
                                                        <div class="dropdown">
                                                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                        Dropdown button
                                                                </button>
                                                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                        <a class="dropdown-item" href="#">Action</a>
                                                                        <a class="dropdown-item" href="#">Another action</a>
                                                                        <a class="dropdown-item" href="#">Something else here</a>
                                                                </div>
                                                        </div>
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
export default Solicitud;