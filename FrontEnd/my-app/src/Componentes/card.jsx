/*IMPORT-REACT*/
import React, { Component } from "react";
/*IMPORT-COMPONENTS*/
import '../Estilos/Card.css';
export default class Card extends Component {
    render() {
        return (
            <>
                {this.props.data.map((element) => (
                    <div className="col-lg-4 col-md-6 col-12" key={element.id}>
                        <div className="card-body">
                            <p time="" className="card-text">{this.props.time}</p>
                            <p farm="" className="card-text">{this.props.farm}</p>
                        </div>
                        <div className="card m-0">
                            <img
                                className="card-img-fluid card-img"
                                src={element.img}
                                alt="Img-form"
                            />
                        </div>
                    </div>
                ))}
            </>
        );
    }
}
