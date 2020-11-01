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
                <div className="container-fluid">
                    <div className="row justify-content-around" id="copyright">
                        <div className="align-self-center">
                            <img src={icon_domiApp} alt="" />
                        </div>
                        <div className="align-self-center">© DomiApp 2020</div>
                    </div>
                    <div className="row justify-content-around" id="more-info">
                        <div className="align-self-center">
                            <img src={icon_domiApp} alt="" />
                        </div>
                        <div className="align-self-center">© DomiApp 2020</div>
                    </div>
                </div>
            </footer>
        );
    }
}
export default Footer;