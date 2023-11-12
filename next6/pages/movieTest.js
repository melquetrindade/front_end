import React, { useState } from 'react';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import styles from '../styles/showMovie.module.css'

export default function Movies2() {

    const router = useRouter();
    const { nameMovie, yearMovie, typeSearch } = router.query;

    //console.log(router.query.nameMovie)

    if(typeSearch == 'byMovie'){
        const { data, error } = useSWR(
            `https://www.omdbapi.com/?apikey=cc202b3f&t=${nameMovie}&y=${yearMovie}`,
            fetcher
        );

        const array = []
        array.push(data)
    
        if (error) return <h1 className='text-center py-2'>Nenhum Resultados Encontrado</h1>
        if (!data) return <Load/>
        if(array.length != undefined){
            return (
                <div className={styles.body}>
                    <h1 className='text-center py-2'>Resultados</h1>
                    <CardMovie datas={array} typeBusca={typeSearch}/>
                </div>
            );
        }
        return <h1 className='text-center py-2'>Nenhum Resultados Encontrado</h1>
    }
    else{
        const { data, error } = useSWR(
            `https://www.omdbapi.com/?apikey=cc202b3f&s=${nameMovie}`,
            fetcher
        );
    
        if (error) return <h1 className='text-center py-2'>Nenhum Resultados Encontrado</h1>
        if (!data) return <Load/>
        if(data?.Search != undefined){
            return (
                <div className={styles.body}>
                    <h1 className='text-center py-2'>Resultados</h1>
                    <CardMovie datas={data} typeBusca={typeSearch}/>
                </div>
            );
        }
        return <h1 className='text-center py-2'>Nenhum Resultados Encontrado</h1>
        
    }
}

function MovieLink({movie}){
    const router = useRouter()

    const naveMovie = () => {
        router.push({
            pathname: '/movieDetails',
            query: {id: movie.imdbID}
        })
    }

    return(
        <div onClick={naveMovie} className={styles.card}>
            <div className={styles.poster}>
                <img src={movie.Poster}/>
            </div>
            <DetailsMovie name={movie.Title} year={movie.Year}/>
        </div>
    )
}

function CardMovie(props){

    const {datas, typeBusca} = props

    return (
        typeBusca == 'byMovie' ?
        <div className={styles.containerCard}>{datas?.map((m) => (
            <MovieLink movie={m}/>
        ))}</div>
        :
        <div className={styles.containerCard}>{datas?.Search.map((m) => (
            <MovieLink movie={m}/>
        ))}</div>
    )
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

function DetailsMovie(props){
    const {name, year} = props;

    return (
        <div className={styles.details}>
            <h3 className={styles.h3}>{name}</h3>
            <p className={styles.p}>{year}</p>
        </div>
        
    )
}

async function fetcher(url) {
    const res = await fetch(url);
    const json = await res.json();
    return json;
}