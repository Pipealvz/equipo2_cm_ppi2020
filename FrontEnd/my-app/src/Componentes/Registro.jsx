/*IMPORT-REACT*/
import React from 'react';
import { Link } from 'react-router-dom';
/*IMPORT-COMPONENTS*/
import '../Estilos/Registro.css';
/*IMPORT-BOOTSTRAP*/
import 'bootstrap/dist/css/bootstrap.min.css';
/*IMPORT-IMAGES*/
import logo_domiapp from '../Images_proyectos/Logo_domiApp.png';
/*IMPORT AXIOS { GET, POST, PUT, DELETE }*/
import axios from 'axios'

const url = "https://baackendapp.herokuapp.com/api/usuario/registro";
class Registro extends React.Component {

    state = {
        usuario: [], //DEFINIMOS EL ESTADO DONDE SE ALMACENAN LAS VARIABLES, O SEA DESPUÉS DEL API/:STATE
        form:{
            nombre:"",
            correo:"",
            contraseña:""
        }
    }

    peticionPost = async () => {
        await axios
          .post(`${url}nuevo-estudiante`, this.state.form)
          .then((response) => {
            this.showModal();
            this.peticionGet();
          })
          .catch((error) => {
            console.log(error.message);
          });
      };

    /*async getUser(){
        const res = await axios.get('https://baackendapp.herokuapp.com/api/usuario')
        this.setState('getAxios')
    }
    async postUsuario() { 
        const res = await axios.post('https://baackendapp.herokuapp.com/api/usuario/registro', this.state.form)
        .then((res)=>{this.getUser()})
        .catch((error)=>{console.log(error)})
    }

    async componentDidMount(){
        await this.postUsuario();
    }

    handleChange = async (e) => {
        await this.setState({
          form: {
            ...this.state.form,
            [e.target.name]: e.target.value
          }
        });
        console.log(this.state.form);
      };*/
      /*submitCheck = () => {
   
        if(!this.state.nombre){
          alert("Falta 1.")
        } else if(this.state.direccion){
          alert("Falta 2.")
        } else if (!this.state.numero) {
               alert("Falta 3.")
       
        } else {
          alert("Bienvenido.")

        }
     }*/
    render() {
    const { form } = this.state;
        return (
            <div className="App-r">
                <div className="container vh-100" id="container">
                    <div className="row vh-100 justify-content-end">
                        <div className="col-12 col-lg-4 align-self-center" id="Bloque_registro">
                            <img src={logo_domiapp} className="img-fluid mt-5 mb-5" />
                            <h1 className="text-center mt-4" id="Texto_registro">Registro</h1>
                            <hr />
                            <br />
                            <form onSubmit={this.postUsuario} >
                                <div className="form-group">
                                    <input
                                        type="name"
                                        name="nombre"
                                        id="input_Name"
                                        className="form-control"
                                        required
                                        placeholder="Nombre"
                                        onChange={this.handleChange}
                                        value={this.state.form ? this.state.form.nombre:""}                                       
                                    />
                                    <label className="label">Nombre</label>
                                    <input
                                        type="email"
                                        name="correo"
                                        id="input_Email"
                                        className="form-control"
                                        required
                                        placeholder="Correo"
                                        onChange={this.handleChange}
                                        value={this.state.form ? this.state.form.correo:""}
                                    />
                                    <label className="label">Correo</label>
                                    <input
                                        type="password"
                                        name="contrasena"
                                        id="input_Password"
                                        className="form-control"
                                        required
                                        placeholder="Contraseña"
                                        onChange={this.handleChange}
                                        value={form.contraseña.value}
                                    />
                                    <label className="label">Contraseña</label>
                                </div>
                                <button className="btn btn-block mt-4 btn-dark" type="submit" id="btn_registrar">
                                    <strong>Crear cuenta</strong>
                                </button>
                                <hr />
                                <div className="Link_sesion">
                                    <span className="Link_sesion">¿Ya tienes cuenta? <Link id="link" to="/">
                                        ¡Inicia Sesión!</Link>
                                    </span>
                                </div>
                            </form>
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Registro;