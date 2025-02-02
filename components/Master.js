import Head from 'next/head';
import Navegacion from './Navegacion';

const MasterPage = (props) => (
    <div>
        <Head>
            <title>Bitcoin App</title>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous" />
        </Head>
        <Navegacion />
        <div className="container mt-4">
            {props.children}
        </div>
    </div>
);

export default MasterPage;