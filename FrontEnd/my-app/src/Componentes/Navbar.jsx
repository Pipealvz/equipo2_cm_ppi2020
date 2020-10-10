import React from 'react'
import '../Estilos/Navbar.css'
import icon_not from '../Images_proyectos/btn-icon-not.png';
import icon_fav from '../Images_proyectos/btn-icon-fav.png';
import icon_sol from '../Images_proyectos/btn-icon-sol.png';
import icon_aju from '../Images_proyectos/btn-icon-aju.png';
import icon_his from '../Images_proyectos/btn-icon-his.png';

class Navbar extends React.Component {
    render() {
        return (
            <div className='row mt-0 container-fluid'>
                <nav className="navbar navbar-default bg-primary" role="navigation">
                    <div className="navbar-header">
                    header
                    </div>
                    <button className="btn-his" type="button">
                                <img src={icon_his} />
                    </button>
                </nav>
            </div>
           /* <nav class="navbar navbar-expand-lg navbar-light bg-primary">
                <div class="navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="justify-content-start">
                            <button className="btn-his">
                                <img src={icon_his} />
                            </button>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown</a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#">Disabled</a>
                        </li>
                    </ul>
                </div>
            </nav>*/
        );
    };
};
export default Navbar;