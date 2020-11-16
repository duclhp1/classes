export default function Card ({img, title, description, buttonTitle}) {
    return (
        <div className="card" style={{maxWidth: "300px", margin: 10}}>
            <img className="card-img-top" src={img} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}.</p>
                    <a href="#" className="btn btn-primary">{buttonTitle}</a>
                </div>
        </div>
    )
}
