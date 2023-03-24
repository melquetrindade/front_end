const alturaEl = document.querySelector("#altId")
const pesoEl = document.querySelector("#pesoId")

alturaEl.addEventListener("keypress", (e) => processTecla(e))
pesoEl.addEventListener("keypress", () => processTecla())

function processTecla(e){
    const onlyNumbers = /[0-9,]/
    const key = String.fromCharCode(e.keyCode)

    if(alturaEl.value.includes(",")){
        e.preventDefault()
    }
    
    if(!onlyNumbers.test(key)){
        e.preventDefault()
        return
    }
}