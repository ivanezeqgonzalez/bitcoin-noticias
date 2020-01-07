import Link from 'next/link';

const Navegacion = () => (
    <nav className="navbar navbar-expand navbar-dark bg-warning">
        <div className="container">
            <Link href="/">
                <a className="navbar-brand">TodoBitcoin</a>
            </Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link href="/"><a className="nav-link">Inicio</a></Link>
                        <Link href="/nosotros"><a className="nav-link">Nosotros</a></Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default Navegacion;