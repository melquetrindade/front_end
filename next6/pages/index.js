import React from 'react';
import styles from '../styles/index.module.css'

export default function Home(){
    return (
        <div className={styles.body}>
            <h1>
                Página Principal
            </h1>
            <ShowImg/>
        </div>
    )
}

function NameMovie(props){
    const {name} = props;

    return (
        <h3>{name}</h3>
    )
}

function ShowImg(){

    return (
        <div className={styles.containerCard}>
            <div className={styles.card}>
                <div className={styles.poster}>
                    <img src='https://i.pinimg.com/564x/d2/84/d2/d284d2fb3dd25062a9d6c0076cf30855.jpg' alt='carro'/>
                </div>
                <div className={styles.details}>
                    <NameMovie name="Spider-Man"/>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.poster}>
                    <img src='https://i.pinimg.com/564x/8c/b9/a8/8cb9a8441a77f1dcc02da3169632edc2.jpg' alt='carro'/>
                </div>
                <div className={styles.details}>
                    <NameMovie name="Black Panther"/>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.poster}>
                    <img src='https://i.pinimg.com/564x/af/4b/f2/af4bf25a3cb7b13c32340428c1bf8243.jpg' alt='carro'/>
                </div>
                <div className={styles.details}>
                    <NameMovie name="Deadpool"/>
                </div>
            </div>
        </div>
    )
}