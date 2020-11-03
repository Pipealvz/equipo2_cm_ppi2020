import React from 'react';
import './App.css';

function App () {
  return (
    <div className="App">
      <header className="App-header">
        <a className="header_registro" href="/">
          Registrarse
        </a>
      </header>
      <div className="container vh-100  mt-4">
                                <div className="row">
                                        <div className="col"></div>
                                        <div className="col-6 border">
                                                <div className="row justify-content-center text-dark text-uppercase">Desde acá empezó todo...</div>
                                                <h5 className="text-center mt-4">Iniciar Sesión</h5>
                                                <br />
                                                <form >
                                                        <div className="form-group">
                                                                <label className="inputEmail">Usuario</label>
                                                                <input
                                                                        type="email"
                                                                        name="email"
                                                                        id="inputEmail"
                                                                        className="form-control"
                                                                        required
                                                                />
                                                        </div>
                                                        <div className="form-group">
                                                                <label>Contraseña</label>
                                                                <input
                                                                        type="password"
                                                                        name="contrasena"
                                                                        id="inputPassword"
                                                                        className="form-control"
                                                                        required
                                                                />
                                                        </div>
                                                        <button className=" btn btn-primary btn-block" type="submit">
                                                                <strong>Iniciar Sesión</strong>
                                                        </button>
                                                </form>
                                                <br />
                                                <h6></h6>
                                                <br />
                                        </div>
                                        <div className="col"></div>
                                </div>
                        </div>
    </div>
  );
}
export default App;
