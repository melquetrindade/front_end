let imenu = window.document.getElementById('op')
let menu = window.document.getElementById('fundoMenu')
let icone2 = window.document.querySelector('p.icone')
let secHam = window.document.getElementById('hamburguer')
let secPizza = window.document.getElementById('pizza')
let secBebidas = window.document.getElementById('bebidas')
let secSorvetes = window.document.getElementById('sorvetes')
let compras = window.document.getElementById('info')
let numCompras = window.document.getElementById('qtdCarro')
let mainPrincipal = window.document.getElementById('pagPrincipal')
let mainRevisao = window.document.getElementById('revisao')
let divMain2 = window.document.getElementById('main2')
let numCompras2 = window.document.getElementById('qtdCarro2')


mainRevisao.style.display = 'none'
mainPrincipal.style.display = 'block'

compras.style.position = 'absolute'
compras.style.right = '0px'
compras.style.opacity ='1'
compras.style.display = 'none'

var valorTotal = 0

function botaomenos(div2, p2, num){
        let b1 = document.createElement('div')
        b1.setAttribute('id', 'menos')
        p2.appendChild(b1)
        b1.innerHTML = '-'
        b1.addEventListener('click', function(){
                qtdGeral[num] -= 1
                if(qtdGeral[num] < 0){
                        div2.innerHTML = `0`
                        qtdGeral[num] = 0
                }
                else{
                        div2.innerHTML = `${qtdGeral[num]}`
                }
                addAlimentos(num)
        })
}

function addAlimentos(num){
        if(num == 0){
                let qtd01 = document.getElementById('unidSimples')
                qtd01.innerHTML = `${qtdGeral[num]}`
        }
        else if(num == 1){
                let qtd02 = document.getElementById('unidPicanha')
                qtd02.innerHTML = `${qtdGeral[num]}`
        }
        else if(num == 2){
                let qtd03 = document.getElementById('unidTudo')
                qtd03.innerHTML = `${qtdGeral[num]}`
        }
        else if(num == 3){
                let qtd04 = document.getElementById('unidChicken')
                qtd04.innerHTML = `${qtdGeral[num]}`
        }
        else if(num == 4){
                let qtd05 = document.getElementById('unidDuplo')
                qtd05.innerHTML = `${qtdGeral[num]}`
        }
        else if(num == 5){
                let qtd06 = document.getElementById('unidChefe')
                qtd06.innerHTML = `${qtdGeral[num]}`
        }
        else if(num == 6){
                let qtd07 = document.getElementById('unidQueijos')
                qtd07.innerHTML = `${qtdGeral[num]}`
        }
        else if(num == 7){
                let qtd08 = document.getElementById('unidPaulista')
                qtd08.innerHTML = `${qtdGeral[num]}`
        }
        else if(num == 8){
                let qtd09 = document.getElementById('unidRomana')
                qtd09.innerHTML = `${qtdGeral[num]}`
        }
        else if(num == 9){
                let qtd10 = document.getElementById('unidCarne')
                qtd10.innerHTML = `${qtdGeral[num]}`
        }
        else if(num == 10){
                let qtd11 = document.getElementById('unidCoca')
                qtd11.innerHTML = `${qtdGeral[num]}`
        }
        else if(num == 11){
                let qtd12 = document.getElementById('unidFanta')
                qtd12.innerHTML = `${qtdGeral[num]}`
        }
        else if(num == 12){
                let qtd13 = document.getElementById('unidGuarana')
                qtd13.innerHTML = `${qtdGeral[num]}`
        }
        else if(num == 13){
                let qtd14 = document.getElementById('unidSuco')
                qtd14.innerHTML = `${qtdGeral[num]}`
        }
        else if(num == 14){
                let qtd15 = document.getElementById('unidAgua')
                qtd15.innerHTML = `${qtdGeral[num]}`
        }
        else if(num == 15){
                let qtd16 = document.getElementById('unidChoco')
                qtd16.innerHTML = `${qtdGeral[num]}`
        }
        else if(num == 16){
                let qtd17 = document.getElementById('unidMilk')
                qtd17.innerHTML = `${qtdGeral[num]}`
        }
        else if(num == 17){
                let qtd18 = document.getElementById('unidAcai')
                qtd18.innerHTML = `${qtdGeral[num]}`
        }
        else if(num == 18){
                let qtd19 = document.getElementById('unidMorango')
                qtd19.innerHTML = `${qtdGeral[num]}`
        }
        else{
                let qtd20 = document.getElementById('unidPicole')
                qtd20.innerHTML = `${qtdGeral[num]}`
        }
}

function botaomais(div2, p2, num){
        let b2 = document.createElement('div')
        b2.setAttribute('id', 'mais')
        b2.innerHTML = '+'
        b2.addEventListener('click', function(){
                qtdGeral[num] += 1
                div2.innerHTML = `${qtdGeral[num]}`
                addAlimentos(num)
        })
        p2.appendChild(b2)
}

function criaIconeHam(p1){
        let iconeHam = document.createElement('img')
        iconeHam.setAttribute('class', 'iconeRev')
        iconeHam.setAttribute('src', 'imagens/iHam2.png')
        p1.appendChild(iconeHam)
}
function criaIconePizza(p1){
        let iconePizza = document.createElement('img')
        iconePizza.setAttribute('class', 'iconeRev')
        iconePizza.setAttribute('src', 'imagens/iPizza3.png')
        p1.appendChild(iconePizza)
}
function criaIconeBebidas(p1){
        let iconeBeb = document.createElement('img')
        iconeBeb.setAttribute('class', 'iconeRev')
        iconeBeb.setAttribute('src', 'imagens/iBebidas3.png')
        p1.appendChild(iconeBeb)
}
function criaIconeSobre(p1){
        let iconeSobre = document.createElement('img')
        iconeSobre.setAttribute('class', 'iconeRev')
        iconeSobre.setAttribute('src', 'imagens/Isobre4.png')
        p1.appendChild(iconeSobre)
}

function criaLixeira(divRevisao){
        let lixeira = document.createElement('div')
        lixeira.setAttribute('class', 'lixo')
        lixeira.innerHTML = `<span class="material-symbols-outlined">delete</span>`
        divRevisao.appendChild(lixeira)
}

function voltarPag(){
        mainRevisao.style.display = 'none'
        mainPrincipal.style.display = 'block'
        var cont = 0
        for(var i=0; i < qtdGeral.length; i++){
                if(qtdGeral[i] > 0){
                        cont += 1
                }
        }
        numCompras.innerHTML = `${cont}`
        numCompras2.innerHTML = `${cont} Lanches`

}

var verifica = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

// ---------------- SESSÃO DE SOBREMESA ----------------
function calc01(){
        var total01 = 7 * qtdGeral[0]
        valorTotal += total01
        verifica[0] = 1

        let divRevisao = document.createElement('div')
        divRevisao.setAttribute('class', 'telaRev')
        divMain2.appendChild(divRevisao)
        let p1 = document.createElement('p')
        divRevisao.appendChild(p1)
        p1.innerHTML = 'LANCHE:'
        let p2 = document.createElement('p')
        divRevisao.appendChild(p2)
        p2.innerHTML = 'QTD:'
        let p3 = document.createElement('p')
        divRevisao.appendChild(p3)
        p3.innerHTML = 'SUBTOTAL:'

        criaIconeHam(p1)
        let div1 = document.createElement('div')
        p1.appendChild(div1)
        div1.setAttribute('class', 'nomePdt')
        div1.innerHTML = `Simples ----- R$ 7,00`

        let div2 = document.createElement('div')
        botaomenos(div2, p2, 0)
        p2.appendChild(div2)
        div2.setAttribute('id', 'unid01')
        div2.setAttribute('class', 'unidades')
        div2.innerHTML = `${qtdGeral[0]}`
        botaomais(div2, p2, 0)

        let div3 = document.createElement('div')
        p3.appendChild(div3)
        div3.innerHTML = `${total01}`
        criaLixeira(divRevisao)
}

function calc02(){

        var total02 = 13 * qtdGeral[1]
        valorTotal += total02
        verifica[1] = 1

        let divRevisao = document.createElement('div')
        divRevisao.setAttribute('class', 'telaRev')
        divMain2.appendChild(divRevisao)
        let p1 = document.createElement('p')
        divRevisao.appendChild(p1)
        p1.innerHTML = 'LANCHE:'
        let p2 = document.createElement('p')
        divRevisao.appendChild(p2)
        p2.innerHTML = 'QTD:'
        let p3 = document.createElement('p')
        divRevisao.appendChild(p3)
        p3.innerHTML = 'SUBTOTAL:'

        criaIconeHam(p1)
        let div1 = document.createElement('div')
        p1.appendChild(div1)
        div1.setAttribute('class', 'nomePdt')
        div1.innerHTML = `X-Picanha`

        let div2 = document.createElement('div')
        botaomenos(div2, p2, 1)
        p2.appendChild(div2)
        div2.setAttribute('class', 'unidades')
        div2.setAttribute('id', 'unid02')
        div2.innerHTML = `${qtdGeral[1]}`
        botaomais(div2, p2, 1)

        let div3 = document.createElement('div')
        p3.appendChild(div3)
        div3.innerHTML = `${total02}`
        criaLixeira(divRevisao)
}

function calc03(){

        var total03 = 10 * qtdGeral[2]
        valorTotal += total03
        verifica[2] = 1

        let divRevisao = document.createElement('div')
        divRevisao.setAttribute('class', 'telaRev')
        divMain2.appendChild(divRevisao)
        let p1 = document.createElement('p')
        divRevisao.appendChild(p1)
        p1.innerHTML = 'LANCHE:'
        let p2 = document.createElement('p')
        divRevisao.appendChild(p2)
        p2.innerHTML = 'QTD:'
        let p3 = document.createElement('p')
        divRevisao.appendChild(p3)
        p3.innerHTML = 'SUBTOTAL:'

        criaIconeHam(p1)
        let div1 = document.createElement('div')
        div1.setAttribute('class', 'nomePdt')
        p1.appendChild(div1)
        div1.innerHTML = `X-Tudo`

        let div2 = document.createElement('div')
        botaomenos(div2, p2, 2)
        p2.appendChild(div2)
        div2.setAttribute('class', 'unidades')
        div2.setAttribute('id', 'unid03')
        div2.innerHTML = `${qtdGeral[2]}`
        botaomais(div2, p2, 2)

        let div3 = document.createElement('div')
        p3.appendChild(div3)
        div3.innerHTML = `${total03}`
        criaLixeira(divRevisao)
}

function calc04(){

        var total04 = 12 * qtdGeral[3]
        valorTotal += total04
        verifica[3] = 1

        let divRevisao = document.createElement('div')
        divRevisao.setAttribute('class', 'telaRev')
        divMain2.appendChild(divRevisao)
        let p1 = document.createElement('p')
        divRevisao.appendChild(p1)
        p1.innerHTML = 'LANCHE:'
        let p2 = document.createElement('p')
        divRevisao.appendChild(p2)
        p2.innerHTML = 'QTD:'
        let p3 = document.createElement('p')
        divRevisao.appendChild(p3)
        p3.innerHTML = 'SUBTOTAL:'

        criaIconeHam(p1)
        let div1 = document.createElement('div')
        div1.setAttribute('class', 'nomePdt')
        p1.appendChild(div1)
        div1.innerHTML = `Chicken`

        let div2 = document.createElement('div')
        botaomenos(div2, p2, 3)
        p2.appendChild(div2)
        div2.setAttribute('class', 'unidades')
        div2.setAttribute('id', 'unid04')
        div2.innerHTML = `${qtdGeral[3]}`
        botaomais(div2, p2, 3)

        let div3 = document.createElement('div')
        p3.appendChild(div3)
        div3.innerHTML = `${total04}`
        criaLixeira(divRevisao)
}

function calc05(){

        var total05 = 17 * qtdGeral[4]
        valorTotal += total05
        verifica[4] = 1

        let divRevisao = document.createElement('div')
        divRevisao.setAttribute('class', 'telaRev')
        divMain2.appendChild(divRevisao)
        let p1 = document.createElement('p')
        divRevisao.appendChild(p1)
        p1.innerHTML = 'LANCHE:'
        let p2 = document.createElement('p')
        divRevisao.appendChild(p2)
        p2.innerHTML = 'QTD:'
        let p3 = document.createElement('p')
        divRevisao.appendChild(p3)
        p3.innerHTML = 'SUBTOTAL:'

        criaIconeHam(p1)
        let div1 = document.createElement('div')
        div1.setAttribute('class', 'nomePdt')
        p1.appendChild(div1)
        div1.innerHTML = `Duplo X-Tudo de Picanha`

        let div2 = document.createElement('div')
        botaomenos(div2, p2, 4)
        p2.appendChild(div2)
        div2.setAttribute('class', 'unidades')
        div2.setAttribute('id', 'unid05')
        div2.innerHTML = `${qtdGeral[4]}`
        botaomais(div2, p2, 4)

        let div3 = document.createElement('div')
        p3.appendChild(div3)
        div3.innerHTML = `${total05}`
        criaLixeira(divRevisao)
}

// ---------------- SESSÃO DE PIZZA ----------------
function calc06(){

        var total06 = 19.50 * qtdGeral[5]
        valorTotal += total06
        verifica[5] = 1

        let divRevisao = document.createElement('div')
        divRevisao.setAttribute('class', 'telaRev')
        divMain2.appendChild(divRevisao)
        let p1 = document.createElement('p')
        divRevisao.appendChild(p1)
        p1.innerHTML = 'LANCHE:'
        let p2 = document.createElement('p')
        divRevisao.appendChild(p2)
        p2.innerHTML = 'QTD:'
        let p3 = document.createElement('p')
        divRevisao.appendChild(p3)
        p3.innerHTML = 'SUBTOTAL:'

        criaIconePizza(p1)
        let div1 = document.createElement('div')
        div1.setAttribute('class', 'nomePdt')
        p1.appendChild(div1)
        div1.innerHTML = `Chefe`

        let div2 = document.createElement('div')
        botaomenos(div2, p2, 5)
        p2.appendChild(div2)
        div2.setAttribute('class', 'unidades')
        div2.setAttribute('id', 'unid06')
        div2.innerHTML = `${qtdGeral[5]}`
        botaomais(div2, p2, 5)

        let div3 = document.createElement('div')
        p3.appendChild(div3)
        div3.innerHTML = `${total06}`
        criaLixeira(divRevisao)
}

function calc07(){

        var total07 = 20 * qtdGeral[6]
        valorTotal += total07
        verifica[6] = 1

        let divRevisao = document.createElement('div')
        divRevisao.setAttribute('class', 'telaRev')
        divMain2.appendChild(divRevisao)
        let p1 = document.createElement('p')
        divRevisao.appendChild(p1)
        p1.innerHTML = 'LANCHE:'
        let p2 = document.createElement('p')
        divRevisao.appendChild(p2)
        p2.innerHTML = 'QTD:'
        let p3 = document.createElement('p')
        divRevisao.appendChild(p3)
        p3.innerHTML = 'SUBTOTAL:'

        criaIconePizza(p1)
        let div1 = document.createElement('div')
        div1.setAttribute('class', 'nomePdt')
        p1.appendChild(div1)
        div1.innerHTML = `4 Queijos`

        let div2 = document.createElement('div')
        botaomenos(div2, p2, 6)
        p2.appendChild(div2)
        div2.setAttribute('class', 'unidades')
        div2.setAttribute('id', 'unid07')
        div2.innerHTML = `${qtdGeral[6]}`
        botaomais(div2, p2, 6)

        let div3 = document.createElement('div')
        p3.appendChild(div3)
        div3.innerHTML = `${total07}`
        criaLixeira(divRevisao)
}

function calc08(){

        var total08 = 19 * qtdGeral[7]
        valorTotal += total08
        verifica[7] = 1

        let divRevisao = document.createElement('div')
        divRevisao.setAttribute('class', 'telaRev')
        divMain2.appendChild(divRevisao)
        let p1 = document.createElement('p')
        divRevisao.appendChild(p1)
        p1.innerHTML = 'LANCHE:'
        let p2 = document.createElement('p')
        divRevisao.appendChild(p2)
        p2.innerHTML = 'QTD:'
        let p3 = document.createElement('p')
        divRevisao.appendChild(p3)
        p3.innerHTML = 'SUBTOTAL:'

        criaIconePizza(p1)
        let div1 = document.createElement('div')
        div1.setAttribute('class', 'nomePdt')
        p1.appendChild(div1)
        div1.innerHTML = `Paulista`

        let div2 = document.createElement('div')
        botaomenos(div2, p2, 7)
        p2.appendChild(div2)
        div2.setAttribute('class', 'unidades')
        div2.setAttribute('id', 'unid08')
        div2.innerHTML = `${qtdGeral[7]}`
        botaomais(div2, p2, 7)

        let div3 = document.createElement('div')
        p3.appendChild(div3)
        div3.innerHTML = `${total08}`
        criaLixeira(divRevisao)
}

function calc09(){

        var total09 = 19 * qtdGeral[8]
        valorTotal += total09
        verifica[8] = 1

        let divRevisao = document.createElement('div')
        divRevisao.setAttribute('class', 'telaRev')
        divMain2.appendChild(divRevisao)
        let p1 = document.createElement('p')
        divRevisao.appendChild(p1)
        p1.innerHTML = 'LANCHE:'
        let p2 = document.createElement('p')
        divRevisao.appendChild(p2)
        p2.innerHTML = 'QTD:'
        let p3 = document.createElement('p')
        divRevisao.appendChild(p3)
        p3.innerHTML = 'SUBTOTAL:'

        criaIconePizza(p1)
        let div1 = document.createElement('div')
        div1.setAttribute('class', 'nomePdt')
        p1.appendChild(div1)
        div1.innerHTML = `Romana`

        let div2 = document.createElement('div')
        botaomenos(div2, p2, 8)
        p2.appendChild(div2)
        div2.setAttribute('class', 'unidades')
        div2.setAttribute('id', 'unid09')
        div2.innerHTML = `${qtdGeral[8]}`
        botaomais(div2, p2, 8)

        let div3 = document.createElement('div')
        p3.appendChild(div3)
        div3.innerHTML = `${total09}`
        criaLixeira(divRevisao)
}

function calc10(){

        var total10 = 20 * qtdGeral[9]
        valorTotal += total10
        verifica[9] = 1

        let divRevisao = document.createElement('div')
        divRevisao.setAttribute('class', 'telaRev')
        divMain2.appendChild(divRevisao)
        let p1 = document.createElement('p')
        divRevisao.appendChild(p1)
        p1.innerHTML = 'LANCHE:'
        let p2 = document.createElement('p')
        divRevisao.appendChild(p2)
        p2.innerHTML = 'QTD:'
        let p3 = document.createElement('p')
        divRevisao.appendChild(p3)
        p3.innerHTML = 'SUBTOTAL:'

        criaIconePizza(p1)
        let div1 = document.createElement('div')
        div1.setAttribute('class', 'nomePdt')
        p1.appendChild(div1)
        div1.innerHTML = `Carne`

        let div2 = document.createElement('div')
        botaomenos(div2, p2, 9)
        p2.appendChild(div2)
        div2.setAttribute('class', 'unidades')
        div2.setAttribute('id', 'unid10')
        div2.innerHTML = `${qtdGeral[9]}`
        botaomais(div2, p2, 9)

        let div3 = document.createElement('div')
        p3.appendChild(div3)
        div3.innerHTML = `${total10}`
        criaLixeira(divRevisao)
}

// ---------------- SESSÃO DE BEBIDAS ----------------
function calc11(){

        var total11 = 2.50 * qtdGeral[10]
        valorTotal += total11
        verifica[10] = 1

        let divRevisao = document.createElement('div')
        divRevisao.setAttribute('class', 'telaRev')
        divMain2.appendChild(divRevisao)
        let p1 = document.createElement('p')
        divRevisao.appendChild(p1)
        p1.innerHTML = 'LANCHE:'
        let p2 = document.createElement('p')
        divRevisao.appendChild(p2)
        p2.innerHTML = 'QTD:'
        let p3 = document.createElement('p')
        divRevisao.appendChild(p3)
        p3.innerHTML = 'SUBTOTAL:'

        criaIconeBebidas(p1)
        let div1 = document.createElement('div')
        div1.setAttribute('class', 'nomePdt')
        p1.appendChild(div1)
        div1.innerHTML = `Coca-Cola`

        let div2 = document.createElement('div')
        botaomenos(div2, p2, 10)
        p2.appendChild(div2)
        div2.setAttribute('class', 'unidades')
        div2.setAttribute('id', 'unid11')
        div2.innerHTML = `${qtdGeral[10]}`
        botaomais(div2, p2, 10)

        let div3 = document.createElement('div')
        p3.appendChild(div3)
        div3.innerHTML = `${total11}`
        criaLixeira(divRevisao)
}

function calc12(){

        var total12 = 2.50 * qtdGeral[11]
        valorTotal += total12
        verifica[11] = 1

        let divRevisao = document.createElement('div')
        divRevisao.setAttribute('class', 'telaRev')
        divMain2.appendChild(divRevisao)
        let p1 = document.createElement('p')
        divRevisao.appendChild(p1)
        p1.innerHTML = 'LANCHE:'
        let p2 = document.createElement('p')
        divRevisao.appendChild(p2)
        p2.innerHTML = 'QTD:'
        let p3 = document.createElement('p')
        divRevisao.appendChild(p3)
        p3.innerHTML = 'SUBTOTAL:'

        criaIconeBebidas(p1)
        let div1 = document.createElement('div')
        div1.setAttribute('class', 'nomePdt')
        p1.appendChild(div1)
        div1.innerHTML = `Refrigerante Fanta`

        let div2 = document.createElement('div')
        botaomenos(div2, p2, 11)
        p2.appendChild(div2)
        div2.setAttribute('class', 'unidades')
        div2.setAttribute('id', 'unid12')
        div2.innerHTML = `${qtdGeral[11]}`
        botaomais(div2, p2, 11)

        let div3 = document.createElement('div')
        p3.appendChild(div3)
        div3.innerHTML = `${total12}`
        criaLixeira(divRevisao)
}

function calc13(){

        var total13 = 2.50 * qtdGeral[12]
        valorTotal += total13
        verifica[12] = 1

        let divRevisao = document.createElement('div')
        divRevisao.setAttribute('class', 'telaRev')
        divMain2.appendChild(divRevisao)
        let p1 = document.createElement('p')
        divRevisao.appendChild(p1)
        p1.innerHTML = 'LANCHE:'
        let p2 = document.createElement('p')
        divRevisao.appendChild(p2)
        p2.innerHTML = 'QTD:'
        let p3 = document.createElement('p')
        divRevisao.appendChild(p3)
        p3.innerHTML = 'SUBTOTAL:'

        criaIconeBebidas(p1)
        let div1 = document.createElement('div')
        div1.setAttribute('class', 'nomePdt')
        p1.appendChild(div1)
        div1.innerHTML = `Refrigerante Guaraná`

        let div2 = document.createElement('div')
        botaomenos(div2, p2, 12)
        p2.appendChild(div2)
        div2.setAttribute('class', 'unidades')
        div2.setAttribute('id', 'unid13')
        div2.innerHTML = `${qtdGeral[12]}`
        botaomais(div2, p2, 12)

        let div3 = document.createElement('div')
        p3.appendChild(div3)
        div3.innerHTML = `${total13}`
        criaLixeira(divRevisao)
}

function calc14(){

        var total14 = 1.50 * qtdGeral[13]
        valorTotal += total14
        verifica[13] = 1

        let divRevisao = document.createElement('div')
        divRevisao.setAttribute('class', 'telaRev')
        divMain2.appendChild(divRevisao)
        let p1 = document.createElement('p')
        divRevisao.appendChild(p1)
        p1.innerHTML = 'LANCHE:'
        let p2 = document.createElement('p')
        divRevisao.appendChild(p2)
        p2.innerHTML = 'QTD:'
        let p3 = document.createElement('p')
        divRevisao.appendChild(p3)
        p3.innerHTML = 'SUBTOTAL:'

        criaIconeBebidas(p1)
        let div1 = document.createElement('div')
        div1.setAttribute('class', 'nomePdt')
        p1.appendChild(div1)
        div1.innerHTML = `Suco de Laranja`

        let div2 = document.createElement('div')
        botaomenos(div2, p2, 13)
        p2.appendChild(div2)
        div2.setAttribute('class', 'unidades')
        div2.setAttribute('id', 'unid14')
        div2.innerHTML = `${qtdGeral[13]}`
        botaomais(div2, p2, 13)

        let div3 = document.createElement('div')
        p3.appendChild(div3)
        div3.innerHTML = `${total14}`
        criaLixeira(divRevisao)
}

function calc15(){

        var total15 = 1 * qtdGeral[14]
        valorTotal += total15
        verifica[14] = 1

        let divRevisao = document.createElement('div')
        divRevisao.setAttribute('class', 'telaRev')
        divMain2.appendChild(divRevisao)
        let p1 = document.createElement('p')
        divRevisao.appendChild(p1)
        p1.innerHTML = 'LANCHE:'
        let p2 = document.createElement('p')
        divRevisao.appendChild(p2)
        p2.innerHTML = 'QTD:'
        let p3 = document.createElement('p')
        divRevisao.appendChild(p3)
        p3.innerHTML = 'SUBTOTAL:'

        criaIconeBebidas(p1)
        let div1 = document.createElement('div')
        div1.setAttribute('class', 'nomePdt')
        p1.appendChild(div1)
        div1.innerHTML = `Água Mineral`

        let div2 = document.createElement('div')
        botaomenos(div2, p2, 14)
        p2.appendChild(div2)
        div2.setAttribute('class', 'unidades')
        div2.setAttribute('id', 'unid15')
        div2.innerHTML = `${qtdGeral[14]}`
        botaomais(div2, p2, 14)

        let div3 = document.createElement('div')
        p3.appendChild(div3)
        div3.innerHTML = `${total15}`
        criaLixeira(divRevisao)
}

// ---------------- SESSÃO DE SOBREMESA ----------------
function calc16(){

        var total16 = 1 * qtdGeral[15]
        valorTotal += total16
        verifica[15] = 1

        let divRevisao = document.createElement('div')
        divRevisao.setAttribute('class', 'telaRev')
        divMain2.appendChild(divRevisao)
        let p1 = document.createElement('p')
        divRevisao.appendChild(p1)
        p1.innerHTML = 'LANCHE:'
        let p2 = document.createElement('p')
        divRevisao.appendChild(p2)
        p2.innerHTML = 'QTD:'
        let p3 = document.createElement('p')
        divRevisao.appendChild(p3)
        p3.innerHTML = 'SUBTOTAL:'

        criaIconeSobre(p1)
        let div1 = document.createElement('div')
        div1.setAttribute('class', 'nomePdt')
        p1.appendChild(div1)
        div1.innerHTML = `Sorvete de Chocolate`

        let div2 = document.createElement('div')
        botaomenos(div2, p2, 15)
        p2.appendChild(div2)
        div2.setAttribute('class', 'unidades')
        div2.setAttribute('id', 'unid16')
        div2.innerHTML = `${qtdGeral[15]}`
        botaomais(div2, p2, 15)

        let div3 = document.createElement('div')
        p3.appendChild(div3)
        div3.innerHTML = `${total16}`
        criaLixeira(divRevisao)
}

function calc17(){

        var total17 = 1 * qtdGeral[16]
        valorTotal += total17
        verifica[16] = 1

        let divRevisao = document.createElement('div')
        divRevisao.setAttribute('class', 'telaRev')
        divMain2.appendChild(divRevisao)
        let p1 = document.createElement('p')
        divRevisao.appendChild(p1)
        p1.innerHTML = 'LANCHE:'
        let p2 = document.createElement('p')
        divRevisao.appendChild(p2)
        p2.innerHTML = 'QTD:'
        let p3 = document.createElement('p')
        divRevisao.appendChild(p3)
        p3.innerHTML = 'SUBTOTAL:'

        criaIconeSobre(p1)
        let div1 = document.createElement('div')
        div1.setAttribute('class', 'nomePdt')
        p1.appendChild(div1)
        div1.innerHTML = `Milkshake`

        let div2 = document.createElement('div')
        botaomenos(div2, p2, 16)
        p2.appendChild(div2)
        div2.setAttribute('class', 'unidades')
        div2.setAttribute('id', 'unid17')
        div2.innerHTML = `${qtdGeral[16]}`
        botaomais(div2, p2, 16)

        let div3 = document.createElement('div')
        p3.appendChild(div3)
        div3.innerHTML = `${total17}`
        criaLixeira(divRevisao)
}

function calc18(){

        var total18 = 1 * qtdGeral[17]
        valorTotal += total18
        verifica[17] = 1

        let divRevisao = document.createElement('div')
        divRevisao.setAttribute('class', 'telaRev')
        divMain2.appendChild(divRevisao)
        let p1 = document.createElement('p')
        divRevisao.appendChild(p1)
        p1.innerHTML = 'LANCHE:'
        let p2 = document.createElement('p')
        divRevisao.appendChild(p2)
        p2.innerHTML = 'QTD:'
        let p3 = document.createElement('p')
        divRevisao.appendChild(p3)
        p3.innerHTML = 'SUBTOTAL:'

        criaIconeSobre(p1)
        let div1 = document.createElement('div')
        div1.setAttribute('class', 'nomePdt')
        p1.appendChild(div1)
        div1.innerHTML = `Açaí`

        let div2 = document.createElement('div')
        botaomenos(div2, p2, 17)
        p2.appendChild(div2)
        div2.setAttribute('class', 'unidades')
        div2.setAttribute('id', 'unid18')
        div2.innerHTML = `${qtdGeral[17]}`
        botaomais(div2, p2, 17)

        let div3 = document.createElement('div')
        p3.appendChild(div3)
        div3.innerHTML = `${total18}`
        criaLixeira(divRevisao)
}

function calc19(){

        var total19 = 1 * qtdGeral[18]
        valorTotal += total19
        verifica[18] = 1

        let divRevisao = document.createElement('div')
        divRevisao.setAttribute('class', 'telaRev')
        divMain2.appendChild(divRevisao)
        let p1 = document.createElement('p')
        divRevisao.appendChild(p1)
        p1.innerHTML = 'LANCHE:'
        let p2 = document.createElement('p')
        divRevisao.appendChild(p2)
        p2.innerHTML = 'QTD:'
        let p3 = document.createElement('p')
        divRevisao.appendChild(p3)
        p3.innerHTML = 'SUBTOTAL:'

        criaIconeSobre(p1)
        let div1 = document.createElement('div')
        div1.setAttribute('class', 'nomePdt')
        p1.appendChild(div1)
        div1.innerHTML = `Sorvete de Morango`

        let div2 = document.createElement('div')
        botaomenos(div2, p2, 18)
        p2.appendChild(div2)
        div2.setAttribute('class', 'unidades')
        div2.setAttribute('id', 'unid19')
        div2.innerHTML = `${qtdGeral[18]}`
        botaomais(div2, p2, 18)

        let div3 = document.createElement('div')
        p3.appendChild(div3)
        div3.innerHTML = `${total19}`
        criaLixeira(divRevisao)
}

function calc20(){

        var total20 = 1 * qtdGeral[19]
        valorTotal += total20
        verifica[19] = 1

        let divRevisao = document.createElement('div')
        divRevisao.setAttribute('class', 'telaRev')
        divMain2.appendChild(divRevisao)
        let p1 = document.createElement('p')
        divRevisao.appendChild(p1)
        p1.innerHTML = 'LANCHE'
        let p2 = document.createElement('p')
        divRevisao.appendChild(p2)
        p2.innerHTML = 'QTD'
        let p3 = document.createElement('p')
        divRevisao.appendChild(p3)
        p3.innerHTML = 'SUBTOTAL'

        criaIconeSobre(p1)
        let div1 = document.createElement('div')
        div1.setAttribute('class', 'nomePdt')
        p1.appendChild(div1)
        div1.innerHTML = `Picolé`

        let div2 = document.createElement('div')
        botaomenos(div2, p2, 19)
        p2.appendChild(div2)
        div2.setAttribute('class', 'unidades')
        div2.setAttribute('id', 'unid20')
        div2.innerHTML = `${qtdGeral[19]}`
        botaomais(div2, p2, 19)

        let div3 = document.createElement('div')
        p3.appendChild(div3)
        div3.innerHTML = `${total20}`
        criaLixeira(divRevisao)
}

function criarSimples(){
        if(verifica[0] == 0){
                calc01()
        }
        else{
                let divUnid = document.getElementById('unid01')
                divUnid.innerHTML = `${qtdGeral[0]}`
        }
}
function criarPicanha(){
        if(verifica[1] == 0){
                calc02()
        }
        else{
                let divUnid = document.getElementById('unid02')
                divUnid.innerHTML = `${qtdGeral[1]}`
        }
}
function criarTudo(){
        if(verifica[2] == 0){
                calc03()
        }
        else{
                let divUnid = document.getElementById('unid03')
                divUnid.innerHTML = `${qtdGeral[2]}`
        }
}
function criarChicken(){
        if(verifica[3] == 0){
                calc04()
        }
        else{
                let divUnid = document.getElementById('unid04')
                divUnid.innerHTML = `${qtdGeral[3]}`
        }
}
function criarDuplo(){
        if(verifica[4] == 0){
                calc05()
        }
        else{
                let divUnid = document.getElementById('unid05')
                divUnid.innerHTML = `${qtdGeral[4]}`
        }
}
function criarChefe(){
        if(verifica[5] == 0){
                calc06()
        }
        else{
                let divUnid = document.getElementById('unid06')
                divUnid.innerHTML = `${qtdGeral[5]}`
        }
}
function criarQueijos(){
        if(verifica[6] == 0){
                calc07()
        }
        else{
                let divUnid = document.getElementById('unid07')
                divUnid.innerHTML = `${qtdGeral[6]}`
        }
}
function criarPaulista(){
        if(verifica[7] == 0){
                calc08()
        }
        else{
                let divUnid = document.getElementById('unid08')
                divUnid.innerHTML = `${qtdGeral[7]}`
        }
}
function criarRomana(){
        if(verifica[8] == 0){
                calc09()
        }
        else{
                let divUnid = document.getElementById('unid09')
                divUnid.innerHTML = `${qtdGeral[8]}`
        }
}
function criarCarne(){
        if(verifica[9] == 0){
                calc10()
        }
        else{
                let divUnid = document.getElementById('unid10')
                divUnid.innerHTML = `${qtdGeral[9]}`
        }
}
function criarCoca(){
        if(verifica[10] == 0){
                calc11()
        }
        else{
                let divUnid = document.getElementById('unid11')
                divUnid.innerHTML = `${qtdGeral[10]}`
        }
}
function criarFanta(){
        if(verifica[11] == 0){
                calc12()
        }
        else{
                let divUnid = document.getElementById('unid12')
                divUnid.innerHTML = `${qtdGeral[11]}`
        }
}
function criarGuarana(){
        if(verifica[12] == 0){
                calc13()
        }
        else{
                let divUnid = document.getElementById('unid13')
                divUnid.innerHTML = `${qtdGeral[12]}`
        }
}
function criarSuco(){
        if(verifica[13] == 0){
                calc14()
        }
        else{
                let divUnid = document.getElementById('unid14')
                divUnid.innerHTML = `${qtdGeral[13]}`
        }
}
function criarAgua(){
        if(verifica[14] == 0){
                calc15()
        }
        else{
                let divUnid = document.getElementById('unid15')
                divUnid.innerHTML = `${qtdGeral[14]}`
        }
}
function criarChoco(){
        if(verifica[15] == 0){
                calc16()
        }
        else{
                let divUnid = document.getElementById('unid16')
                divUnid.innerHTML = `${qtdGeral[15]}`
        }
}
function criarMilk(){
        if(verifica[16] == 0){
                calc17()
        }
        else{
                let divUnid = document.getElementById('unid17')
                divUnid.innerHTML = `${qtdGeral[16]}`
        }
}
function criarAcai(){
        if(verifica[17] == 0){
                calc18()
        }
        else{
                let divUnid = document.getElementById('unid18')
                divUnid.innerHTML = `${qtdGeral[17]}`
        }
}
function criarMorango(){
        if(verifica[18] == 0){
                calc19()
        }
        else{
                let divUnid = document.getElementById('unid19')
                divUnid.innerHTML = `${qtdGeral[18]}`
        }
}
function criarPicole(){
        if(verifica[19] == 0){
                calc20()
        }
        else{
                let divUnid = document.getElementById('unid20')
                divUnid.innerHTML = `${qtdGeral[19]}`
        }
}

var contadorRev = 0
function secRevisao(){
        if(numCompras.innerHTML != '0'){
                mainPrincipal.style.display = 'none'
                mainRevisao.style.display = 'block'
                var cont = 0
                for(var i=0; i < qtdGeral.length; i++){
                        if(qtdGeral[i] > 0){
                                cont += 1
                                if(i == 0){
                                        criarSimples()
                                }
                                else if(i == 1){
                                        criarPicanha()
                                }
                                else if(i == 2){
                                        criarTudo()
                                }
                                else if(i == 3){
                                        criarChicken()
                                }
                                else if(i == 4){
                                        criarDuplo()
                                }
                                else if(i == 5){
                                        criarChefe()
                                }
                                else if(i == 6){
                                        criarQueijos()
                                }
                                else if(i == 7){
                                        criarPaulista()
                                }
                                else if(i == 8){
                                        criarRomana()
                                }
                                else if(i == 9){
                                        criarCarne()
                                }
                                else if(i == 10){
                                        criarCoca()
                                }
                                else if(i == 11){
                                        criarFanta()
                                }
                                else if(i == 12){
                                        criarGuarana()
                                }
                                else if(i == 13){
                                        criarSuco()
                                }
                                else if(i == 14){
                                        criarAgua()
                                }
                                else if(i == 15){
                                        criarChoco()
                                }
                                else if(i == 16){
                                        criarMilk()
                                }
                                else if(i == 17){
                                        criarAcai()
                                }
                                else if(i == 18){
                                        criarMorango()
                                }
                                else{
                                        criarPicole()
                                }
                        }
                }
                if(contadorRev == 0){
                        let numTotal = document.createElement('p')
                        numTotal.setAttribute('id', 'numTotal')
                        divMain2.appendChild(numTotal)
                        numTotal.innerHTML = `Total a pagar: ${valorTotal}`
                        numTotal.style.backgroundColor = 'black'
                        numTotal.style.color = 'white'
                }
                else{
                        let divTotal = document.getElementById('numTotal')
                        divTotal.innerHTML = `Total a pagar: ${valorTotal}`
                }
                contadorRev = 1
                numCompras2.innerHTML = `${cont} Lanches`
        }
        else{
                window.alert('[ERRO] Nenhum lanche foi adiciodado ao carrinho!')
        }
}

function dCompra(){
        setTimeout(function(){
                compras.style.display = 'block'
                compras.style.marginTop = '150px'
        }, 0);
        setTimeout(function(){
                compras.style.marginTop = '-10px'
                compras.style.transitionDuration = '0.8s'
        }, 1000);
        setTimeout(function(){
                compras.style.display = 'none' 
        }, 2000);
}

// PEGANDO TODOS OS ID's DAS QUANTIDADES DE CADA ELEMENTO

// ------- SESSÃO DE HAMBÚRGUERES --------
let unidSimples = window.document.getElementById('unidSimples')
let unidPicanha = window.document.getElementById('unidPicanha')
let unidTudo = window.document.getElementById('unidTudo')
let unidChicken = window.document.getElementById('unidChicken')
let unidDuplo = window.document.getElementById('unidDuplo')

// ------- SESSÃO DE PIZZA --------
let unidChefe = window.document.getElementById('unidChefe')
let unidQueijos = window.document.getElementById('unidQueijos')
let unidPaulista = window.document.getElementById('unidPaulista')
let unidRomana = window.document.getElementById('unidRomana')
let unidCarne = window.document.getElementById('unidCarne')

// ------- SESSÃO DE BEBIDAS --------
let unidCoca = window.document.getElementById('unidCoca')
let unidFanta = window.document.getElementById('unidFanta')
let unidGuarana = window.document.getElementById('unidGuarana')
let unidSuco = window.document.getElementById('unidSuco')
let unidAgua = window.document.getElementById('unidAgua')

// ------- SESSÃO DE SOBREMESA --------
let unidChoco = window.document.getElementById('unidChoco')
let unidMilk = window.document.getElementById('unidMilk')
let unidAcai = window.document.getElementById('unidAcai')
let unidMorango = window.document.getElementById('unidMorango')
let unidPicole = window.document.getElementById('unidPicole')

// PEGANDO OS ID's DOS ÍCONES DE CADA SESSÃO
let i1 = window.document.getElementById('img1')
let i2 = window.document.getElementById('img2')
let i3 = window.document.getElementById('img3')
let i4 = window.document.getElementById('img4')


// CONTROLE DE DISPLAY's DE CADA SESSÃO
menu.style.display = 'none'
secHam.style.display = 'block'
secPizza.style.display = 'none'
secBebidas.style.display = 'none'
secSorvetes.style.display = 'none'


// LISTA RELACIONADA A QUANTIDADE COMPRADA DE CADA PRODUTO
var qtdGeral = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

// FUNÇÕES QUE ADICIONAM A QUANTIADE DOS PRODUTOS COMPRADOS

// ------- SESSÃO DE HAMBÚRGUERES --------
function simples(aviso){
        var contParcial = 0
        qtdGeral[0] += 1
        unidSimples.style.display = 'inline'
        unidSimples.innerHTML = `${qtdGeral[0]}`
        if(qtdGeral[0] == 1){
                compras.innerHTML = `<span class="material-symbols-outlined"> add_task </span> ${qtdGeral[0]} Simples adicionado aos pedidos!`
        }
        else{
                compras.innerHTML =  '<span class="material-symbols-outlined"> add_task </span> Outro(a) SIMPLES adicionado aos pedidos!'
        }
        aviso
        for(var i=0; i < qtdGeral.length; i++){
                if(qtdGeral[i] > 0){
                        contParcial += 1
                }
        }
        numCompras.innerHTML = `${contParcial}`
        
}

function picanha(aviso){
        var contParcial = 0
        qtdGeral[1] += 1
        unidPicanha.style.display = 'block'
        unidPicanha.innerHTML = `${qtdGeral[1]}`
        if(qtdGeral[1] == 1){
                compras.innerHTML = `<span class="material-symbols-outlined"> add_task </span> ${qtdGeral[1]} X-Picanha adicionado aos pedidos!`
        }
        else{
                compras.innerHTML =  '<span class="material-symbols-outlined"> add_task </span> Outro(a) X-Picanha adicionado aos pedidos!'
        }
        aviso
        for(var i=0; i < qtdGeral.length; i++){
                if(qtdGeral[i] > 0){
                        contParcial += 1
                }
        }
        numCompras.innerHTML = `${contParcial}`
        
}

function tudo(aviso){
        var contParcial = 0
        qtdGeral[2] += 1
        unidTudo.style.display = 'block'
        unidTudo.innerHTML = `${qtdGeral[2]}`
        if(qtdGeral[2] == 1){
                compras.innerHTML = `<span class="material-symbols-outlined"> add_task </span> ${qtdGeral[2]} X-Tudo adicionado aos pedidos!`
        }
        else{
                compras.innerHTML =  '<span class="material-symbols-outlined"> add_task </span> Outro(a) X-Tudo adicionado aos pedidos!'
        }
        aviso
        for(var i=0; i < qtdGeral.length; i++){
                if(qtdGeral[i] > 0){
                        contParcial += 1
                }
        }
        numCompras.innerHTML = `${contParcial}`
}

function chicken(aviso){
        var contParcial = 0
        qtdGeral[3] += 1
        unidChicken.style.display = 'block'
        unidChicken.innerHTML = `${qtdGeral[3]}`
        if(qtdGeral[3] == 1){
                compras.innerHTML = `<span class="material-symbols-outlined"> add_task </span> ${qtdGeral[3]} Chicken adicionado aos pedidos!`
        }
        else{
                compras.innerHTML =  '<span class="material-symbols-outlined"> add_task </span> Outro(a) Chicken adicionado aos pedidos!'
        }
        aviso
        for(var i=0; i < qtdGeral.length; i++){
                if(qtdGeral[i] > 0){
                        contParcial += 1
                }
        }
        numCompras.innerHTML = `${contParcial}`
}

function duplo(aviso){
        var contParcial = 0
        qtdGeral[4] += 1
        unidDuplo.style.display = 'block'
        unidDuplo.innerHTML = `${qtdGeral[4]}`
        if(qtdGeral[4] == 1){
                compras.innerHTML = `<span class="material-symbols-outlined"> add_task </span> ${qtdGeral[4]} Duplo X-Tudo de Picanha adicionado aos pedidos!`
        }
        else{
                compras.innerHTML =  '<span class="material-symbols-outlined"> add_task </span> Outro(a) Duplo X-Tudo de Picanha adicionado aos pedidos!'
        }
        aviso
        for(var i=0; i < qtdGeral.length; i++){
                if(qtdGeral[i] > 0){
                        contParcial += 1
                }
        }
        numCompras.innerHTML = `${contParcial}`
}
// ------- SESSÃO DE PIZZA --------
function chefe(aviso){
        var contParcial = 0
        qtdGeral[5] += 1
        unidChefe.style.display = 'block'
        unidChefe.innerHTML = `${qtdGeral[5]}`
        if(qtdGeral[5] == 1){
                compras.innerHTML = `<span class="material-symbols-outlined"> add_task </span> ${qtdGeral[5]} Chefe adicionado aos pedidos!`
        }
        else{
                compras.innerHTML =  '<span class="material-symbols-outlined"> add_task </span> Outro(a) Chefe adicionado aos pedidos!'
        }
        aviso
        for(var i=0; i < qtdGeral.length; i++){
                if(qtdGeral[i] > 0){
                        contParcial += 1
                }
        }
        numCompras.innerHTML = `${contParcial}`
}

function queijos(aviso){
        var contParcial = 0
        qtdGeral[6] += 1
        unidQueijos.style.display = 'block'
        unidQueijos.innerHTML = `${qtdGeral[6]}`
        if(qtdGeral[6] == 1){
                compras.innerHTML = `<span class="material-symbols-outlined"> add_task </span> ${qtdGeral[6]} 4-Queijos adicionado aos pedidos!`
        }
        else{
                compras.innerHTML =  '<span class="material-symbols-outlined"> add_task </span> Outro(a) 4-Queijos adicionado aos pedidos!'
        }
        aviso
        for(var i=0; i < qtdGeral.length; i++){
                if(qtdGeral[i] > 0){
                        contParcial += 1
                }
        }
        numCompras.innerHTML = `${contParcial}`
}

function paulista(aviso){
        var contParcial = 0
        qtdGeral[7] += 1
        unidPaulista.style.display = 'block'
        unidPaulista.innerHTML = `${qtdGeral[7]}`
        if(qtdGeral[7] == 1){
                compras.innerHTML = `<span class="material-symbols-outlined"> add_task </span> ${qtdGeral[7]} Paulista adicionado aos pedidos!`
        }
        else{
                compras.innerHTML =  '<span class="material-symbols-outlined"> add_task </span> Outro(a) Paulista adicionado aos pedidos!'
        }
        aviso
        for(var i=0; i < qtdGeral.length; i++){
                if(qtdGeral[i] > 0){
                        contParcial += 1
                }
        }
        numCompras.innerHTML = `${contParcial}`
}

function romana(aviso){
        var contParcial = 0
        qtdGeral[8] += 1
        unidRomana.style.display = 'block'
        unidRomana.innerHTML = `${qtdGeral[8]}`
        if(qtdGeral[8] == 1){
                compras.innerHTML = `<span class="material-symbols-outlined"> add_task </span> ${qtdGeral[8]} Romana adicionado aos pedidos!`
        }
        else{
                compras.innerHTML =  '<span class="material-symbols-outlined"> add_task </span> Outro(a) Romana adicionado aos pedidos!'
        }
        aviso
        for(var i=0; i < qtdGeral.length; i++){
                if(qtdGeral[i] > 0){
                        contParcial += 1
                }
        }
        numCompras.innerHTML = `${contParcial}`
}

function carne(aviso){
        var contParcial = 0
        qtdGeral[9] += 1
        unidCarne.style.display = 'block'
        unidCarne.innerHTML = `${qtdGeral[9]}`
        if(qtdGeral[9] == 1){
                compras.innerHTML = `<span class="material-symbols-outlined"> add_task </span> ${qtdGeral[9]} Carne adicionado aos pedidos!`
        }
        else{
                compras.innerHTML =  '<span class="material-symbols-outlined"> add_task </span> Outro(a) Carne adicionado aos pedidos!'
        }
        aviso
        for(var i=0; i < qtdGeral.length; i++){
                if(qtdGeral[i] > 0){
                        contParcial += 1
                }
        }
        numCompras.innerHTML = `${contParcial}`
}
// ------- SESSÃO DE BEBIDAS --------
function coca(aviso){
        var contParcial = 0
        qtdGeral[10] += 1
        unidCoca.style.display = 'block'
        unidCoca.innerHTML = `${qtdGeral[10]}`
        if(qtdGeral[10] == 1){
                compras.innerHTML = `<span class="material-symbols-outlined"> add_task </span> ${qtdGeral[10]} Coca-Cola adicionado aos pedidos!`
        }
        else{
                compras.innerHTML =  '<span class="material-symbols-outlined"> add_task </span> Outro(a) Coca-Cola adicionado aos pedidos!'
        }
        aviso
        for(var i=0; i < qtdGeral.length; i++){
                if(qtdGeral[i] > 0){
                        contParcial += 1
                }
        }
        numCompras.innerHTML = `${contParcial}`
}

function fanta(aviso){
        var contParcial = 0
        qtdGeral[11] += 1
        unidFanta.style.display = 'block'
        unidFanta.innerHTML = `${qtdGeral[11]}`
        if(qtdGeral[11] == 1){
                compras.innerHTML = `<span class="material-symbols-outlined"> add_task </span> ${qtdGeral[11]} Fanta adicionado aos pedidos!`
        }
        else{
                compras.innerHTML =  '<span class="material-symbols-outlined"> add_task </span> Outro(a) Fanta adicionado aos pedidos!'
        }
        aviso
        for(var i=0; i < qtdGeral.length; i++){
                if(qtdGeral[i] > 0){
                        contParcial += 1
                }
        }
        numCompras.innerHTML = `${contParcial}`
}

function guarana(aviso){
        var contParcial = 0
        qtdGeral[12] += 1
        unidGuarana.style.display = 'block'
        unidGuarana.innerHTML = `${qtdGeral[12]}`
        if(qtdGeral[12] == 1){
                compras.innerHTML = `<span class="material-symbols-outlined"> add_task </span> ${qtdGeral[12]} Guaraná adicionado aos pedidos!`
        }
        else{
                compras.innerHTML =  '<span class="material-symbols-outlined"> add_task </span> Outro(a) Guaraná adicionado aos pedidos!'
        }
        aviso
        for(var i=0; i < qtdGeral.length; i++){
                if(qtdGeral[i] > 0){
                        contParcial += 1
                }
        }
        numCompras.innerHTML = `${contParcial}`
}

function suco(aviso){
        var contParcial = 0
        qtdGeral[13] += 1
        unidSuco.style.display = 'block'
        unidSuco.innerHTML = `${qtdGeral[13]}`
        if(qtdGeral[13] == 1){
                compras.innerHTML = `<span class="material-symbols-outlined"> add_task </span> ${qtdGeral[13]} Suco de Laranja adicionado aos pedidos!`
        }
        else{
                compras.innerHTML =  '<span class="material-symbols-outlined"> add_task </span> Outro(a) Suco de Laranja adicionado aos pedidos!'
        }
        aviso
        for(var i=0; i < qtdGeral.length; i++){
                if(qtdGeral[i] > 0){
                        contParcial += 1
                }
        }
        numCompras.innerHTML = `${contParcial}`
}

function agua(aviso){
        var contParcial = 0
        qtdGeral[14] += 1
        unidAgua.style.display = 'block'
        unidAgua.innerHTML = `${qtdGeral[14]}`
        if(qtdGeral[14] == 1){
                compras.innerHTML = `<span class="material-symbols-outlined"> add_task </span> ${qtdGeral[14]} Água adicionado aos pedidos!`
        }
        else{
                compras.innerHTML =  '<span class="material-symbols-outlined"> add_task </span> Outro(a) Água adicionado aos pedidos!'
        }
        aviso
        for(var i=0; i < qtdGeral.length; i++){
                if(qtdGeral[i] > 0){
                        contParcial += 1
                }
        }
        numCompras.innerHTML = `${contParcial}`
}
// ------- SESSÃO DE SOBREMESA --------
function choco(aviso){
        var contParcial = 0
        qtdGeral[15] += 1
        unidChoco.style.display = 'block'
        unidChoco.innerHTML = `${qtdGeral[15]}`
        if(qtdGeral[15] == 1){
                compras.innerHTML = `<span class="material-symbols-outlined"> add_task </span> ${qtdGeral[15]} Sorvete de Chocolate adicionado aos pedidos!`
        }
        else{
                compras.innerHTML =  '<span class="material-symbols-outlined"> add_task </span> Outro(a) Sorvete de Chocolate adicionado aos pedidos!'
        }
        aviso
        for(var i=0; i < qtdGeral.length; i++){
                if(qtdGeral[i] > 0){
                        contParcial += 1
                }
        }
        numCompras.innerHTML = `${contParcial}`
}

function milk(aviso){
        var contParcial = 0
        qtdGeral[16] += 1
        unidMilk.style.display = 'block'
        unidMilk.innerHTML = `${qtdGeral[16]}`
        if(qtdGeral[16] == 1){
                compras.innerHTML = `<span class="material-symbols-outlined"> add_task </span> ${qtdGeral[16]} MilkShake adicionado aos pedidos!`
        }
        else{
                compras.innerHTML =  '<span class="material-symbols-outlined"> add_task </span> Outro(a) MilkShake adicionado aos pedidos!'
        }
        aviso
        for(var i=0; i < qtdGeral.length; i++){
                if(qtdGeral[i] > 0){
                        contParcial += 1
                }
        }
        numCompras.innerHTML = `${contParcial}`
}

function acai(aviso){
        var contParcial = 0
        qtdGeral[17] += 1
        unidAcai.style.display = 'block'
        unidAcai.innerHTML = `${qtdGeral[17]}`
        if(qtdGeral[17] == 1){
                compras.innerHTML = `<span class="material-symbols-outlined"> add_task </span> ${qtdGeral[17]} Açaí adicionado aos pedidos!`
        }
        else{
                compras.innerHTML =  '<span class="material-symbols-outlined"> add_task </span> Outro(a) Açaí adicionado aos pedidos!'
        }
        aviso
        for(var i=0; i < qtdGeral.length; i++){
                if(qtdGeral[i] > 0){
                        contParcial += 1
                }
        }
        numCompras.innerHTML = `${contParcial}`
}

function morango(aviso){
        var contParcial = 0
        qtdGeral[18] += 1
        unidMorango.style.display = 'block'
        unidMorango.innerHTML = `${qtdGeral[18]}`
        if(qtdGeral[18] == 1){
                compras.innerHTML = `<span class="material-symbols-outlined"> add_task </span> ${qtdGeral[18]} Sorvete de Morango adicionado aos pedidos!`
        }
        else{
                compras.innerHTML =  '<span class="material-symbols-outlined"> add_task </span> Outro(a) Sorvete de Morango adicionado aos pedidos!'
        }
        aviso
        for(var i=0; i < qtdGeral.length; i++){
                if(qtdGeral[i] > 0){
                        contParcial += 1
                }
        }
        numCompras.innerHTML = `${contParcial}`
}

function picole(aviso){
        var contParcial = 0
        qtdGeral[19] += 1
        unidPicole.style.display = 'block'
        unidPicole.innerHTML = `${qtdGeral[19]}`
        if(qtdGeral[19] == 1){
                compras.innerHTML = `<span class="material-symbols-outlined"> add_task </span> ${qtdGeral[19]} Picolé adicionado aos pedidos!`
        }
        else{
                compras.innerHTML =  '<span class="material-symbols-outlined"> add_task </span> Outro(a) Picolé adicionado aos pedidos!'
        }
        aviso
        for(var i=0; i < qtdGeral.length; i++){
                if(qtdGeral[i] > 0){
                        contParcial += 1
                }
        }
        numCompras.innerHTML = `${contParcial}`
}


// FUNÇÃO DE ATIVAÇÃO DO ÍCONE DE MENU
function clicou(){
        if(menu.style.display == 'none'){
                imenu.style.backgroundColor = 'red'
                imenu.style.borderRadius = '50%'
                imenu.style.padding = '5px'

                menu.style.display = 'block'
                menu.style.backgroundColor = 'red'

                i1.style.display = 'inline-block'
                i2.style.display = 'inline-block'
                i3.style.display = 'inline-block'
                i4.style.display = 'inline-block'

                menu.style.position = 'absolute'
                menu.style.width = '100px'
                menu.style.height = '450px'
                menu.style.left = '0px'
                menu.style.opacity ='1'
        }
        else{
                menu.style.display = 'none'
                imenu.style.backgroundColor = 'rgb(22, 22, 22)'
                imenu.style.borderRadius = 'none'
                imenu.style.padding = '0px'
        }
}


// FUNCÕES DE CONTROLE DOS ÍCONES DE CADA SESSÃO
function clicou1(){
        i1.style.backgroundColor = 'yellow'
        i2.style.backgroundColor = 'red'
        i3.style.backgroundColor = 'red'
        i4.style.backgroundColor = 'red'
        if(secHam.style.display == 'none'){
                secPizza.style.display = 'none'
                secBebidas.style.display = 'none'
                secSorvetes.style.display = 'none'
                secHam.style.display = 'block'
        }
        menu.style.display = 'none'
        imenu.style.backgroundColor = 'rgb(22, 22, 22)'
        imenu.style.borderRadius = 'none'
        imenu.style.padding = '0px'
}

function clicou2(){
        i1.style.backgroundColor = 'red'
        i2.style.backgroundColor = 'yellow'
        i3.style.backgroundColor = 'red'
        i4.style.backgroundColor = 'red'
        if(secPizza.style.display == 'none'){
                secHam.style.display = 'none'
                secBebidas.style.display = 'none'
                secSorvetes.style.display = 'none'
                secPizza.style.display = 'block'
        }
        menu.style.display = 'none'
        imenu.style.backgroundColor = 'rgb(22, 22, 22)'
        imenu.style.borderRadius = 'none'
        imenu.style.padding = '0px'
}

function clicou3(){
        i1.style.backgroundColor = 'red'
        i2.style.backgroundColor = 'red'
        i3.style.backgroundColor = 'yellow'
        i4.style.backgroundColor = 'red'
        if(secBebidas.style.display == 'none'){
                secHam.style.display = 'none'
                secPizza.style.display = 'none'
                secSorvetes.style.display = 'none'
                secBebidas.style.display = 'block'
        }
        menu.style.display = 'none'
        imenu.style.backgroundColor = 'rgb(22, 22, 22)'
        imenu.style.borderRadius = 'none'
        imenu.style.padding = '0px'
}

function clicou4(){
        i1.style.backgroundColor = 'red'
        i2.style.backgroundColor = 'red'
        i3.style.backgroundColor = 'red'
        i4.style.backgroundColor = 'yellow'
        if(secSorvetes.style.display == 'none'){
                secHam.style.display = 'none'
                secPizza.style.display = 'none'
                secBebidas.style.display = 'none'
                secSorvetes.style.display = 'block'
        }
        menu.style.display = 'none'
        imenu.style.backgroundColor = 'rgb(22, 22, 22)'
        imenu.style.borderRadius = 'none'
        imenu.style.padding = '0px'
}
