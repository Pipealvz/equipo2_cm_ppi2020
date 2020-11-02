import React from 'react';
import ReactDOM from 'react-dom';
/*HELP-TO-PANAS*/
import Rutas from './Rutas/Rutas';
/*CARGA-INICIAL*/
import Cargaone from './Componentes/Carga_inicial';
ReactDOM.render(
  <React.StrictMode>
    <Rutas />
  </React.StrictMode>,
  document.getElementById('root')
);
