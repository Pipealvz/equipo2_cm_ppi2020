/*IMPORT-REACT*/
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
/*IMPORT-COMPONENTS*/
import Inicio_sesion from '../Componentes/Inicio_sesion';
import Registro from '../Componentes/Registro';
import Solicitud from '../Componentes/Solicitud';
import Favoritos from '../Componentes/Favoritos';
import Historial from '../Componentes/Historial';
import Ajustes from '../Componentes/Ajustes';
import Notificaciones from '../Componentes/Notificaciones';
/*FARMACIAS*/
import Ajustes_f from '../Farmacias/Ajustes';
import Historial_f from '../Farmacias/Historial';
import Solicitud_f from '../Farmacias/Solicitud';
import Notificacion_f from '../Farmacias/Notificaciones_f';
import Ajustes_sub_name_f from '../Farmacias/Ajustes_sub_mail_farm';
import Ajustes_sub_pass_f from '../Farmacias/Ajustes_sub_password_farm';
import Ajustes_sub_mail_f from '../Farmacias/Ajustes_sub_mail_farm';
import login from '../Farmacias/login_farm'
/*IMPORT-SUB-COMPONENT*/
import Ajustes_sub_name from '../Componentes/Ajustes_sub_name';
import Ajustes_sub_pass from '../Componentes/Ajustes_sub_password';
import Ajustes_sub_mail from '../Componentes/Ajustes_sub_mail';
/*FESTIVO*/
import Inicio_festivo from '../Componentes_festivos/Inicio_sesion_halloween';
import Registro_festivo from '../Componentes_festivos/Registro_halloween';
/*WEB*/
import web from '../web/web'

export default function Rutas() {
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
                
                <Route exact path="/Ajustes/Editar_nombre" component={Ajustes_sub_name} />
                <Route exact path="/Ajustes/Editar_correo" component={Ajustes_sub_mail} />
                <Route exact path="/Ajustes/Editar_contraseña" component={Ajustes_sub_pass} />

                <Route exact path="/Ajustes/Editar_nombre_farm" component={Ajustes_sub_name_f} />
                <Route exact path="/Ajustes/Editar_correo_farm" component={Ajustes_sub_mail_f} />
                <Route exact path="/Ajustes/Editar_contraseña_farm" component={Ajustes_sub_pass_f} />
                <Route exact path="/Solicitud_f" component={Solicitud_f} />
                <Route exact path="/Ajustes_f" component={Ajustes_f} />
                <Route exact path="/Historial_f" component={Historial_f} />
                <Route exact path="/Notificacion_f" component={Notificacion_f} />
                <Route exact path="/login.farmacia" component={login}/>

                <Route exact path="/_h" component={Inicio_festivo} />
                <Route exact path="/Registro_h" component={Registro_festivo} />

                <Route exact path='/registro.farmacia' component={web}/>
            </Switch>
        </BrowserRouter>
    )
}