const alturaEl = document.querySelector("#altId")
const pesoEl = document.querySelector("#pesoId")
const btnCalc = document.querySelector("#calcBtn")
const contLoaderEl = document.querySelector("#loader-center")
const loaderEl = document.querySelector("#loader")
const mainEl = document.querySelector("#main")
const contInfoEl = document.querySelector("#container-info")

alturaEl.addEventListener("keypress", (e) => processTeclaAlt(e))
pesoEl.addEventListener("keypress", (e) => processTeclaPeso(e))

function processTeclaAlt(e){
    const onlyNumbers = /[0-9,]/
    const key = String.fromCharCode(e.keyCode)
    let tamInputAlt = alturaEl.value

    if(alturaEl.value.includes(",") && (e.key == ",")){
        e.preventDefault()
        return
    }
    if(tamInputAlt.length === 0 && (e.key == ",")){
        e.preventDefault()
        return
    }
    
    if(!onlyNumbers.test(key)){
        e.preventDefault()
        return
    }
}

function processTeclaPeso(e){
    const onlyNumbers = /[0-9,]/
    const key = String.fromCharCode(e.keyCode)
    let tamInputPeso = pesoEl.value

    if(pesoEl.value.includes(",") && (e.key == ",")){
        e.preventDefault()
        return
    }
    if(tamInputPeso.length === 0 && (e.key == ",")){
        e.preventDefault()
        return
    }

    if(!onlyNumbers.test(key)){
        e.preventDefault()
        return
    }
}

btnCalc.addEventListener("click", () => processCalc())

function processCalc(){

    if((alturaEl.value) && (pesoEl.value)){
        let altura = formataDados(alturaEl.value)
        let peso = formataDados(pesoEl.value)

        let alturaFormatado = altura.replace(",", ".")
        let pesoFormatado = peso.replace(",", ".")

        let calculo = Number(pesoFormatado) / (Number(alturaFormatado) * Number(alturaFormatado))
        console.log(`total: ${calculo}`)

        ativaLoader()
        setTimeout(() => {
            mainEl.classList.toggle("hide")
            contInfoEl.classList.toggle("hide")
            ativaLoader()
        },500)

    }

    alturaEl.value = ""
    pesoEl.value = ""
}

function ativaLoader(){
    contLoaderEl.classList.toggle("hide")
    loaderEl.classList.toggle("hide")
}

function formataDados(dado){
    if(dado.includes(",")){
        let formatado = dado.split(",")[1]
        if(formatado){
            return dado
        }
        else{
            return `${dado.split(",")[0] + ',' + '0'}`
        }
    }
    else{
        return dado
    }
}