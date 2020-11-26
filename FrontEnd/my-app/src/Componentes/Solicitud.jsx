/*IMPORT-REACT*/
import React, {useState} from 'react';
import '../Estilos/Solicitud.css';
/*IMPORT-BOOTSTRAP*/
import 'bootstrap/dist/css/bootstrap.min.css';
/*IMPORT-COMPONENTS*/
import Footer from './Footer';
import Navbar from './Navbar-btn';
/*IMPORT-IMAGES*/
import btn_form from '../Images_proyectos/btn-add-formula.png';
import axios from 'axios';

export default class Solicitud extends React.Component{

        state = {
                farmacia : []
        }

        async getFarmacia(){
                const res = await axios.get('https://baackendapp.herokuapp.com/api/farmacia') 
                //console.log(res.data) // TEST DEL MÉTODO
                if(res){
                        this.setState({farmacia:res.data})
                }
        }
        async componentDidMount(){
                await this.getFarmacia();
        }
                render(){
                return (
                        <div className="App-s">
                                <Navbar id="header_global"/>
                                <div className="mt-5"></div>
                                <div className="container">
                                        <div className="row mb-5 justify-content-center">
                                                        <div className="col-12 col-lg-5 align-self-start" id="Bloque_solicitud">
                                                                <h1 className="text-center" id="Texto_solicitud">Solicitudes</h1>
                                                                <hr />
                                                                <div className="mt-5"></div>
                                                                <div className="row justify-content-center btn-group" id="btn-farm">
                                                                        <select className="text-left col-11 col-lg-11 btn btn-primary bg-light text-dark sub-item" id="dropmenu">
                                                                        <option className="sub-item-big" disabled selected>Seleccionar farmacia</option>
                                                                        {
                                                                                this.state.farmacia.map( farmacia =>(
                                                                                <option className="sub-item">
                                                                                                { farmacia.nombre }
                                                                                </option>
                                                                                ))
                                                                        }
                                                                        </select>
                                                                </div>
                                                                <br/>
                                                                <br/>
                                                                <div class="row justify-content-center btn-group" id="btn-farm">
                                                                        <select class="text-left col-11 col-lg-11 btn btn-primary bg-light text-dark sub-item" id="dropmenu">
                                                                        <option className="sub-item-big" disabled selected>Tipo de documento</option>
                                                                                <option className="sub-item">T.I.</option>
                                                                                <option className="sub-item" >C.C.</option>
                                                                        </select>
                                                                </div>
                                                                <br/>
                                                                <br />
                                                                <div class="row justify-content-center btn-group" id="btn-farm">
                                                                        <input type="int" className="col-11 col-lg-11 btn btn-primary bg-light" placeholder="Número de documento" id="text-box" required></input>
                                                                </div>
                                                                <br/>
                                                                <br />
                                                                <div class="row justify-content-center btn-group" id="input-farm">
                                                                        <button className="justify-content-around mt-0 col-lg-5 d-flex" id="btn-add-form">Adjunte la fórmula<img className="" src={btn_form} /></button>
                                                                </div>
                                                                <br />
                                                                <br/>
                                                                <div className="row justify-content-center mt-0">
                                                                        <button className="col-lg-10 col-8 btn btn-dark btn-block" type="submit" id="btn_solicitar">
                                                                                <strong>Solicitar</strong>
                                                                        </button>
                                                                </div>
                                                                <br />
                                                                <h6></h6>
                                                                <br />
                                                        </div>
                                                </div>
                                        </div>
                                <div className="align-self-end">
                                <Footer />
                                </div>
                        </div>
                );
        }
}