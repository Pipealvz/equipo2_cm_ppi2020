/*IMPORT-REACT*/
import React from 'react';
import '../Estilos/Historial.css';
import { Link } from 'react-router-dom';
/*IMPORT-BOOTSTRAP*/
import 'bootstrap/dist/css/bootstrap.min.css';
/*IMPORT-COMPONENTS*/
import Footer from './Footer';
import Navbar from './Navbar-btn';
/*IMPORT-IMAGES*/
import img_form from '../Images_proyectos/img-form-sura.jpg';


class Historial extends React.Component {
    render() {
        return (
            <div className="App">
                <Navbar id="header_global" />
                <br />
                <div className="container vh-100">
                    <div className="row">
                        <div className="col-12">
                            <div className="mt-1 col-12" id="Bloque_Historial">
                                <h1 className="text-center mt-4" id="Texto_inicio">Historial</h1>
                                <br />
                                <div className="container">
                                    <div className="row col-12" id="block-his">
                                        <div className="row mt-1 ml-2">
                                            <span id="text-his">Fecha: 21/08/2019</span>
                                            <br />
                                        </div>
                                        <div className="row mt-1 ml-2">
                                            <p id="text-his">Farmacia: Athena SS</p>
                                            <br />
                                        </div>
                                        <div className="row mt-1 ml-2 col">
                                            <img id="img-form" src={img_form} className="img-fluid"/>
                                        </div>
                                    </div>
                                </div>
                                <h6></h6>
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
export default Historial;