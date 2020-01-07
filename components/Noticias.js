import Noticia from './Noticia';

const Noticias = (props) => {
    console.log(props)

    return (
        <div className="row">
            {props.noticias.map(noticia => (
                <Noticia
                    key={noticia.url}
                    noticia={noticia}
                />
            ))}
        </div>
    )
}
export default Noticias;