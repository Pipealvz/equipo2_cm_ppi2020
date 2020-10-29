/*IMPORT-REACT*/
import React from 'react';
import '../Estilos/Solicitud.css';
/*IMPORT-BOOTSTRAP*/
import 'bootstrap/dist/css/bootstrap.min.css';
/*IMPORT-COMPONENTS*/
import Footer from './Footer';
import Navbar from './Navbar-btn';
import Card from "../Componentes/card";
import data from "../data/card.json";
/*IMPORT-IMAGES*/


class Solicitud extends React.Component {
        constructor() {
                super();
                this.state = {
                    data: data
                };
            }
            render() {
                return (
                    <div className="App-s">
                        <Navbar id="header_global" />
                        <br />
                        <div className="container vh-100">
                            <div className="row">
                                <div className="col-12">
                                    <div className="" id="">
                                        <h1 className="text-center mt-4" id="Texto_inicio">Favoritos</h1>
                                        <hr/>
                                        <br/>
                                        <div className="mt-1 col-12" id="Bloque_Historial">
                                            <br />
                                            <div className="col-lg-12 col-md-12 col-sm-6">
                                            <Card className="text" time="Fecha: 12/02/2019" farm="Farmacia: Athena SS" data={this.state.data} />
                                            </div>
                                            <h6>
                                            </h6>
                                            <br />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Footer />
                    </div>
                );
            }
        }
export default Solicitud;