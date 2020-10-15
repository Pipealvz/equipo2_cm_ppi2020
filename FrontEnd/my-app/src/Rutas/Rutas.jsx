import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Inicio_sesion from '../Componentes/Inicio_sesion';
import Registro from '../Componentes/Registro';
import Solicitud from '../Componentes/Solicitud';
import Favoritos from '../Componentes/Favoritos';
import Historial from '../Componentes/Historial';
import Ajustes from '../Componentes/Ajustes';
import Notificaciones from '../Componentes/Notificaciones';

function Rutas() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Inicio_sesion} />
                <Route exact path="/Registro" component={Registro} />
                <Route exact path="/Solicitud" component={Solicitud} />
                <Route exact path="/Ajustes" component={Ajustes} />
                <Route exact path="/Favoritos" component={Favoritos} />
                <Route exact path="/Historial" component={Historial} />
                <Route exact path="/Notificaciones" component={Notificaciones} />
            </Switch>
        </BrowserRouter>
    )
}
export default Rutas;