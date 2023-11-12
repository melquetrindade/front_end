import MainContainer from '../components/mainContainer'
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/globals.css'

function MyApp({ Component, pageProps}){
    return (
        <MainContainer>
            <Component {...pageProps} />
        </MainContainer>
    )
}

export default MyApp