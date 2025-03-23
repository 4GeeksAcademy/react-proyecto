import React from "react";

const Footer = ({TituloF, TextoF, TerminadoF}) => {
    return (
        <div className="card text-bg-dark .text-black ">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/002/182/939/small/people-picking-up-trash-at-the-park-vector.jpg" className="card-img" alt="..."/>
                <div className="card-img-overlay">
                    <h5 className="card-title">{TituloF}</h5>
                    <p className="card-text">{TextoF}</p>
                    <p className="card-text"><small><a href="https://www.hyaip.com/es/servicios/propiedad-intelectual/">{TerminadoF}</a></small></p>
                </div>
        </div>
    )
}
export default Footer;