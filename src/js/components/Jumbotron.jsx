import React from "react";

const Jumbotron = ({tituloJ, textoJ, botonJ,}) => {
    return (
        <div className="mb-4 bg-light rounded-3 mx-5 mt-4">
            <div className="container-fluid py-5 text-start">
            <h3 className="display-5 fw-bold">{tituloJ}</h3>
            <p className="col-md-8 fs-4">{textoJ}</p>
            <a href="https://cadenaser.com/ser/2019/03/13/ciencia/1552485927_106150.html" className="btn btn-primary btn-lg">{botonJ}</a>
            </div>
           
        </div>
    )
}
export default Jumbotron