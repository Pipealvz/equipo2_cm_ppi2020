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

export default class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="justify-content-center">
                    <div className="justify-content-center">

                    <div className="" id="footer-copy">
                            <div className="align-self-center">
                                <img src={icon_domiApp} alt="" />
                            </div>
                            <div className="align-self-center">© DomiApp 2020</div>
                    </div>
                        
                        <div className="row-fluid" id="more-info">
                            <button id="text-more" className="btn btn-light text-uppercase text-dark" type="button" data-toggle="collapse" data-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample">
                                Redes sociales
                        </button>
                            <div className="collapse" id="collapseExample1">
                                <div className="card card-body">
                                    <div className="row justify-content-around">
                                        <form action="https://discord.gg/aQ7RnVMZGJ" target="_blank">
                                            <button type="summit" className="btn-social">
                                                <div>
                                                    <img src={discord} />
                                                </div>
                                                <div className="">Discord</div>
                                            </button>
                                        </form>
                                        <button className="btn-social">
                                            <div>
                                                <img src={gmail} />
                                            </div>
                                            <div className="">Gmail</div>
                                        </button>
                                        <form action="https://github.com/Felipe-Alvarez/equipo2_cm_ppi2020/projects" target="_blank">
                                            <button className="btn-social">
                                                <div>
                                                    <img src={gitHub} />
                                                </div>
                                                <div className="">GitHub</div>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="justify-content-center">
                            <div className="row-fluid" id="more-info">
                                <button id="text-more" className="btn btn-dark text-uppercase text-white" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                    Más información
                        </button>
                                <div className="collapse" id="collapseExample">
                                    <div className="card card-body bg-dark">
                                        <p className="text-white text-justify">
                                            DomiApp es un aplicativo que ayude a los usuarios discapacitados y apoya a las entidades de salud y a los usuarios que las componen, de una forma más eficaz y sencilla en la entrega de los productos farmacéuticos facilitándoles una plataforma para solicitar y reclamar sus medicamentos, y así despejar las multitudes que se presentan al momento de reclamar medicinas, evitando esfuerzos innecesarios.
                                    </p>
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