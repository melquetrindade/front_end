import React, {useRef, useState} from 'react'
import styles from '../styles/movie.module.css'
import { useRouter } from 'next/router';

/*
export async function getServerSideProps(context){

    const res = await fetch(`http://www.omdbapi.com/?apikey=cc202b3f&s=bagdad`)
    const data = await res.json()
  
    return {
        props: {data}
    }

}
*/

export default function Movies({data}){

    const [divFilme, setIsVisible1] = useState(false);
    const toggDivFilme = () => {
        setType('')
        if(divChave){
            setIsVisible2(!divChave);
        }
        setIsVisible1(!divFilme);
    }

    const [divChave, setIsVisible2] = useState(false);
    const toggleDivChave = () => {
        setType('')
        if(divFilme){
            setIsVisible1(!divFilme);
        }
        setIsVisible2(!divChave);
    }

    const [movieId, setMovie] = useState('')
    const handleChange = (e) => {
        const inputText = e.target.value
        if (/^[a-zA-Z 0-9 ']+$/.test(inputText) || inputText === '') {
          setMovie(inputText)
        }
    }

    const [anoId, setAno] = useState('')
    const handleChangeYear = (e) => {
        const inputText = e.target.value
        if (/^[0-9]+$/.test(inputText) || inputText === '') {
            setAno(inputText)
        }
    }

    const [chaveId, setChave] = useState('')
    const handleChangeChave = (e) => {
        const inputText = e.target.value
        if (/^[a-zA-Z 0-9 ']+$/.test(inputText) || inputText === '') {
            setChave(inputText)
        }
    }

    const [moviesData, setMovies] = useState(data)
    const [isLoad, setLoad] = useState(false)

    const loadMovies = async (props) => {

        const {nameMovie, yearMovie, typeSearch} = props

        setLoad(true)
        
        if(typeSearch == 'byMovie'){
            setMovies(undefined)
            const res = await fetch(`https://www.omdbapi.com/?apikey=cc202b3f&t=${nameMovie}&y=${yearMovie}`)
            const resJson = await res.json()
            setLoad(false)
            if(resJson.Response == 'False'){
                setType('erro')
            }
            else{
                const array = []
                array.push(resJson)
                setMovies(array)
            }
        }
        else{
            setMovies(undefined)
            const res = await fetch(`https://www.omdbapi.com/?apikey=cc202b3f&s=${nameMovie}`)
            //console.log(`aqui: 4: ${res}`)
            const resJson = await res.json()
            setLoad(false)
            if(resJson.Response == 'False'){
                setType('erro')
            }
            else{
                setMovies(resJson)
            }   
        }
    }

    const [tipoBusca, setType] = useState('')

    const searchMovie = () => {
        if(movieId.length != 0 && anoId.length != 0){
            setIsVisible1(false);
            setMovie('')
            setAno('')
    
            const titleFormat = movieId.replace(/ /g, '+')
            setType('byMovie')
            loadMovies({nameMovie: titleFormat, yearMovie: anoId, typeSearch: 'byMovie'})
        }
        else{
            alert('ERRO, Preencha os campos de pesquisa!')
        }
    }

    const searchChave = () => {
        if(chaveId.length != 0){
            setIsVisible2(false);
            setChave('')

            const titleFormat = chaveId.replace(/ /g, '+')
            setType('byChave')
            loadMovies({nameMovie: titleFormat, yearMovie: 0, typeSearch: 'byChave'})
        }
        else{
            alert('ERRO, Preencha o campo de pesquisa!')
        }
    }

    return (
        <div className={styles.body}>
            <div>
                <h3 className='text-center py-2'>Filtros de Pesquisa</h3>
                <div className={styles.filtro}>
                    <button onClick={toggDivFilme}>Por Filme Específico</button>
                    <button onClick={toggleDivChave}>Por Chave de Título</button>
                </div>
            </div>
            <div className={styles.porFilme} style={{ display: divFilme ? 'block' : 'none' }}>
                <h3 className='text-center py-2'>Pesquise por um Filme</h3>
                <form action='#' className={styles.form}>
                    <div class='form-floating'>
                        <input 
                            type='text' 
                            id='movieId' 
                            class="form-control shadow-none" 
                            placeholder='Nome do Filme' 
                            required
                            value={movieId}
                            onChange={handleChange}
                            >
                        </input>
                        <label for="movieId">Digite o Filme</label>
                    </div>
                    <div class='form-floating'>
                        <input 
                            type="text" 
                            id="anoId" 
                            class="form-control shadow-none" 
                            required 
                            placeholder="Ano de Lançamento" 
                            minlength="1" 
                            maxlength="6"
                            value={anoId}
                            onChange={handleChangeYear}
                        >
                        </input>
                        <label for="anoId">Digite o Ano</label>
                    </div>
                </form>
                <button onClick={searchMovie} className={styles.buttonSearch}>Buscar</button>
            </div>
            <div className={styles.porChave} style={{ display: divChave ? 'block' : 'none' }}>
                <h3 className='text-center py-2'>Pesquise por uma Chave</h3>
                <form action='#' className={styles.form}>
                    <div class='form-floating'>
                        <input 
                        type='text' 
                        id='chaveId' 
                        class="form-control shadow-none" 
                        placeholder='Ex: Bagdad' 
                        required
                        value={chaveId}
                        onChange={handleChangeChave}
                        ></input>
                        <label for="chaveId">Digite uma Chave</label>
                    </div>
                </form>
                <button onClick={searchChave} className={styles.buttonSearch}>Buscar</button>
            </div>
            <div value={isLoad}>
                {
                    isLoad ? <Load/> : null
                }
            </div>
            <div value={tipoBusca}>
                {
                    tipoBusca == 'erro'
                    ?
                        <h1 className='text-center py-2'>Nenhum Resultados Encontrado</h1>
                    :
                    tipoBusca == 'byMovie'
                    ? 
                        <div className={styles.containerRes}>
                            <h1 className='text-center py-2'>Resultados</h1>
                            <CardMovie datas={moviesData} typeBusca={tipoBusca}/>
                        </div>
                    : 

                    tipoBusca == 'byChave'
                    ?
                        <div className={styles.containerRes}>
                            <h1 className='text-center py-2'>Resultados</h1>
                            <CardMovie datas={moviesData} typeBusca={tipoBusca}/>
                        </div>
                    :
                    null
                }
            </div> 
        </div>
    )  
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