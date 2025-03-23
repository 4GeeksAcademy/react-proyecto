const Card = ({imagen, titulo, texto}) => {
    return (
        <div className="card col-lg-3 my-3" style={{width: "18rem"}}>
            <img src={imagen} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{titulo}</h5>
                    <p className="card-text">{texto}</p>
                    <a href="https://www.youtube.com/watch?v=nvUqnpicSd0" className="btn btn-primary">Asi si de facil</a>
                </div>
        </div>
    )
}
export default Card;