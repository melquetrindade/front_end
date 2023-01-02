let num = document.querySelector('input#txtnum')
let lista = document.querySelector('select#lista')
let res = document.querySelector('div#res')
let valores = []

function isNumber(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }
    else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) == -1){
        return true
    }
    else{
        return false
    }
}

function selecionar(){
    if((isNumber(num.value) && inLista(num.value,valores)) == true){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adiionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } 
    else{
        window.alert('[ERRO] -> Número inválido ou já adicionado!')
    }
    num.value = ''
    num.focus()
}

function analizar(){
    if(valores.length == 0){
        window.alert('Adicione valores antes de analizar!')
    }
    else{
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]
            }
            if(valores[pos] < menor){
                menor = valores[pos]
            }
        }
        media = soma/total
        res.innerHTML = ''
        res.innerHTML += `-> AO TODO TEMOS ${total} NÚMEROS CADASTRADOS<br>`
        res.innerHTML += `-> O MAIOR VALOR INFORMADO FOI: ${maior}<br>`
        res.innerHTML += `-> O MENOR VALOR INFORMADO FOI: ${menor}<br>`
        res.innerHTML += `-> A SOMA DOS VALORES FOI: ${soma}<br>`
        res.innerHTML += `-> A MÉDIA DOS VALOR FOI: ${media}<br>`
    }
}