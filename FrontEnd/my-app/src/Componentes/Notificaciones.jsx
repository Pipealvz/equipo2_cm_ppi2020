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
                <div className="mt-5"></div>
                <div className="container">
                    <div className="row vh-100 mb-5 justify-content-center">
                        <div className="justify-content-center col-12 col-lg-5 align-self-start" id="Bloque_solicitud">
                            <h1 className="text-center" id="Texto_solicitud">Notificaciones</h1>
                            <hr />
                            <div className="row text-justify col-11 col-lg-5">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus tenetur illo neque at eos, iure, rerum eveniet ea, aliquam officiis culpa ipsa dignissimos esse accusamus. Magni accusamus quaerat amet illum.
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