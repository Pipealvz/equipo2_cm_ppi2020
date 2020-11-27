/*IMPORT-REACT*/
import React from "react";
import '../Estilos/Notificaciones.css';
/*IMPORT-BOOTSTRAP*/
import 'bootstrap/dist/css/bootstrap.min.css';
/*IMPORT-COMPONENTS*/
import Footer from './Footer';
import Navbar from './Navbar-btn';


class Notificaciones_f extends React.Component {
    render() {
        return (
            <div className="App-n">
                <Navbar id="header_global" />
                <div className="mt-5"></div>
                <div className="container">
                    <div className="row vh-100 mb-5 justify-content-center">
                        <div className="justify-content-center col-12 col-lg-5 align-self-start" id="Bloque_solicitud">
                            <h1 className="text-center" id="Texto_solicitud">Notificaciones</h1>
                            <hr />
                            <div className="col-12 col-lg-12 text-justify" id="bandeja_not">
                                <p clasName="title-not">Androly-San</p>
                                <p className="text-farm">¡Ha hecho una solicitud de pedido! no lo dejes sin medicamentos.</p>
                            </div>
                            <div className="mt-5"></div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
export default Notificaciones_f;