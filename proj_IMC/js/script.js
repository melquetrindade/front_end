const alturaEl = document.querySelector("#altId")
const pesoEl = document.querySelector("#pesoId")

alturaEl.addEventListener("keypress", (e) => processTecla(e))
pesoEl.addEventListener("keypress", () => processTecla())

function processTecla(e){
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