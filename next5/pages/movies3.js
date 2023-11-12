import React, { useState } from 'react'
import useSWR from 'swr'
import styles from '../styles/movies3.module.css'
import { Button, Card,  } from 'antd';
import { useRouter } from 'next/router';

async function theFetcher(url) {

    if (url === null || url === '') {
        return {Search:''}
    }

    const res = await fetch(url);
    const json = await res.json();
    return json;
}

export function TheMovies({data, show}){

    //console.log(`data.error: ${data.error}`)
    //console.log(`data.Search: ${data.Search}`)

    if (!show) return (<div></div>)    
    if (data.error) return (<div>falha na requisição</div>)
    if (data.Search === '' ) return (<Load/>)

    return (
        <div>
            <h1 className='text-center py-2'>Resultados da API</h1>
            <div className={styles.containerCard}>
                { data?.Search.map( (m) => 
                    <MovieLink movie={m}/>
                )}  
            </div>
        </div>
    )
}

function MovieLink({movie}){

    const router = useRouter()

    const styleCard = {
        marginTop: 10,
        width: 300,
        height: 110,
        cursor: 'pointer'
    }

    const navMovie = () => {
        router.push({
            pathname: './oneMovie/[id]',
            query: {id: movie.imdbID}
        })
    }

    return(
        <Card 
            title={movie.Title}
            bordered={true}
            style={styleCard}
            onClick={navMovie}
        >
            <p>Ano: {movie.Year}</p>
        </Card>
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

export function TheLink({url, handler}){    

    return (
        <div>
            <Button type='primary' onClick={handler}>{url === '' ? 'Carregar Filmes Aleatórios' : 'Ocultar Filmes Aleatórios'}</Button>
        </div>
    )
}

export default function Movies3(){

    const [url, setUrl] = useState('')
    const [op, setOp] = useState('')
    const {data, error} = useSWR(url, theFetcher)

    const onClickHandler = (e) => {
        e.preventDefault()

        if (url === '') {
            setOp('movieLink')
            setUrl('http://www.omdbapi.com/?apikey=cc202b3f&&s=bagdad')
        }
        else {
            setOp('')
            setUrl('')
        }
    }

    //console.log(`data: ${data}`) -> undefined
    //console.log(`error: ${error}`) -> undefined

    const updateOpSearch = () => {
        if(url != ''){
            setUrl('')
        }
        setOp('movieSearch')
    }

    return (
        <div className={styles.containerMain}>
            <h1 className='text-center py-2'>Opções de Pesquisa</h1>
            <div className={styles.containerButtons}>
                <TheLink url={url} handler={onClickHandler}/>
                <ButtonSearch func={updateOpSearch}/>
            </div>
            <div value={op}>
                {
                    op == 'movieLink'
                    ?
                        <TheMovies data={ error?{error:'Erro na pesquisa'}: data ? data: {Search:''} } show={url !== ''}/>
                    :
                    op == 'movieSearch'
                    ?
                        <SearchMovie/>
                    :
                        null
                }
            </div>
        </div>
    )
}

function ButtonSearch({func}){
    return (
        <div>
            <Button type='primary' onClick={func}>Pesquise por um Filme</Button>
        </div>
    )
}

function SearchMovie(){

    const router = useRouter()

    const navMovie = () => {
        router.push({
            pathname: './searchMovies/[key]',
            query: {key: searchId}
        })
    }

    const [searchId, setSearch] = useState('')
    const handleChangeSearch = (e) => {
        const inputText = e.target.value
        if (/^[a-zA-Z 0-9 ']+$/.test(inputText) || inputText === '') {
            setSearch(inputText)
        }
    }

    const buttonSearch = () => {
        if(searchId.length != 0){
            navMovie()
        }
        else{
            alert('ERRO, Preencha o campo de pesquisa!')
        }
    }

    return(
        <div>
            <h3 className='text-center py-2'>Pesquise por uma Chave</h3>
            <form action='#' className={styles.form}>
                <div class='form-floating'>
                    <input 
                    type='text' 
                    id='chaveId' 
                    class="form-control shadow-none" 
                    placeholder='Ex: Batman' 
                    required
                    value={searchId}
                    onChange={handleChangeSearch}
                    ></input>
                    <label for="chaveId">Digite um Filme</label>
                </div>
            </form>
            <button onClick={buttonSearch} className={styles.buttonSearch}>Buscar</button>
        </div>
    )
}