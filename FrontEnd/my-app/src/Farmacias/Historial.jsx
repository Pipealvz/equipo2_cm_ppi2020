/*IMPORT-REACT*/
import React from "react";
import '../Estilos/Historial.css';
/*IMPORT-BOOTSTRAP*/
import 'bootstrap/dist/css/bootstrap.min.css';
/*IMPORT-COMPONENTS*/
import Footer from './Footer';
import Navbar from './Navbar-btn';
import Card from "../Componentes/card";
import data from "../data/card.json";
/*IMPORT-IMAGES*/

class Historial extends React.Component {
    constructor() {
        super();
        this.state = {
            data: data
        };
    }
    render() {
        return (
            <div className="App-h">
                <Navbar id="header_global" />
                <br />
                <div className="container">
                    <div className="row justify-content-center mb-5">
                            <div className="" id="">
                                <h1 className="text-center mt-4" id="Texto_inicio">Historial</h1>
                                <hr/>
                                <br/>
                                <div className="mt-1 col-12 col-lg-12" id="Bloque_Historial">
                                    <br />
                                    <div className="col-lg-12 col-md-12 col-sm-6">
                                    <Card className="text" time="Fecha: 12/02/2019" farm="Usuario: Androly-San" data={this.state.data} />
                                    </div>
                                    <h6>
                                    </h6>
                                    <br />
                                </div>
                                <hr/>
                                <div className="mt-1 col-12 col-lg-12" id="Bloque_Historial">
                                    <br />
                                    <div className="col-lg-12 col-md-12 col-sm-6">
                                    <Card className="text" time="Fecha: 24/01/2018" farm="Farmacia: Los rosales" data={this.state.data} />
                                    </div>
                                    <h6>
                                    </h6>
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