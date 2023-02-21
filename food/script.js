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
let vTotal = window.document.getElementById('total')


mainRevisao.style.display = 'none'
mainPrincipal.style.display = 'block'

compras.style.position = 'absolute'
compras.style.right = '0px'
compras.style.opacity ='1'
compras.style.display = 'none'

var valorTotal2 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

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

function atualizaTotal(num, valor){
        var valorTotal = 0
        valorTotal2[num] = qtdGeral[num] * valor
        let divTotal = document.getElementById('numTotal')
        for(var i=0; i < qtdGeral.length; i++){
                valorTotal += valorTotal2[i]
        }
        divTotal.innerHTML = `Total a pagar: ${valorTotal}`
}

function addAlimentos(num){
        if(num == 0){
                let qtd01 = document.getElementById('unidSimples')
                qtd01.innerHTML = `${qtdGeral[num]}`
                let sub01 = document.getElementById('sub01')
                sub01.innerHTML = `R$ ${qtdGeral[num] * 7}`
                atualizaTotal(num, 7)
        }
        else if(num == 1){
                let qtd02 = document.getElementById('unidPicanha')
                qtd02.innerHTML = `${qtdGeral[num]}`
                let sub02 = document.getElementById('sub02')
                sub02.innerHTML = `R$ ${qtdGeral[num] * 13}`
                atualizaTotal(num, 13)
        }
        else if(num == 2){
                let qtd03 = document.getElementById('unidTudo')
                qtd03.innerHTML = `${qtdGeral[num]}`
                let sub03 = document.getElementById('sub03')
                sub03.innerHTML = `R$ ${qtdGeral[num] * 10}`
                atualizaTotal(num, 10)
        }
        else if(num == 3){
                let qtd04 = document.getElementById('unidChicken')
                qtd04.innerHTML = `${qtdGeral[num]}`
                let sub04 = document.getElementById('sub04')
                sub04.innerHTML = `R$ ${qtdGeral[num] * 12}`
                atualizaTotal(num, 12)
        }
        else if(num == 4){
                let qtd05 = document.getElementById('unidDuplo')
                qtd05.innerHTML = `${qtdGeral[num]}`
                let sub05 = document.getElementById('sub05')
                sub05.innerHTML = `R$ ${qtdGeral[num] * 17}`
                atualizaTotal(num, 17)
        }
        else if(num == 5){
                let qtd06 = document.getElementById('unidChefe')
                qtd06.innerHTML = `${qtdGeral[num]}`
                let sub06 = document.getElementById('sub06')
                sub06.innerHTML = `R$ ${qtdGeral[num] * 19.50}`
                atualizaTotal(num, 19.50)
        }
        else if(num == 6){
                let qtd07 = document.getElementById('unidQueijos')
                qtd07.innerHTML = `${qtdGeral[num]}`
                let sub07 = document.getElementById('sub07')
                sub07.innerHTML = `R$ ${qtdGeral[num] * 20}`
                atualizaTotal(num, 20)
        }
        else if(num == 7){
                let qtd08 = document.getElementById('unidPaulista')
                qtd08.innerHTML = `${qtdGeral[num]}`
                let sub08 = document.getElementById('sub08')
                sub08.innerHTML = `R$ ${qtdGeral[num] * 19}`
                atualizaTotal(num, 19)
        }
        else if(num == 8){
                let qtd09 = document.getElementById('unidRomana')
                qtd09.innerHTML = `${qtdGeral[num]}`
                let sub09 = document.getElementById('sub09')
                sub09.innerHTML = `R$ ${qtdGeral[num] * 19}`
                atualizaTotal(num, 19)
        }
        else if(num == 9){
                let qtd10 = document.getElementById('unidCarne')
                qtd10.innerHTML = `${qtdGeral[num]}`
                let sub10 = document.getElementById('sub10')
                sub10.innerHTML = `R$ ${qtdGeral[num] * 20}`
                atualizaTotal(num, 20)
        }
        else if(num == 10){
                let qtd11 = document.getElementById('unidCoca')
                qtd11.innerHTML = `${qtdGeral[num]}`
                let sub11 = document.getElementById('sub11')
                sub11.innerHTML = `R$ ${qtdGeral[num] * 2.50}`
                atualizaTotal(num, 2.50)
        }
        else if(num == 11){
                let qtd12 = document.getElementById('unidFanta')
                qtd12.innerHTML = `${qtdGeral[num]}`
                let sub12 = document.getElementById('sub12')
                sub12.innerHTML = `R$ ${qtdGeral[num] * 2.50}`
                atualizaTotal(num, 2.50)
        }
        else if(num == 12){
                let qtd13 = document.getElementById('unidGuarana')
                qtd13.innerHTML = `${qtdGeral[num]}`
                let sub13 = document.getElementById('sub13')
                sub13.innerHTML = `R$ ${qtdGeral[num] * 2.50}`
                atualizaTotal(num, 2.50)
        }
        else if(num == 13){
                let qtd14 = document.getElementById('unidSuco')
                qtd14.innerHTML = `${qtdGeral[num]}`
                let sub14 = document.getElementById('sub14')
                sub14.innerHTML = `R$ ${qtdGeral[num] * 1.50}`
                atualizaTotal(num, 1.50)
        }
        else if(num == 14){
                let qtd15 = document.getElementById('unidAgua')
                qtd15.innerHTML = `${qtdGeral[num]}`
                let sub15 = document.getElementById('sub15')
                sub15.innerHTML = `R$ ${qtdGeral[num] * 1}`
                atualizaTotal(num, 1)
        }
        else if(num == 15){
                let qtd16 = document.getElementById('unidChoco')
                qtd16.innerHTML = `${qtdGeral[num]}`
                let sub16 = document.getElementById('sub16')
                sub16.innerHTML = `R$ ${qtdGeral[num] * 10}`
                atualizaTotal(num, 10)
        }
        else if(num == 16){
                let qtd17 = document.getElementById('unidMilk')
                qtd17.innerHTML = `${qtdGeral[num]}`
                let sub17 = document.getElementById('sub17')
                sub17.innerHTML = `R$ ${qtdGeral[num] * 9}`
                atualizaTotal(num, 9)
        }
        else if(num == 17){
                let qtd18 = document.getElementById('unidAcai')
                qtd18.innerHTML = `${qtdGeral[num]}`
                let sub18 = document.getElementById('sub18')
                sub18.innerHTML = `R$ ${qtdGeral[num] * 14.50}`
                atualizaTotal(num, 14.50)
        }
        else if(num == 18){
                let qtd19 = document.getElementById('unidMorango')
                qtd19.innerHTML = `${qtdGeral[num]}`
                let sub19 = document.getElementById('sub19')
                sub19.innerHTML = `R$ ${qtdGeral[num] * 10}`
                atualizaTotal(num, 10)
        }
        else{
                let qtd20 = document.getElementById('unidPicole')
                qtd20.innerHTML = `${qtdGeral[num]}`
                let sub20 = document.getElementById('sub20')
                sub20.innerHTML = `R$ ${qtdGeral[num] * 3.50}`
                atualizaTotal(num, 3.50)
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

function criaLixeira(divRevisao, num, d){
        let lixeira = document.createElement('div')
        lixeira.setAttribute('class', 'lixo')
        lixeira.innerHTML = `<span class="material-symbols-outlined">delete</span>`
        divRevisao.appendChild(lixeira)
        lixeira.addEventListener('click', function(){
                qtdGeral[num] = 0
                valorTotal2[num] = 0
                let generico = document.getElementById(d)
                generico.style.display = 'none'
        })
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

        valorTotal2[0] = 7 * qtdGeral[0]
        verifica[0] = 1

        let divRevisao = document.createElement('div')
        divRevisao.setAttribute('class', 'telaRev')
        divRevisao.setAttribute('id', 'div01')
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
        div3.setAttribute('id', 'sub01')
        p3.appendChild(div3)
        div3.innerHTML = `R$ ${valorTotal2[0]}`
        criaLixeira(divRevisao, 0, 'div01')
}

function calc02(){

        valorTotal2[1] = 13 * qtdGeral[1]
        verifica[1] = 1

        let divRevisao = document.createElement('div')
        divRevisao.setAttribute('class', 'telaRev')
        divRevisao.setAttribute('id', 'div02')
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
        div1.innerHTML = `X-Picanha ----- R$ 13,00`

        let div2 = document.createElement('div')
        botaomenos(div2, p2, 1)
        p2.appendChild(div2)
        div2.setAttribute('class', 'unidades')
        div2.setAttribute('id', 'unid02')
        div2.innerHTML = `${qtdGeral[1]}`
        botaomais(div2, p2, 1)

        let div3 = document.createElement('div')
        p3.appendChild(div3)
        div3.setAttribute('id', 'sub02')
        div3.innerHTML = `R$ ${valorTotal2[1]}`
        criaLixeira(divRevisao, 1, 'div02')
}

function calc03(){

        valorTotal2[2] = 10 * qtdGeral[2]
        verifica[2] = 1

        let divRevisao = document.createElement('div')
        divRevisao.setAttribute('class', 'telaRev')
        divRevisao.setAttribute('id', 'div03')
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
        div1.innerHTML = `X-Tudo ----- R$ 10,00`

        let div2 = document.createElement('div')
        botaomenos(div2, p2, 2)
        p2.appendChild(div2)
        div2.setAttribute('class', 'unidades')
        div2.setAttribute('id', 'unid03')
        div2.innerHTML = `${qtdGeral[2]}`
        botaomais(div2, p2, 2)

        let div3 = document.createElement('div')
        p3.appendChild(div3)
        div3.setAttribute('id', 'sub03')
        div3.innerHTML = `R$ ${valorTotal2[2]}`
        criaLixeira(divRevisao)
}

function calc04(){

        valorTotal2[3] = 12 * qtdGeral[3]
        verifica[3] = 1

        let divRevisao = document.createElement('div')
        divRevisao.setAttribute('class', 'telaRev')
        divRevisao.setAttribute('id', 'div04')
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
        div1.innerHTML = `Chicken ----- R$ 12,00`

        let div2 = document.createElement('div')
        botaomenos(div2, p2, 3)
        p2.appendChild(div2)
        div2.setAttribute('class', 'unidades')
        div2.setAttribute('id', 'unid04')
        div2.innerHTML = `${qtdGeral[3]}`
        botaomais(div2, p2, 3)

        let div3 = document.createElement('div')
        div3.setAttribute('id', 'sub04')
        p3.appendChild(div3)
        div3.innerHTML = `R$ ${valorTotal2[3]}`
        criaLixeira(divRevisao)
}

function calc05(){

        valorTotal2[4] = 17 * qtdGeral[4]
        verifica[4] = 1

        let divRevisao = document.createElement('div')
        divRevisao.setAttribute('class', 'telaRev')
        divRevisao.setAttribute('id', 'div05')
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
        div1.innerHTML = `Duplo X-Tudo de Picanha ----- R$ 17,00`

        let div2 = document.createElement('div')
        botaomenos(div2, p2, 4)
        p2.appendChild(div2)
        div2.setAttribute('class', 'unidades')
        div2.setAttribute('id', 'unid05')
        div2.innerHTML = `${qtdGeral[4]}`
        botaomais(div2, p2, 4)

        let div3 = document.createElement('div')
        div3.setAttribute('id', 'sub05')
        p3.appendChild(div3)
        div3.innerHTML = `R$ ${valorTotal2[4]}`
        criaLixeira(divRevisao)
}

// ---------------- SESSÃO DE PIZZA ----------------
function calc06(){

        valorTotal2[5] = 19.50 * qtdGeral[5]
        verifica[5] = 1

        let divRevisao = document.createElement('div')
        divRevisao.setAttribute('class', 'telaRev')
        divRevisao.setAttribute('id', 'div06')
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
        div1.innerHTML = `Chefe ----- R$ 19,50`

        let div2 = document.createElement('div')
        botaomenos(div2, p2, 5)
        p2.appendChild(div2)
        div2.setAttribute('class', 'unidades')
        div2.setAttribute('id', 'unid06')
        div2.innerHTML = `${qtdGeral[5]}`
        botaomais(div2, p2, 5)

        let div3 = document.createElement('div')
        div3.setAttribute('id', 'sub06')
        p3.appendChild(div3)
        div3.innerHTML = `R$ ${valorTotal2[5]}`
        criaLixeira(divRevisao)
}

function calc07(){

        valorTotal2[6] = 20 * qtdGeral[6]
        verifica[6] = 1

        let divRevisao = document.createElement('div')
        divRevisao.setAttribute('class', 'telaRev')
        divRevisao.setAttribute('id', 'div07')
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
        div1.innerHTML = `4 Queijos ----- R$ 20,00`

        let div2 = document.createElement('div')
        botaomenos(div2, p2, 6)
        p2.appendChild(div2)
        div2.setAttribute('class', 'unidades')
        div2.setAttribute('id', 'unid07')
        div2.innerHTML = `${qtdGeral[6]}`
        botaomais(div2, p2, 6)

        let div3 = document.createElement('div')
        div3.setAttribute('id', 'sub07')
        p3.appendChild(div3)
        div3.innerHTML = `R$ ${valorTotal2[6]}`
        criaLixeira(divRevisao)
}

function calc08(){

        valorTotal2[7] = 19 * qtdGeral[7]
        verifica[7] = 1

        let divRevisao = document.createElement('div')
        divRevisao.setAttribute('class', 'telaRev')
        divRevisao.setAttribute('id', 'div08')
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
        div1.innerHTML = `Paulista ----- R$ 19,00`

        let div2 = document.createElement('div')
        botaomenos(div2, p2, 7)
        p2.appendChild(div2)
        div2.setAttribute('class', 'unidades')
        div2.setAttribute('id', 'unid08')
        div2.innerHTML = `${qtdGeral[7]}`
        botaomais(div2, p2, 7)

        let div3 = document.createElement('div')
        div3.setAttribute('id', 'sub08')
        p3.appendChild(div3)
        div3.innerHTML = `R$ ${valorTotal2[7]}`
        criaLixeira(divRevisao)
}

function calc09(){

        valorTotal2[8] = 19 * qtdGeral[8]
        verifica[8] = 1

        let divRevisao = document.createElement('div')
        divRevisao.setAttribute('class', 'telaRev')
        divRevisao.setAttribute('id', 'div09')
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
        div1.innerHTML = `Romana ----- R$ 19,00`

        let div2 = document.createElement('div')
        botaomenos(div2, p2, 8)
        p2.appendChild(div2)
        div2.setAttribute('class', 'unidades')
        div2.setAttribute('id', 'unid09')
        div2.innerHTML = `${qtdGeral[8]}`
        botaomais(div2, p2, 8)

        let div3 = document.createElement('div')
        div3.setAttribute('id', 'sub09')
        p3.appendChild(div3)
        div3.innerHTML = `R$ ${valorTotal2[8]}`
        criaLixeira(divRevisao)
}

function calc10(){

        valorTotal2[9] = 20 * qtdGeral[9]
        verifica[9] = 1

        let divRevisao = document.createElement('div')
        divRevisao.setAttribute('class', 'telaRev')
        divRevisao.setAttribute('id', 'div10')
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
        div1.innerHTML = `Carne ----- R$ 20,00`

        let div2 = document.createElement('div')
        botaomenos(div2, p2, 9)
        p2.appendChild(div2)
        div2.setAttribute('class', 'unidades')
        div2.setAttribute('id', 'unid10')
        div2.innerHTML = `${qtdGeral[9]}`
        botaomais(div2, p2, 9)

        let div3 = document.createElement('div')
        div3.setAttribute('id', 'sub10')
        p3.appendChild(div3)
        div3.innerHTML = `R$ ${valorTotal2[9]}`
        criaLixeira(divRevisao)
}

// ---------------- SESSÃO DE BEBIDAS ----------------
function calc11(){

        valorTotal2[10] = 2.50 * qtdGeral[10]
        verifica[10] = 1

        let divRevisao = document.createElement('div')
        divRevisao.setAttribute('class', 'telaRev')
        divRevisao.setAttribute('id', 'div11')
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
        div1.innerHTML = `Coca-Cola ----- R$ 2,50`

        let div2 = document.createElement('div')
        botaomenos(div2, p2, 10)
        p2.appendChild(div2)
        div2.setAttribute('class', 'unidades')
        div2.setAttribute('id', 'unid11')
        div2.innerHTML = `${qtdGeral[10]}`
        botaomais(div2, p2, 10)

        let div3 = document.createElement('div')
        div3.setAttribute('id', 'sub11')
        p3.appendChild(div3)
        div3.innerHTML = `R$ ${valorTotal2[10]}`
        criaLixeira(divRevisao)
}

function calc12(){

        valorTotal2[11] = 2.50 * qtdGeral[11]
        verifica[11] = 1

        let divRevisao = document.createElement('div')
        divRevisao.setAttribute('class', 'telaRev')
        divRevisao.setAttribute('id', 'div12')
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
        div1.innerHTML = `Refrigerante Fanta ----- R$ 2,50`

        let div2 = document.createElement('div')
        botaomenos(div2, p2, 11)
        p2.appendChild(div2)
        div2.setAttribute('class', 'unidades')
        div2.setAttribute('id', 'unid12')
        div2.innerHTML = `${qtdGeral[11]}`
        botaomais(div2, p2, 11)

        let div3 = document.createElement('div')
        div3.setAttribute('id', 'sub12')
        p3.appendChild(div3)
        div3.innerHTML = `R$ ${valorTotal2[11]}`
        criaLixeira(divRevisao)
}

function calc13(){

        valorTotal2[12] = 2.50 * qtdGeral[12]
        verifica[12] = 1

        let divRevisao = document.createElement('div')
        divRevisao.setAttribute('class', 'telaRev')
        divRevisao.setAttribute('id', 'div13')
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
        div1.innerHTML = `Refrigerante Guaraná ----- R$ 2,50`

        let div2 = document.createElement('div')
        botaomenos(div2, p2, 12)
        p2.appendChild(div2)
        div2.setAttribute('class', 'unidades')
        div2.setAttribute('id', 'unid13')
        div2.innerHTML = `${qtdGeral[12]}`
        botaomais(div2, p2, 12)

        let div3 = document.createElement('div')
        div3.setAttribute('id', 'sub13')
        p3.appendChild(div3)
        div3.innerHTML = `R$ ${valorTotal2[12]}`
        criaLixeira(divRevisao)
}

function calc14(){

        valorTotal2[13] = 1.50 * qtdGeral[13]
        verifica[13] = 1

        let divRevisao = document.createElement('div')
        divRevisao.setAttribute('class', 'telaRev')
        divRevisao.setAttribute('id', 'div14')
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
        div1.innerHTML = `Suco de Laranja ----- R$ 1,50`

        let div2 = document.createElement('div')
        botaomenos(div2, p2, 13)
        p2.appendChild(div2)
        div2.setAttribute('class', 'unidades')
        div2.setAttribute('id', 'unid14')
        div2.innerHTML = `${qtdGeral[13]}`
        botaomais(div2, p2, 13)

        let div3 = document.createElement('div')
        div3.setAttribute('id', 'sub14')
        p3.appendChild(div3)
        div3.innerHTML = `R$ ${valorTotal2[13]}`
        criaLixeira(divRevisao)
}

function calc15(){

        valorTotal2[14] = 1 * qtdGeral[14]
        verifica[14] = 1

        let divRevisao = document.createElement('div')
        divRevisao.setAttribute('class', 'telaRev')
        divRevisao.setAttribute('id', 'div15')
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
        div1.innerHTML = `Água Mineral ----- R$ 1,00`

        let div2 = document.createElement('div')
        botaomenos(div2, p2, 14)
        p2.appendChild(div2)
        div2.setAttribute('class', 'unidades')
        div2.setAttribute('id', 'unid15')
        div2.innerHTML = `${qtdGeral[14]}`
        botaomais(div2, p2, 14)

        let div3 = document.createElement('div')
        div3.setAttribute('id', 'sub15')
        p3.appendChild(div3)
        div3.innerHTML = `R$ ${valorTotal2[14]}`
        criaLixeira(divRevisao)
}

// ---------------- SESSÃO DE SOBREMESA ----------------
function calc16(){

        valorTotal2[15] = 10 * qtdGeral[15]
        verifica[15] = 1

        let divRevisao = document.createElement('div')
        divRevisao.setAttribute('class', 'telaRev')
        divRevisao.setAttribute('id', 'div16')
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
        div1.innerHTML = `Sorvete de Chocolate ----- R$ 10,00`

        let div2 = document.createElement('div')
        botaomenos(div2, p2, 15)
        p2.appendChild(div2)
        div2.setAttribute('class', 'unidades')
        div2.setAttribute('id', 'unid16')
        div2.innerHTML = `${qtdGeral[15]}`
        botaomais(div2, p2, 15)

        let div3 = document.createElement('div')
        div3.setAttribute('id', 'sub16')
        p3.appendChild(div3)
        div3.innerHTML = `R$ ${valorTotal2[15]}`
        criaLixeira(divRevisao)
}

function calc17(){

        valorTotal2[16] = 9 * qtdGeral[16]
        verifica[16] = 1

        let divRevisao = document.createElement('div')
        divRevisao.setAttribute('class', 'telaRev')
        divRevisao.setAttribute('id', 'div17')
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
        div1.innerHTML = `Milkshake ----- R$ 9,00`

        let div2 = document.createElement('div')
        botaomenos(div2, p2, 16)
        p2.appendChild(div2)
        div2.setAttribute('class', 'unidades')
        div2.setAttribute('id', 'unid17')
        div2.innerHTML = `${qtdGeral[16]}`
        botaomais(div2, p2, 16)

        let div3 = document.createElement('div')
        div3.setAttribute('id', 'sub17')
        p3.appendChild(div3)
        div3.innerHTML = `R$ ${valorTotal2[16]}`
        criaLixeira(divRevisao)
}

function calc18(){

        valorTotal2[17] = 14.50 * qtdGeral[17]
        verifica[17] = 1

        let divRevisao = document.createElement('div')
        divRevisao.setAttribute('class', 'telaRev')
        divRevisao.setAttribute('id', 'div18')
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
        div1.innerHTML = `Açaí ----- R$ 14,50`

        let div2 = document.createElement('div')
        botaomenos(div2, p2, 17)
        p2.appendChild(div2)
        div2.setAttribute('class', 'unidades')
        div2.setAttribute('id', 'unid18')
        div2.innerHTML = `${qtdGeral[17]}`
        botaomais(div2, p2, 17)

        let div3 = document.createElement('div')
        div3.setAttribute('id', 'sub18')
        p3.appendChild(div3)
        div3.innerHTML = `R$ ${valorTotal2[17]}`
        criaLixeira(divRevisao)
}

function calc19(){

        valorTotal2[18] = 10 * qtdGeral[18]
        verifica[18] = 1

        let divRevisao = document.createElement('div')
        divRevisao.setAttribute('class', 'telaRev')
        divRevisao.setAttribute('id', 'div19')
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
        div1.innerHTML = `Sorvete de Morango ----- R$ 10,00`

        let div2 = document.createElement('div')
        botaomenos(div2, p2, 18)
        p2.appendChild(div2)
        div2.setAttribute('class', 'unidades')
        div2.setAttribute('id', 'unid19')
        div2.innerHTML = `${qtdGeral[18]}`
        botaomais(div2, p2, 18)

        let div3 = document.createElement('div')
        div3.setAttribute('id', 'sub19')
        p3.appendChild(div3)
        div3.innerHTML = `R$ ${valorTotal2[18]}`
        criaLixeira(divRevisao)
}

function calc20(){

        valorTotal2[19] = 3.50 * qtdGeral[19]
        verifica[19] = 1

        let divRevisao = document.createElement('div')
        divRevisao.setAttribute('class', 'telaRev')
        divRevisao.setAttribute('id', 'div20')
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
        div1.innerHTML = `Picolé ----- R$ 3,50`

        let div2 = document.createElement('div')
        botaomenos(div2, p2, 19)
        p2.appendChild(div2)
        div2.setAttribute('class', 'unidades')
        div2.setAttribute('id', 'unid20')
        div2.innerHTML = `${qtdGeral[19]}`
        botaomais(div2, p2, 19)

        let div3 = document.createElement('div')
        div3.setAttribute('id', 'sub20')
        p3.appendChild(div3)
        div3.innerHTML = `R$ ${valorTotal2[19]}`
        criaLixeira(divRevisao)
}

function criarSimples(){
        if(verifica[0] == 0){
                calc01()
        }
        else{
                let div01 = document.getElementById('div01')
                div01.style.display = 'block'
                let divUnid = document.getElementById('unid01')
                divUnid.innerHTML = `${qtdGeral[0]}`
                valorTotal2[0] = qtdGeral[0] * 7
                let sub01 = document.getElementById('sub01')
                sub01.innerHTML = `R$ ${valorTotal2[0]}`
        }
}
function criarPicanha(){
        if(verifica[1] == 0){
                calc02()
        }
        else{
                let div02 = document.getElementById('div02')
                div02.style.display = 'block'
                let divUnid = document.getElementById('unid02')
                divUnid.innerHTML = `${qtdGeral[1]}`
                valorTotal2[1] = qtdGeral[1] * 13
                let sub02 = document.getElementById('sub02')
                sub02.innerHTML = `R$ ${valorTotal2[1]}`
        }
}
function criarTudo(){
        if(verifica[2] == 0){
                calc03()
        }
        else{
                let div03 = document.getElementById('div03')
                div03.style.display = 'block'
                let divUnid = document.getElementById('unid03')
                divUnid.innerHTML = `${qtdGeral[2]}`
                valorTotal2[2] = qtdGeral[2] * 10
                let sub03 = document.getElementById('sub03')
                sub03.innerHTML = `R$ ${valorTotal2[2]}`
        }
}
function criarChicken(){
        if(verifica[3] == 0){
                calc04()
        }
        else{
                let div04 = document.getElementById('div04')
                div04.style.display = 'block'
                let divUnid = document.getElementById('unid04')
                divUnid.innerHTML = `${qtdGeral[3]}`
                valorTotal2[3] = qtdGeral[3] * 12
                let sub04 = document.getElementById('sub04')
                sub04.innerHTML = `R$ ${valorTotal2[3]}`
        }
}
function criarDuplo(){
        if(verifica[4] == 0){
                calc05()
        }
        else{
                let div05 = document.getElementById('div05')
                div05.style.display = 'block'
                let divUnid = document.getElementById('unid05')
                divUnid.innerHTML = `${qtdGeral[4]}`
                valorTotal2[4] = qtdGeral[4] * 17
                let sub05 = document.getElementById('sub05')
                sub05.innerHTML = `R$ ${valorTotal2[4]}`
        }
}
function criarChefe(){
        if(verifica[5] == 0){
                calc06()
        }
        else{
                let div06 = document.getElementById('div06')
                div06.style.display = 'block'
                let divUnid = document.getElementById('unid06')
                divUnid.innerHTML = `${qtdGeral[5]}`
                valorTotal2[5] = qtdGeral[5] * 19.50
                let sub06 = document.getElementById('sub06')
                sub06.innerHTML = `R$ ${valorTotal2[5]}`
        }
}
function criarQueijos(){
        if(verifica[6] == 0){
                calc07()
        }
        else{
                let div07 = document.getElementById('div07')
                div07.style.display = 'block'
                let divUnid = document.getElementById('unid07')
                divUnid.innerHTML = `${qtdGeral[6]}`
                valorTotal2[6] = qtdGeral[6] * 20
                let sub07 = document.getElementById('sub07')
                sub07.innerHTML = `R$ ${valorTotal2[6]}`
        }
}
function criarPaulista(){
        if(verifica[7] == 0){
                calc08()
        }
        else{
                let div08 = document.getElementById('div08')
                div08.style.display = 'block'
                let divUnid = document.getElementById('unid08')
                divUnid.innerHTML = `${qtdGeral[7]}`
                valorTotal2[7] = qtdGeral[7] * 19
                let sub08 = document.getElementById('sub08')
                sub08.innerHTML = `R$ ${valorTotal2[7]}`
        }
}
function criarRomana(){
        if(verifica[8] == 0){
                calc09()
        }
        else{
                let div09 = document.getElementById('div09')
                div09.style.display = 'block'
                let divUnid = document.getElementById('unid09')
                divUnid.innerHTML = `${qtdGeral[8]}`
                valorTotal2[8] = qtdGeral[8] * 19
                let sub09 = document.getElementById('sub09')
                sub09.innerHTML = `R$ ${valorTotal2[8]}`
        }
}
function criarCarne(){
        if(verifica[9] == 0){
                calc10()
        }
        else{
                let div10 = document.getElementById('div10')
                div10.style.display = 'block'
                let divUnid = document.getElementById('unid10')
                divUnid.innerHTML = `${qtdGeral[9]}`
                valorTotal2[9] = qtdGeral[9] * 20
                let sub10 = document.getElementById('sub10')
                sub10.innerHTML = `R$ ${valorTotal2[9]}`
        }
}
function criarCoca(){
        if(verifica[10] == 0){
                calc11()
        }
        else{
                let div11 = document.getElementById('div11')
                div11.style.display = 'block'
                let divUnid = document.getElementById('unid11')
                divUnid.innerHTML = `${qtdGeral[10]}`
                valorTotal2[10] = qtdGeral[10] * 2.50
                let sub11 = document.getElementById('sub11')
                sub11.innerHTML = `R$ ${valorTotal2[10]}`
        }
}
function criarFanta(){
        if(verifica[11] == 0){
                calc12()
        }
        else{
                let div12 = document.getElementById('div12')
                div12.style.display = 'block'
                let divUnid = document.getElementById('unid12')
                divUnid.innerHTML = `${qtdGeral[11]}`
                valorTotal2[11] = qtdGeral[11] * 2.50
                let sub12 = document.getElementById('sub12')
                sub12.innerHTML = `R$ ${valorTotal2[11]}`
        }
}
function criarGuarana(){
        if(verifica[12] == 0){
                calc13()
        }
        else{
                let div13 = document.getElementById('div13')
                div13.style.display = 'block'
                let divUnid = document.getElementById('unid13')
                divUnid.innerHTML = `${qtdGeral[12]}`
                valorTotal2[12] = qtdGeral[12] * 2.50
                let sub13 = document.getElementById('sub13')
                sub13.innerHTML = `R$ ${valorTotal2[12]}`
        }
}
function criarSuco(){
        if(verifica[13] == 0){
                calc14()
        }
        else{
                let div14 = document.getElementById('div14')
                div14.style.display = 'block'
                let divUnid = document.getElementById('unid14')
                divUnid.innerHTML = `${qtdGeral[13]}`
                valorTotal2[13] = qtdGeral[13] * 1.50
                let sub14 = document.getElementById('sub14')
                sub14.innerHTML = `R$ ${valorTotal2[13]}`
        }
}
function criarAgua(){
        if(verifica[14] == 0){
                calc15()
        }
        else{
                let div15 = document.getElementById('div15')
                div15.style.display = 'block'
                let divUnid = document.getElementById('unid15')
                divUnid.innerHTML = `${qtdGeral[14]}`
                valorTotal2[14] = qtdGeral[14] * 1
                let sub15 = document.getElementById('sub15')
                sub15.innerHTML = `R$ ${valorTotal2[14]}`
        }
}
function criarChoco(){
        if(verifica[15] == 0){
                calc16()
        }
        else{
                let div16 = document.getElementById('div16')
                div16.style.display = 'block'
                let divUnid = document.getElementById('unid16')
                divUnid.innerHTML = `${qtdGeral[15]}`
                valorTotal2[15] = qtdGeral[15] * 10
                let sub16 = document.getElementById('sub16')
                sub16.innerHTML = `R$ ${valorTotal2[15]}`
        }
}
function criarMilk(){
        if(verifica[16] == 0){
                calc17()
        }
        else{
                let div17 = document.getElementById('div17')
                div17.style.display = 'block'
                let divUnid = document.getElementById('unid17')
                divUnid.innerHTML = `${qtdGeral[16]}`
                valorTotal2[16] = qtdGeral[16] * 9
                let sub17 = document.getElementById('sub17')
                sub17.innerHTML = `R$ ${valorTotal2[16]}`
        }
}
function criarAcai(){
        if(verifica[17] == 0){
                calc18()
        }
        else{
                let div18 = document.getElementById('div18')
                div18.style.display = 'block'
                let divUnid = document.getElementById('unid18')
                divUnid.innerHTML = `${qtdGeral[17]}`
                valorTotal2[17] = qtdGeral[17] * 14.50
                let sub18 = document.getElementById('sub18')
                sub18.innerHTML = `R$ ${valorTotal2[17]}`
        }
}
function criarMorango(){
        if(verifica[18] == 0){
                calc19()
        }
        else{
                let div19 = document.getElementById('div19')
                div19.style.display = 'block'
                let divUnid = document.getElementById('unid19')
                divUnid.innerHTML = `${qtdGeral[18]}`
                valorTotal2[18] = qtdGeral[18] * 10
                let sub19 = document.getElementById('sub19')
                sub19.innerHTML = `R$ ${valorTotal2[18]}`
        }
}
function criarPicole(){
        if(verifica[19] == 0){
                calc20()
        }
        else{
                let div20 = document.getElementById('div20')
                div20.style.display = 'block'
                let divUnid = document.getElementById('unid20')
                divUnid.innerHTML = `${qtdGeral[19]}`
                valorTotal2[19] = qtdGeral[19] * 3.50
                let sub20 = document.getElementById('sub20')
                sub20.innerHTML = `R$ ${valorTotal2[19]}`
        }
}

var contadorRev = 0
function secRevisao(){
        var valorTotal = 0
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
                        else{
                                if(i == 0){
                                        if(verifica[0] == 1){
                                                let div01 = document.getElementById('div01')
                                                div01.style.display = 'none'
                                        }
                                }
                                else if(i == 1){
                                        if(verifica[1] == 1){
                                                let div01 = document.getElementById('div01')
                                                div01.style.display = 'none'
                                        }
                                }
                                else if(i == 2){
                                        if(verifica[2] == 1){
                                                let div03 = document.getElementById('div03')
                                                div03.style.display = 'none'
                                        }
                                }
                                else if(i == 3){
                                        if(verifica[3] == 1){
                                                let div04 = document.getElementById('div04')
                                                div04.style.display = 'none'
                                        }
                                }
                                else if(i == 4){
                                        if(verifica[4] == 1){
                                                let div05 = document.getElementById('div05')
                                                div05.style.display = 'none'
                                        }
                                }
                                else if(i == 5){
                                        if(verifica[5] == 1){
                                                let div06 = document.getElementById('div06')
                                                div06.style.display = 'none'
                                        }
                                }
                                else if(i == 6){
                                        if(verifica[6] == 1){
                                                let div07 = document.getElementById('div07')
                                                div07.style.display = 'none'
                                        }
                                }
                                else if(i == 7){
                                        if(verifica[7] == 1){
                                                let div08 = document.getElementById('div08')
                                                div08.style.display = 'none'
                                        }
                                }
                                else if(i == 8){
                                        if(verifica[8] == 1){
                                                let div09 = document.getElementById('div09')
                                                div09.style.display = 'none'
                                        }
                                }
                                else if(i == 9){
                                        if(verifica[9] == 1){
                                                let div10 = document.getElementById('div10')
                                                div10.style.display = 'none'
                                        }
                                }
                                else if(i == 10){
                                        if(verifica[10] == 1){
                                                let div11 = document.getElementById('div11')
                                                div11.style.display = 'none'
                                        }
                                }
                                else if(i == 11){
                                        if(verifica[11] == 1){
                                                let div12 = document.getElementById('div12')
                                                div12.style.display = 'none'
                                        }
                                }
                                else if(i == 12){
                                        if(verifica[12] == 1){
                                                let div13 = document.getElementById('div13')
                                                div13.style.display = 'none'
                                        }
                                }
                                else if(i == 13){
                                        if(verifica[13] == 1){
                                                let div14 = document.getElementById('div14')
                                                div14.style.display = 'none'
                                        }
                                }
                                else if(i == 14){
                                        if(verifica[14] == 1){
                                                let div15 = document.getElementById('div15')
                                                div15.style.display = 'none'
                                        }
                                }
                                else if(i == 15){
                                        if(verifica[15] == 1){
                                                let div16 = document.getElementById('div16')
                                                div16.style.display = 'none'
                                        }
                                }
                                else if(i == 16){
                                        if(verifica[16] == 1){
                                                let div17 = document.getElementById('div17')
                                                div17.style.display = 'none'
                                        }
                                }
                                else if(i == 17){
                                        if(verifica[17] == 1){
                                                let div18 = document.getElementById('div18')
                                                div18.style.display = 'none'
                                        }
                                }
                                else if(i == 18){
                                        if(verifica[18] == 1){
                                                let div19 = document.getElementById('div19')
                                                div19.style.display = 'none'
                                        }
                                }
                                else{
                                        if(verifica[19] == 1){
                                                let div20 = document.getElementById('div20')
                                                div20.style.display = 'none'
                                        }
                                }
                        }
                }
                if(contadorRev == 0){
                        let frase = document.createElement('p')
                        frase.setAttribute('id', 'frase1')
        
                        let numTotal = document.createElement('p')
                        numTotal.setAttribute('id', 'numTotal')

                        vTotal.appendChild(frase)
                        vTotal.appendChild(numTotal)
                        for(var i=0; i < qtdGeral.length; i++){
                                valorTotal += valorTotal2[i]
                        }
                        frase.innerHTML = 'Finalizar Pedido'
                        numTotal.innerHTML = `Total a pagar: R$ ${valorTotal}`
                        numTotal.style.color = 'white'
                }
                else{
                        let divTotal = document.getElementById('numTotal')
                        for(var i=0; i < qtdGeral.length; i++){
                                valorTotal += valorTotal2[i]
                        }
                        divTotal.innerHTML = `Total a pagar: R$ ${valorTotal}`
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
