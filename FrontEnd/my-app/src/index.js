import React from 'react';
import ReactDOM from 'react-dom';
import Inicio_sesion from './Componentes/Inicio_sesion.jsx';
import Registro from './Componentes/Registro';
import Solicitud from './Componentes/Solicitud';
import Footer from './Componentes/Footer';
import Enlace from './Rutas/Rutas'

ReactDOM.render(
  <React.StrictMode>
    <Enlace />
  </React.StrictMode>,
  document.getElementById('root')
);
