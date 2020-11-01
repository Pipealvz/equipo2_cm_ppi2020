/*IMPORT-REACT*/
import React from 'react';
/*IMPORT-BOOTSTRAP*/
import 'bootstrap/dist/css/bootstrap.min.css';
/*IMPORT-IMAGES*/
import gitHub from '../Images_proyectos/git_icon.png';
import gmail from '../Images_proyectos/gmail_icon.png';
import discord from '../Images_proyectos/discord_icon.png';
import icon_domiApp from '../Images_proyectos/Logo_domiApp-icon.png';
/*IMPORT-COMPONENTS*/
import '../Estilos/Footer.css';

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="row-fluid justify-content-center">

                    <div className="accordion md-accordion accordion-1" role="tablist">
                        <div className="card" id="red-social">
                            <button id="text-social" className="white-text font-weight-bold text-uppercase" data-toggle="collapse" href="#collapse97" aria-expanded="true" aria-controls="collapse97">
                                <span> Redes sociales</span>
                            </button>
                            <div id="collapse97" className="bg-light collapse show" role="tabpanel" aria-labelledby="heading97" data-parent="#accordionEx23">
                                <div className="row justify-content-around card-body">
                                    <form action="https://discord.gg/N4xBDFH9" target="_blank">
                                        <button type="summit" className="btn-social">
                                            <div>
                                                <img src={discord} alt="" />
                                            </div>
                                            <div className="">Discord</div>
                                        </button>
                                    </form>
                                    <button className="btn-social">
                                        <div>
                                            <img src={gmail} alt="" />
                                        </div>
                                        <div className="">Gmail</div>
                                    </button>
                                    <form action="https://github.com/Felipe-Alvarez/equipo2_cm_ppi2020/projects" target="_blank">
                                        <button className="btn-social">
                                            <div>
                                                <img src={gitHub} alt="" />
                                            </div>
                                            <div className="">GitHub</div>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="accordion md-accordion accordion-1" role="tablist">
                        <div className="card" id="more-info">
                        <button id="text-more" className="white-text font-weight-bold text-uppercase" data-toggle="collapse" href="#collapse96" aria-expanded="true" aria-controls="collapse96">
                            <div className="card-header z-depth-1" role="tab" id="heading96">
                                    <span>Más información</span>
                            </div>
                            </button>
                            <div id="collapse96" className="collapse show" role="tabpanel" aria-labelledby="heading96"
                                data-parent="#accordionEx23">
                                <div className="card-body">
                                    <p className="text-dark info">
                                        DomiApp es un aplicativo que ayude a los usuarios discapacitados y apoya a las entidades de salud y a los usuarios que las componen, de una forma más eficaz y sencilla en la entrega de los productos farmacéuticos facilitándoles una plataforma para solicitar y reclamar sus medicamentos, y así despejar las multitudes que se presentan al momento de reclamar medicinas, evitando esfuerzos innecesarios.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="row justify-content-around" id="footer-copy">
                            <div className="align-self-center">
                                <img src={icon_domiApp} alt="" />
                            </div>
                            <div className="align-self-center">© DomiApp 2020</div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
export default Footer;