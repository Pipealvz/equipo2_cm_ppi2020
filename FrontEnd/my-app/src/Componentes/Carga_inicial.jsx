/*IMPORT-REACT*/
import React from 'react';
import '../Estilos/Carga_inicial.css';

export default class Carga_inicial extends React.Component {
    render() {
        return (
            <div className="container-fluid loading" id="loading">
                <div className="row vh-100 justify-content-center" id="container">
                    <div className="loadingio-spinner-gear-zbtzjtzoour align-self-center"><div className="ldio-chp3ma9gvih">
                        <div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                    </div></div>

                </div>
            </div>
        )
    }
}