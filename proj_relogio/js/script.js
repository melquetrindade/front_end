const horaEl = document.querySelector("#horas")
const minutosEl = document.querySelector("#minutos")
const segundosEl = document.querySelector("#segundos")

let dateAtual = new Date()

horaEl.innerHTML = `${dateAtual.getHours()}`
minutosEl.innerHTML = `${dateAtual.getMinutes()}`
segundosEl.innerHTML = `${dateAtual.getSeconds()}`

var hora = dateAtual.getHours()
var minutos = dateAtual.getMinutes()
var segundos = dateAtual.getSeconds()

setInterval(() => {
    segundos += 1
    if(segundos === 60){
        minutos += 1
        segundos = 0
    }
    if(minutos === 60){
        hora += 1
        minutos = 0
    }
    if(hora === 24){
        hora = 0
        minutos = 0
        segundos = 0
    }

    horaEl.innerHTML = formataTime(hora)
    minutosEl.innerHTML = formataTime(minutos)
    segundosEl.innerHTML = formataTime(segundos)

},1000)

function formataTime(time){
    if(time < 10){
        return `0${time}`
    }
    else{
        return time
    }
}