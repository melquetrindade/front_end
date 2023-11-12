import Footer from './footer'
import Navbar from './navBar'
import styles from '../styles/mainContainer.module.css'

export default function MainContainer({children}){
    return (
        <>
            <Navbar/>
            <div className={styles.mainContainer}><div>{children}</div></div>
            <Footer/>
        </>
    )
}