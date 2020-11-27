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
import formula from '../'

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
                                <Navbar id="header_global"/>
                                <div className="mt-5"></div>
                                <div className="container">
                                        <div className="row mb-5 justify-content-center">
                                                        <div className="col-12 col-lg-11 align-self-start" id="Bloque_solicitud">
                                                                <h1 className="text-center" id="Texto_solicitud">Pedidos</h1>
                                                                <hr />
                                                                <div className="mt-5"></div>
                                                                <div>
                                                                <Card className="text" time="Fecha: 12/02/2019" farm="Usuario: Androly-San" data={this.state.data} />
                                                                </div>
                                                                <h6></h6>
                                                                <br />
                                                        </div>
                                                </div>
                                        </div>
                                <div className="align-self-end">
                                <Footer />
                                </div>
                        </div>
                );
        }
}
export default Solicitud;