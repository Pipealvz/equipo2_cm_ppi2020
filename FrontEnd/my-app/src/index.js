import React from 'react';
import ReactDOM from 'react-dom';
import Inicio_sesion from './Componentes/Inicio_sesion.jsx';
import Registro from './Componentes/Registro';
import Solicitud from './Componentes/Solicitud';

ReactDOM.render(
  <React.StrictMode>
    <Solicitud />
  </React.StrictMode>,
  document.getElementById('root')
);
