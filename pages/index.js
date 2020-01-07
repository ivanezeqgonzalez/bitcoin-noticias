import MasterPage from '../components/Master';
import fetch from 'isomorphic-unfetch';
import Precio from '../components/Precio';
import Noticias from '../components/Noticias';
import Eventos from '../components/Eventos';

const Index = (props) => (
    <MasterPage>
        <div className="row">
            <div className="col-12">
                <h2>Precio del Bitcoin</h2>
                <Precio 
                    precio={props.precioBitcoin}
                />
            </div>
            <div className="col-md-8">
                <h2 className="my-4">Noticias sobre Bitcoin</h2>
                <Noticias 
                    noticias={props.noticias}
                />
            </div>
            <div className="col-md-4">
                <h2 className="my-4">Próximos Eventos Bitcoin</h2>
                <Eventos />
            </div>
        </div>
    </MasterPage>
);
Index.getInitialProps = async () => {
    const precio = await fetch('https://api.coinmarketcap.com/v2/ticker/1');
    const noticias = await fetch('https://newsapi.org/v2/everything?q=bitcoin&from=2019-12-07&sortBy=publishedAt&apiKey=7734b178bf7049feb6541894ec1baa4f&language=es');
    const resultadoPrecio = await precio.json();
    const resultadoNoticia = await noticias.json();

    return {
        precioBitcoin: resultadoPrecio.data.quotes.USD,
        noticias: resultadoNoticia.articles
    }
}

export default Index;