/*IMPORT-REACT*/
import React from 'react';
import '../Estilos/Favoritos.css';
/*IMPORT-BOOTSTRAP*/
import 'bootstrap/dist/css/bootstrap.min.css';
/*IMPORT-COMPONENTS*/
import Footer from './Footer';
import Navbar from './Navbar-btn';
import Card from "../Componentes/card";
import data from "../data/card.json";
/*IMPORT-IMAGES*/


export default class Favoritos extends React.Component {
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
                <div className="mt-5"></div>
                <div className="container">
                    <div className="row mb-5 justify-content-center">
                        <div className="col-lg-10 col-12" id="">
                            <h1 className="text-center mt-4" id="Texto_inicio">Favoritos</h1>
                            <hr />
                            <div className="mt-5"></div>
                            <div className="mt-1 col-12 text-justify" id="bandeja_fav">
                                <div className="col-lg-12 col-md-12 col-sm-6">
                                    <Card time="Fecha: 12/02/2019" farm="Farmacia: Athena SS" data={this.state.data} />
                                </div>
                                <div className="mb-2"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}