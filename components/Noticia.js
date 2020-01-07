const Noticia = (props) => {
    const {urlToImage, url, title, description, source } = props.noticia;
    
    let imagen = '';
    if(urlToImage !== ''){
        imagen = <img src={urlToImage} alt={title}
        className="card-img-top" />
    } else {
        imagen = <p className="text-center my-5">Imagen no disponible</p>
    }

    return (
        <div className="col-md-6 col-12 mb-4">
            <div className="card">
                <div className="card-image">
                    {imagen}
                </div>
                <div className="card-body">
                    <div className="card-title">{title}</div>
                    <div className="card-text">{description}</div>
                    <div className="card-text">{source.name}</div>
                    <a href={url} target="_blank" className="btn btn-primary d-block">
                        Leer Noticia
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Noticia;