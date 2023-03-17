const horaEl = document.querySelector("#horas")
const minutosEl = document.querySelector("#minutos")
const segundosEl = document.querySelector("#segundos")
const comAmEl = document.getElementById("com-amId")
const semAmEl = document.getElementById("sem-amId")
const modoel = document.querySelector("#frase-modo")

var hora = 0
var minutos = 0
var segundos = 0

var dispara = true
var altoriza = true
let interval = 0

function atualiza(){

    let dateAtual = new Date()

    horaEl.innerHTML = formataTime(dateAtual.getHours())
    minutosEl.innerHTML = formataTime(dateAtual.getMinutes())
    segundosEl.innerHTML = formataTime(dateAtual.getSeconds())

    hora = dateAtual.getHours()
    minutos = dateAtual.getMinutes()
    segundos = dateAtual.getSeconds()
}

if(altoriza == true){
    atualiza()
    altoriza = false
}

if(dispara == true){
    disparaRel()
}

function disparaRel(){
    interval = setInterval(() => {
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
}

function formataTime(time){
    if(time < 10){
        return `0${time}`
    }
    else{
        return time
    }
}

comAmEl.addEventListener("change", function(){
    modoel.innerHTML = "Modo AM/PM"
    dispara = false
    clearInterval(interval)

})

semAmEl.addEventListener("change", function(){
    modoel.innerHTML = "Modo 24 horas"
    dispara = false
    clearInterval(interval)
    atualiza()
    disparaRel()
})