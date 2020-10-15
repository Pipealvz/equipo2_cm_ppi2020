/*IMPORT-REACT-COMPONENTS*/
import React from 'react'
import '../Estilos/Navbar.css'
import { NavLink } from 'react-router-dom';
/*IMPORT-BOOTSTRAP*/
import 'bootstrap/dist/css/bootstrap.min.css';
/*IMPORT-IMAGNES*/
import icon_not from '../Images_proyectos/btn-icon-not.png';
import icon_fav from '../Images_proyectos/btn-icon-fav.png';
import icon_sol from '../Images_proyectos/btn-icon-sol.png';
import icon_aju from '../Images_proyectos/btn-icon-aju.png';
import icon_his from '../Images_proyectos/btn-icon-his.png';
import icon_domiApp from '../Images_proyectos/Logo_domiApp-icon.png';

class Navbar_btn extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-light bg-primary sticky-top">
        <img src={icon_domiApp} alt="img-fluid" />
        <button id="btn-burger" className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="col navbar-nav mr-auto" id="btn-zone">
            <li className="col-sm-2 col-md-2 nav-item active nav-link">
              <NavLink to="/Solicitud" className="Link-btn">
              <button className="btn-sol">
                  <img src={icon_sol} />
                </button>
              <div className="text-btn">
                Solicitud
              </div>
              </NavLink>
            </li>
            <hr className="m-0"/>
            <li class="col-sm-2 col-md-2 nav-item nav-link">
            <NavLink to="/Ajustes" className="Link-btn">
              <button className="btn-aju">
                <img src={icon_aju} />
              </button>
              <div className="text-btn">
                Ajustes
              </div>
              </NavLink>
            </li>
            <hr className="m-0"/>
            <li class="col-sm-2 col-md-2 nav-item nav-link">
            <NavLink to="/Favoritos" className="Link-btn">
              <button className="btn-fav">
                <img src={icon_fav} />
              </button>
              <div className="text-btn">
                Favoritos
              </div>
              </NavLink>
            </li>
            <hr className="m-0"/>
            <li class="col-sm-2 col-md-2 nav-item nav-link">
            <NavLink to="/Historial" className="Link-btn">
              <button className="btn-his">
                <img src={icon_his} />
              </button>
              <div className="text-btn">
                Historial
                </div>
                </NavLink>
            </li>
            <hr className="m-0"/>
            <li className="col-sm-2 col-md-2 nav-item nav-link">
            <NavLink to="/Notificaciones" className="Link-btn">
              <button className="btn-not">
                <img src={icon_not} />
              </button>
              <div className="text-btn">
                Notificaciones
              </div>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
export default Navbar_btn;