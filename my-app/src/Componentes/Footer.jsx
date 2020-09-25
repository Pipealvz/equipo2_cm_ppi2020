import React from 'react';
import gitHub from '../Images_proyectos/github.png';
import gmail from '../Images_proyectos/gmail.png';
import facebook from '../Images_proyectos/facebook.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Estilos/App.css';

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="container-footer-all">
                    <div className="container-footer">
                        <div className="container-body">
                            <div className="col">
                                <div className="info_block">
                                    <h1>Más información</h1>
                                    <p className="Text_info">DomiApp es un proyecto creado por 3 estudiantes
                                    de la Institución Educativa Concejo de Medellín, con el fin de ayudar a los más dispacaditados
                                                provisionando un ayuda en el sistema de entrega de medicamentos.</p><a href="https://github.com/Felipe-Alvarez/equipo2_cm_ppi2020">¡Click para ir a gitHub!</a>
                                </div>
                            </div>
                            <div className="col2">
                                <h1>Información de contácto</h1>
                                <div className="section_images_footer">
                                    <div className="Footer_git">
                                        <li className="icon">
                                            <img src={gitHub} /><a href="" >gitHub</a>
                                        </li>
                                    </div>
                                    <div className="Footer_facebook">
                                        <li className="icon">
                                            <img src={facebook} /><a href="">Facebook</a>
                                        </li>
                                    </div>
                                    <div className="Footer_gmail">
                                        <li className="icon">
                                            <img src={gmail} /><a href="" >Gmail</a>
                                        </li>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
export default Footer;