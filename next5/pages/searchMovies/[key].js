import React from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr'
import styles from '../../styles/[key].module.css'

export default function ShowMovies(){

    const router = useRouter()
    const {key} = router.query

    const {data, error} = useSWR(`https://www.omdbapi.com/?apikey=cc202b3f&s=${key}`, fetcher)
    if(error){
        return(
            <h1 className='text-center py-2'>Nenhum Resultados Encontrado</h1>
        )
    }
    if(!data){
        return(
            <Load/>
        )
    }
    return(
        <div>
            <h1 className='text-center py-2'>Resultados para {key}</h1>
            <div className={styles.containerCard}>
                {data?.Search.map( (m) => 
                    <div className={styles.card}>
                        <div className={styles.poster}>
                            <img src={m.Poster}/>
                        </div>
                        <DetailsMovie name={m.Title} year={m.Year}/>
                    </div>
                )}
            </div>
        </div>
    )
}

function DetailsMovie(props){
    const {name, year} = props;

    return (
        <div className={styles.details}>
            <h3 className={styles.h3}>{name}</h3>
            <p className={styles.p}>{year}</p>
        </div>
    )
}

async function fetcher(url){
    const res = await fetch(url)
    const json = await res.json()
    return json
}

function Load(){
    return(
        <div className={styles.fade}>
            <div class="spinner-border text-info" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}