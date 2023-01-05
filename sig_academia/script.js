let numtxt = document.querySelector('input#numtxt')
var sort = Math.floor(Math.random() * (100 - 0 + 1)) + 0
let res = document.querySelector('div#res')
let lista = document.querySelector('select#lista')
let valores = []

const resul = document.createElement("p")
resul.setAttribute('id', 'resul')
const texto = document.createTextNode(``)
resul.appendChild(texto)
res.appendChild(resul)
var maior = 100
var menor = 0
var cont = 1

function valNum(n){
    if(n > maior || n < menor){
        return false
    }
    else{
        return true
    }
}

function inLista(l, n){
    if(l.indexOf(Number(n)) == -1){
        return true
    }
    else{
        return false
    }
}

function verificar(){
    if(valNum(numtxt.value) && inLista(valores, numtxt.value)){
        valores.push(Number(numtxt.value))
        let item = document.createElement('option')
        item.text = `Valor ${numtxt.value} adiionado`
        lista.appendChild(item)
        res.innerHTML = ''
        var acertou = false
        var sorteado = numtxt.value
        if(sort == (Number(sorteado))){
            acertou = true
        }
        else{
            if(sort > Number(numtxt.value)){
                menor = Number(numtxt.value) + 1
            }
            else{
                maior = Number(numtxt.value) - 1
            }
            res.innerHTML += `DICA: ESCOLHA UM NÚMERO ENTRE ${menor} --- ${maior}`
            cont += 1
            numtxt.value = ''
            numtxt.focus()
        }
        if(acertou == true || cont > 10){
            if(acertou == true){
                res.innerHTML += 'PARABÊNS VOCÊ ACERTOU O NÚMERO!<br>'
                res.innerHTML += `TOTAL DE TENTATIVAS: ${cont}`
            }
            else{
                res.innerHTML += 'INFELIZMENTE VOCÊ GASTOU TODAS AS SUAS CHANCES. GAME OVER!'
            }
        }
    }
    else{
        window.alert('[ERRO] -> Número está fora dos limites ou já foi escolhido')
        numtxt.value = ''
        numtxt.focus()
    }
}