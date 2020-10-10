import React from 'react';
import gitHub from '../Images_proyectos/git_icon.png';
import gmail from '../Images_proyectos/gmail_icon.png';
import discord from '../Images_proyectos/discord_icon.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Estilos/Footer.css';

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col container-body" id="footer-all">
                            <div className="col-6" id="section-info">
                                <div className="info_block">
                                    <h1>Más información sobre el proyecto</h1>
                                    <p className="Text_info">DomiApp es un proyecto creado por 3 estudiantes
                                    de la Institución Educativa Concejo de Medellín, con el fin de ayudar a los más discapacitados
                                                provisionando un ayuda en el sistema de entrega de medicamentos.</p>
                                </div>
                            Copyright © DomiApp 2020
                            </div>
                            <div className="col-6" id="img_block">                             
                                <div className="section_images_footer">
                                    <div className="Footer_git">
                                        <li className="icon">
                                            <div className="d-block">
                                        <a id="footer_github_texto" href="https://github.com/Felipe-Alvarez/equipo2_cm_ppi2020" target="_blank"> <img src={gitHub} /> GitHub</a>
                                            </div>
                                        </li>
                                    </div>
                                    <div className="Footer_discord">
                                        <li className="icon">
                                            <div className="d-block">
                                        <a id="footer_discord_texto" href="https://discord.gg/YdgEsC" target="_blank"><img src={discord} /> Discord</a>
                                            </div>
                                        </li>
                                    </div>
                                    <div className="Footer_gmail">
                                        <li className="icon">
                                            <div className="d-block">
                                        <button className="footer_gmail_texto portapapeles" data-clipboard-text="Pipedim03@mail.com"> <img src={gmail} /> Gmail</button>
                                            </div>
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