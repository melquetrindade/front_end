const horaEl = document.querySelector("#horas")
const minutosEl = document.querySelector("#minutos")
const segundosEl = document.querySelector("#segundos")
const comAmEl = document.getElementById("com-amId")
const semAmEl = document.getElementById("sem-amId")
const modoel = document.querySelector("#frase-modo")
const comEscEl = document.getElementById("com-escId")
const semEscEl = document.getElementById("sem-escId")
const bodyEl = document.querySelector("#corpo")
const fraseEl = document.querySelector("#frase-modo")
const numsEl = document.querySelectorAll(".time")
const containerOpEl = document.querySelector("#container-op")
const diaNomeEl = document.querySelector("#diaNome")
const diaNumEl = document.querySelector("#diaNum")
const mesEl = document.querySelector("#mes")
const anoEl = document.querySelector("#ano")

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

pegaData()

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
            pegaData()
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
                pegaData()
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

function pegaData(){

    let dataCompleta = new Date()

    let dia = dataCompleta.getDay()
    diaNumEl.innerHTML = formataDate(dataCompleta.getDate())
    mesEl.innerHTML = formataDate(dataCompleta.getMonth() +1)
    anoEl.innerHTML = `${dataCompleta.getFullYear()}`

    switch(dia){
        case 0:
            diaNomeEl.innerHTML = "Dom"
            break
        case 1:
            diaNomeEl.innerHTML = "Seg"
            break
        case 2:
            diaNomeEl.innerHTML = "Ter"
            break
        case 3:
            diaNomeEl.innerHTML = "Qua"
            break
        case 4:
            diaNomeEl.innerHTML = "Qui"
            break
        case 5:
            diaNomeEl.innerHTML = "Sex"
            break
        default:
            diaNomeEl.innerHTML = "Sab"
    }

}

function formataDate(dia){
    if(dia < 10){
        return `0${dia}`
    }
    else{
        return `${dia}`
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

semEscEl.addEventListener("change", function(){
    bodyEl.style.background = "linear-gradient(to right, var(--cor01), var(--cor02))"
    fraseEl.style.background = "var(--cor03)"
    numsEl.forEach((el) => {
        el.style.borderBottom = "5px solid var(--cor02)"
    })
    containerOpEl.style.background = "var(--cor03)"
})

comEscEl.addEventListener("change", function(){
    bodyEl.style.background = "rgb(44, 44, 44)"
    fraseEl.style.background = "rgb(76, 76, 76)"
    numsEl.forEach((el) => {
        el.style.borderBottom = "5px solid rgb(76, 76, 76)"
    })
    containerOpEl.style.background = "rgb(76, 76, 76)"
})