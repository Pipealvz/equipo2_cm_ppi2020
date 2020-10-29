/*IMPORT-REACT*/
import React from "react";
import '../Estilos/Notificaciones.css';
/*IMPORT-BOOTSTRAP*/
import 'bootstrap/dist/css/bootstrap.min.css';
/*IMPORT-COMPONENTS*/
import Footer from './Footer';
import Navbar from './Navbar-btn';


class Notificaciones extends React.Component {
    render() {
        return (
            <div className="App-n">
                <Navbar id="header_global" />
                <br/>
                <div className="container vh-100">
                    <div className="row">
                        <div className="col">
                            <div className="col-12">
                                <h1 className="text-center mt-4" id="Texto_inicio">Notificaciones</h1>
                                <hr/>
                                <br/>
                                <div className="row mt-2 col-sm-12 col-lg-8" id="Bloque_notificacion">
                                    <p className="mt-2 text-not">Farmacia Athena SS</p>
                                    <p className="text-not-2">¡Tú pedido está en camino!, recuerda estar atento en todo momento</p>
                                    <br />
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
export default Notificaciones;