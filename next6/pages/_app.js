import MainContainer from '../components/mainContainer'
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/globals.css'
import Head from 'next/head';

function MyApp({ Component, pageProps}){
    return (
        <MainContainer>
            <Head>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            </Head>
            <Component {...pageProps} />
        </MainContainer>
    )
}

export default MyApp