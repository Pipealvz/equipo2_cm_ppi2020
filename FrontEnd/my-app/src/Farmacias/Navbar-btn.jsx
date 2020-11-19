/*IMPORT-REACT-COMPONENTS*/
import React from 'react'
import '../Estilos/Navbar.css'
import { NavLink } from 'react-router-dom';
/*IMPORT-BOOTSTRAP*/
import 'bootstrap/dist/css/bootstrap.min.css';
/*IMPORT-IMAGNES*/
import icon_not from '../Images_proyectos/btn-icon-not.png';
import icon_fav from '../Images_proyectos/btn-icon-fav.png';
import icon_ped from '../Images_proyectos/btn-icon-ped.png';
import icon_aju from '../Images_proyectos/btn-icon-aju.png';
import icon_his from '../Images_proyectos/btn-icon-his.png';
import icon_domiApp from '../Images_proyectos/Logo_domiApp-icon.png';

export default class Navbar_btn_farm extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-light sticky-top">
        <img src={icon_domiApp} alt="img-fluid" />
        <button id="btn-burger" className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="col navbar-nav justify-content-around" id="btn-zone">
            <li className="nav-item active nav-link" id="nav-sol">
              <NavLink to="/Solicitud_f" className="Link-btn">
                <button className="btn-sol">
                  <div className="img-sol"><img src={icon_ped} /></div>
                  <div className="text-sol">Pedidos</div>
                </button>
              </NavLink>
            </li>
            <hr className="m-0" />
            <li class="nav-item nav-link" id="nav-aju">
              <NavLink to="/Ajustes_f" className="Link-btn">
                <button className="btn-aju">
                  <div className=""><img src={icon_aju} /></div>
                  <div>Ajustes</div>
                </button>
              </NavLink>
            </li>
            <hr className="m-0" />
            <li class="nav-item nav-link" id="nav-his">
              <NavLink to="/Historial_f" className="Link-btn">
                <button className="btn-his">
                  <div className=""><img src={icon_his} /></div>
                  <div className="">Historial</div>
                </button>
              </NavLink>
            </li>
            <hr className="m-0" />
            <li className="nav-item nav-link" id="nav-not">
              <NavLink to="/Notificacion_f" className="Link-btn">
                <button className="btn-not">
                  <div className=""><img src={icon_not} /></div>
                  <div className="">Notificaciones</div>
                </button>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}