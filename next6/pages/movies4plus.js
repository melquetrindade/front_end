import React, {useState} from 'react'
import styles from '../styles/movies4plus.module.css'
import useSWR from 'swr'

export default function SearchEnter(){

    const [state, setState] = useState({url:'', titleSearchString:''})

    const {data, error} = useSWR(state.url, async (u) => {
        if (!state.url || !state.titleSearchString) return {Search:''}
        if (state.url === '' || state.titleSearchString ==='') return {Search:''}

        const res = await fetch(`${state.url}/?apiKey=cc202b3f&s=${state.titleSearchString}`)
        const json = await res.json();
        return json;
    })

    const [hasForm, setHasForm] = useState(false)

    const onClickHandler = e => {
        e.preventDefault()
        let s = document.getElementById('titleSearchString').value
        if(s){
            if(hasForm == true){
                setHasForm(false)
            }
            if (state.url === '') {
                setState({url:'http://www.omdbapi.com',titleSearchString:s})
            }
            else setState({url:'',titleSearchString: state.titleSearchString})
        }
        else{
            setState({url:'',titleSearchString: state.titleSearchString})
            setHasForm(true)
        }
    }

    const onFoco = () => {
        if(state.url !== ''){
            document.getElementById('titleSearchString').value = ''
            setState({url: '', titleSearchString: ''})
        }
    }

    const onEnter = (e) => {

        document.getElementById('titleSearchString').addEventListener('keydown', (e) => {
            
            if(e.keyCode == 13){
                e.preventDefault()
                document.getElementById('titleSearchString').blur()
                let s = document.getElementById('titleSearchString').value
                if(s){
                    if(hasForm == true){
                        setHasForm(false)
                    }
                    if (state.url === '') {
                        setState({url:'http://www.omdbapi.com',titleSearchString:s})
                    }
                    else setState({url:'',titleSearchString: state.titleSearchString})
                }
                else{
                    console.log('entrou')
                    setState({url:'',titleSearchString: state.titleSearchString})
                    setHasForm(true)
                }
            }
        })
    }

    return(
        <div className={styles.body}>
            <Cabecalho/>
            <TheForm func1={onFoco} func2={onEnter}/>
            <TheMovies data={data? data : {Search: ''}} show={state.url !== ''}/>
            <FormMensage props={hasForm}/>
        </div>
    )
}

export function TheMovies({data,show}){

    const [isOrdemCres, setOrdem] = useState(false)

    const order = () => {

        if(isOrdemCres == true){
            data.Search.sort(function(movie1, movie2){
                let x = movie1.Title.toUpperCase()
                let y = movie2.Title.toUpperCase()
                return x == y ? 0 : x > y ? -1 : 1
            })

            setOrdem(false)
        }
        else{
            
            data.Search.sort(function(movie1, movie2){
                let x = movie1.Title.toUpperCase()
                let y = movie2.Title.toUpperCase()
                return x == y ? 0 : x > y ? 1 : -1
            })
            setOrdem(true)
        }
    }

    if (!show) return (<div></div>)
    if (!data) return (<div></div>)
    if (data.error) return ( <p className='text-center py-2 display-6'>Nenhum Resultados Encontrado</p> )
    if (data.Search === '' ) return ( <Load/> )

    return (
        <div>
            {
                data.Search == undefined
                ?
                    <p className='text-center py-2 display-6'>Nenhum Resultados Encontrado</p>
                :
                    <div>
                        <div className={styles.containerMovie}>
                            { data?.Search.map( (m) => <div key={m.imdbID}>{m.Title} --- {m.Year}</div>  ) }
                        </div>
                        <div className={styles.containerButton}>
                            {
                                isOrdemCres 
                                ? 
                                    <div onClick={order}>
                                        <span class="material-symbols-outlined">arrow_downward</span>
                                        Ordenar Decrescente
                                    </div>
                                :
                                    <div onClick={order}>
                                        <span class="material-symbols-outlined">arrow_upward</span>
                                        Ordenar Crescente
                                    </div>
                            }
                        </div> 
                    </div>
            }           
        </div>
    )
}

export function Cabecalho(){
    return(
        <div className={styles.containerOBS}>
            <h1 className='text-center py-2'>Pesquise por um Filme</h1>
            <div>
                <h1>Instruções:</h1>
                <p>Tecle Enter para fazer a pesquisa</p>
            </div>
        </div>
    )
}

export function TheForm({func1, func2}){
    return (
        <div>
            <form>
                <div class='form-floating'>
                    <input 
                        type='text' 
                        id='titleSearchString'
                        name='titleSearchString'
                        class="form-control shadow-none" 
                        placeholder='Ex: Batman' 
                        autoComplete='true'
                        onFocus={func1}
                        onChange={func2}
                    ></input>
                    <label for="titleSearchString">Filtro de Título</label>
                </div>
            </form>
        </div>
    )
}

function FormMensage({props}){
    return(
        <div>
            {
                props ? <h1 className='text-center py-2'>Preencha o Campo de Pesquisa</h1> : null
            }
        </div>
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