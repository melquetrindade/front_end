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
let interval24 = 0
let intervalAm = 0

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
    interval24 = setInterval(() => {
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


function modoAm(){
    intervalAm = setInterval(() =>{
        segundos += 1
        if(segundos == 60){
            segundos = 0
            minutos += 1
        }
        if(minutos == 60){
            minutos = 0
            hora += 1
        }
        if(hora == 12){
            hora = 1
            if(modoel.innerHTML === "AM"){
                modoel.innerHTML = "PM"
            }
            else{
                modoel.innerHTML = "AM"
            }
        }

        horaEl.innerHTML = formataTime(hora)
        minutosEl.innerHTML = formataTime(minutos)
        segundosEl.innerHTML = formataTime(segundos)

    },1000)
}

function transformaModelo(){
    if(hora < 12){
        return
    }
    else if(hora == 12){
        hora = 0
    }
    else{
        hora = hora - 12
    }
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
    dispara = false
    clearInterval(interval24)
    clearInterval(intervalAm)
    atualiza()
    if(hora < 12){
        modoel.innerHTML = "AM"
    }
    else{
        modoel.innerHTML = "PM"
    }
    transformaModelo()
    modoAm()
    

})

semAmEl.addEventListener("change", function(){
    modoel.innerHTML = "Modo 24 horas"
    dispara = false
    clearInterval(interval24)
    clearInterval(intervalAm)
    atualiza()
    disparaRel()
})