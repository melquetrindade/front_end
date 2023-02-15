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
let divMain2 = window.document.getElementById('cabecaRev')



mainRevisao.style.display = 'none'
mainPrincipal.style.display = 'block'

compras.style.position = 'absolute'
compras.style.right = '0px'
compras.style.opacity ='1'
compras.style.display = 'none'

var valorTotal = 0

function calc01(){
        var total01 = 7 * qtdGeral[0]
        valorTotal += total01

        let p1 = document.createElement('p')
        p1.setAttribute('id', 'p1')
        divMain2.appendChild(p1)
        p1.innerHTML = 'LANCHE'

        let p2 = document.createElement('p')
        p2.setAttribute('id', 'p2')
        divMain2.appendChild(p2)
        p2.innerHTML = 'QTD'

        let p3 = document.createElement('p')
        p3.setAttribute('id', 'p3')
        divMain2.appendChild(p3)
        p3.innerHTML = 'SUBTOTAL'

        let div1 = document.createElement('div')
        p1.appendChild(div1)
        div1.innerHTML = `produto: simples`
        div1.style.backgroundColor = 'black'
        div1.style.color = 'white'

        let div2 = document.createElement('div')
        p2.appendChild(div2)
        div2.innerHTML = `qtd: ${qtdGeral[0]}`
        div2.style.backgroundColor = 'black'
        div2.style.color = 'white'

        let div3 = document.createElement('div')
        p3.appendChild(div3)
        div3.innerHTML = `subtotal: ${total01}`
        div3.style.backgroundColor = 'black'
        div3.style.color = 'white'
}

function calc02(){
        let div2 = document.createElement('div')
        divMain2.appendChild(div2)
        var total02 = 13 * qtdGeral[1]
        valorTotal += total02
        div2.innerHTML = `produto: x-picanha - qtd: ${qtdGeral[1]} - subtotal: ${total02}`
        div2.style.backgroundColor = 'black'
        div2.style.color = 'white'
}

function secRevisao(){
        if(numCompras.innerHTML != '0'){
                mainPrincipal.style.display = 'none'
                mainRevisao.style.display = 'block'

                for(var i=0; i < qtdGeral.length; i++){
                        if(qtdGeral[i] > 0){
                                if(i == 0){
                                        calc01()
                                }
                                else if(i == 1){
                                        calc02()
                                }
                        }
                        else{
                                continue
                        }
                }
                let numTotal = document.createElement('p')
                divMain2.appendChild(numTotal)
                numTotal.innerHTML = `Total a pagar: ${valorTotal}`
                numTotal.style.backgroundColor = 'black'
                numTotal.style.color = 'white'
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

var totalCarro = 0

// FUNÇÕES QUE ADICIONAM A QUANTIADE DOS PRODUTOS COMPRADOS

// ------- SESSÃO DE HAMBÚRGUERES --------
function simples(aviso){
        qtdGeral[0] += 1
        unidSimples.style.display = 'inline'
        unidSimples.innerHTML = `${qtdGeral[0]}`
        if(qtdGeral[0] == 1){
                compras.innerHTML = `<span class="material-symbols-outlined"> add_task </span> ${qtdGeral[0]} Simples adicionado aos pedidos!`
                totalCarro += 1
        }
        else{
                compras.innerHTML =  '<span class="material-symbols-outlined"> add_task </span> Outro(a) SIMPLES adicionado aos pedidos!'
        }
        aviso
        numCompras.innerHTML = `${totalCarro}`
        
}

function picanha(aviso){
        qtdGeral[1] += 1
        unidPicanha.style.display = 'block'
        unidPicanha.innerHTML = `${qtdGeral[1]}`
        if(qtdGeral[1] == 1){
                compras.innerHTML = `<span class="material-symbols-outlined"> add_task </span> ${qtdGeral[1]} X-Picanha adicionado aos pedidos!`
                totalCarro += 1
        }
        else{
                compras.innerHTML =  '<span class="material-symbols-outlined"> add_task </span> Outro(a) X-Picanha adicionado aos pedidos!'
        }
        aviso
        numCompras.innerHTML = `${totalCarro}`
        
}

function tudo(aviso){
        qtdGeral[2] += 1
        unidTudo.style.display = 'block'
        unidTudo.innerHTML = `${qtdGeral[2]}`
        if(qtdGeral[2] == 1){
                compras.innerHTML = `<span class="material-symbols-outlined"> add_task </span> ${qtdGeral[2]} X-Tudo adicionado aos pedidos!`
                totalCarro += 1
        }
        else{
                compras.innerHTML =  '<span class="material-symbols-outlined"> add_task </span> Outro(a) X-Tudo adicionado aos pedidos!'
        }
        aviso
        numCompras.innerHTML = `${totalCarro}`
}

function chicken(aviso){
        qtdGeral[3] += 1
        unidChicken.style.display = 'block'
        unidChicken.innerHTML = `${qtdGeral[3]}`
        if(qtdGeral[3] == 1){
                compras.innerHTML = `<span class="material-symbols-outlined"> add_task </span> ${qtdGeral[3]} Chicken adicionado aos pedidos!`
                totalCarro += 1
        }
        else{
                compras.innerHTML =  '<span class="material-symbols-outlined"> add_task </span> Outro(a) Chicken adicionado aos pedidos!'
        }
        aviso
        numCompras.innerHTML = `${totalCarro}`
}

function duplo(aviso){
        qtdGeral[4] += 1
        unidDuplo.style.display = 'block'
        unidDuplo.innerHTML = `${qtdGeral[4]}`
        if(qtdGeral[4] == 1){
                compras.innerHTML = `<span class="material-symbols-outlined"> add_task </span> ${qtdGeral[4]} Duplo X-Tudo de Picanha adicionado aos pedidos!`
                totalCarro += 1
        }
        else{
                compras.innerHTML =  '<span class="material-symbols-outlined"> add_task </span> Outro(a) Duplo X-Tudo de Picanha adicionado aos pedidos!'
        }
        aviso
        numCompras.innerHTML = `${totalCarro}`
}
// ------- SESSÃO DE PIZZA --------
function chefe(aviso){
        qtdGeral[5] += 1
        unidChefe.style.display = 'block'
        unidChefe.innerHTML = `${qtdGeral[5]}`
        if(qtdGeral[5] == 1){
                compras.innerHTML = `<span class="material-symbols-outlined"> add_task </span> ${qtdGeral[5]} Chefe adicionado aos pedidos!`
                totalCarro += 1
        }
        else{
                compras.innerHTML =  '<span class="material-symbols-outlined"> add_task </span> Outro(a) Chefe adicionado aos pedidos!'
        }
        aviso
        numCompras.innerHTML = `${totalCarro}`
}

function queijos(aviso){
        qtdGeral[6] += 1
        unidQueijos.style.display = 'block'
        unidQueijos.innerHTML = `${qtdGeral[6]}`
        if(qtdGeral[6] == 1){
                compras.innerHTML = `<span class="material-symbols-outlined"> add_task </span> ${qtdGeral[6]} 4-Queijos adicionado aos pedidos!`
                totalCarro += 1
        }
        else{
                compras.innerHTML =  '<span class="material-symbols-outlined"> add_task </span> Outro(a) 4-Queijos adicionado aos pedidos!'
        }
        aviso
        numCompras.innerHTML = `${totalCarro}`
}

function paulista(aviso){
        qtdGeral[7] += 1
        unidPaulista.style.display = 'block'
        unidPaulista.innerHTML = `${qtdGeral[7]}`
        if(qtdGeral[7] == 1){
                compras.innerHTML = `<span class="material-symbols-outlined"> add_task </span> ${qtdGeral[7]} Paulista adicionado aos pedidos!`
                totalCarro += 1
        }
        else{
                compras.innerHTML =  '<span class="material-symbols-outlined"> add_task </span> Outro(a) Paulista adicionado aos pedidos!'
        }
        aviso
        numCompras.innerHTML = `${totalCarro}`
}

function romana(aviso){
        qtdGeral[8] += 1
        unidRomana.style.display = 'block'
        unidRomana.innerHTML = `${qtdGeral[8]}`
        if(qtdGeral[8] == 1){
                compras.innerHTML = `<span class="material-symbols-outlined"> add_task </span> ${qtdGeral[8]} Romana adicionado aos pedidos!`
                totalCarro += 1
        }
        else{
                compras.innerHTML =  '<span class="material-symbols-outlined"> add_task </span> Outro(a) Romana adicionado aos pedidos!'
        }
        aviso
        numCompras.innerHTML = `${totalCarro}`
}

function carne(aviso){
        qtdGeral[9] += 1
        unidCarne.style.display = 'block'
        unidCarne.innerHTML = `${qtdGeral[9]}`
        if(qtdGeral[9] == 1){
                compras.innerHTML = `<span class="material-symbols-outlined"> add_task </span> ${qtdGeral[9]} Carne adicionado aos pedidos!`
                totalCarro += 1
        }
        else{
                compras.innerHTML =  '<span class="material-symbols-outlined"> add_task </span> Outro(a) Carne adicionado aos pedidos!'
        }
        aviso
        numCompras.innerHTML = `${totalCarro}`
}
// ------- SESSÃO DE BEBIDAS --------
function coca(aviso){
        qtdGeral[10] += 1
        unidCoca.style.display = 'block'
        unidCoca.innerHTML = `${qtdGeral[10]}`
        if(qtdGeral[10] == 1){
                compras.innerHTML = `<span class="material-symbols-outlined"> add_task </span> ${qtdGeral[10]} Coca-Cola adicionado aos pedidos!`
                totalCarro += 1
        }
        else{
                compras.innerHTML =  '<span class="material-symbols-outlined"> add_task </span> Outro(a) Coca-Cola adicionado aos pedidos!'
        }
        aviso
        numCompras.innerHTML = `${totalCarro}`
}

function fanta(aviso){
        qtdGeral[11] += 1
        unidFanta.style.display = 'block'
        unidFanta.innerHTML = `${qtdGeral[11]}`
        if(qtdGeral[11] == 1){
                compras.innerHTML = `<span class="material-symbols-outlined"> add_task </span> ${qtdGeral[11]} Fanta adicionado aos pedidos!`
                totalCarro += 1
        }
        else{
                compras.innerHTML =  '<span class="material-symbols-outlined"> add_task </span> Outro(a) Fanta adicionado aos pedidos!'
        }
        aviso
        numCompras.innerHTML = `${totalCarro}`
}

function guarana(aviso){
        qtdGeral[12] += 1
        unidGuarana.style.display = 'block'
        unidGuarana.innerHTML = `${qtdGeral[12]}`
        if(qtdGeral[12] == 1){
                compras.innerHTML = `<span class="material-symbols-outlined"> add_task </span> ${qtdGeral[12]} Guaraná adicionado aos pedidos!`
                totalCarro += 1
        }
        else{
                compras.innerHTML =  '<span class="material-symbols-outlined"> add_task </span> Outro(a) Guaraná adicionado aos pedidos!'
        }
        aviso
        numCompras.innerHTML = `${totalCarro}`
}

function suco(aviso){
        qtdGeral[13] += 1
        unidSuco.style.display = 'block'
        unidSuco.innerHTML = `${qtdGeral[13]}`
        if(qtdGeral[13] == 1){
                compras.innerHTML = `<span class="material-symbols-outlined"> add_task </span> ${qtdGeral[13]} Suco de Laranja adicionado aos pedidos!`
                totalCarro += 1
        }
        else{
                compras.innerHTML =  '<span class="material-symbols-outlined"> add_task </span> Outro(a) Suco de Laranja adicionado aos pedidos!'
        }
        aviso
        numCompras.innerHTML = `${totalCarro}`
}

function agua(aviso){
        qtdGeral[14] += 1
        unidAgua.style.display = 'block'
        unidAgua.innerHTML = `${qtdGeral[14]}`
        if(qtdGeral[14] == 1){
                compras.innerHTML = `<span class="material-symbols-outlined"> add_task </span> ${qtdGeral[14]} Água adicionado aos pedidos!`
                totalCarro += 1
        }
        else{
                compras.innerHTML =  '<span class="material-symbols-outlined"> add_task </span> Outro(a) Água adicionado aos pedidos!'
        }
        aviso
        numCompras.innerHTML = `${totalCarro}`
}
// ------- SESSÃO DE SOBREMESA --------
function choco(aviso){
        qtdGeral[15] += 1
        unidChoco.style.display = 'block'
        unidChoco.innerHTML = `${qtdGeral[15]}`
        if(qtdGeral[15] == 1){
                compras.innerHTML = `<span class="material-symbols-outlined"> add_task </span> ${qtdGeral[15]} Sorvete de Chocolate adicionado aos pedidos!`
                totalCarro += 1
        }
        else{
                compras.innerHTML =  '<span class="material-symbols-outlined"> add_task </span> Outro(a) Sorvete de Chocolate adicionado aos pedidos!'
        }
        aviso
        numCompras.innerHTML = `${totalCarro}`
}

function milk(aviso){
        qtdGeral[16] += 1
        unidMilk.style.display = 'block'
        unidMilk.innerHTML = `${qtdGeral[16]}`
        if(qtdGeral[16] == 1){
                compras.innerHTML = `<span class="material-symbols-outlined"> add_task </span> ${qtdGeral[16]} MilkShake adicionado aos pedidos!`
                totalCarro += 1
        }
        else{
                compras.innerHTML =  '<span class="material-symbols-outlined"> add_task </span> Outro(a) MilkShake adicionado aos pedidos!'
        }
        aviso
        numCompras.innerHTML = `${totalCarro}`
}

function acai(aviso){
        qtdGeral[17] += 1
        unidAcai.style.display = 'block'
        unidAcai.innerHTML = `${qtdGeral[17]}`
        if(qtdGeral[17] == 1){
                compras.innerHTML = `<span class="material-symbols-outlined"> add_task </span> ${qtdGeral[17]} Açaí adicionado aos pedidos!`
                totalCarro += 1
        }
        else{
                compras.innerHTML =  '<span class="material-symbols-outlined"> add_task </span> Outro(a) Açaí adicionado aos pedidos!'
        }
        aviso
        numCompras.innerHTML = `${totalCarro}`
}

function morango(aviso){
        qtdGeral[18] += 1
        unidMorango.style.display = 'block'
        unidMorango.innerHTML = `${qtdGeral[18]}`
        if(qtdGeral[18] == 1){
                compras.innerHTML = `<span class="material-symbols-outlined"> add_task </span> ${qtdGeral[18]} Sorvete de Morango adicionado aos pedidos!`
                totalCarro += 1
        }
        else{
                compras.innerHTML =  '<span class="material-symbols-outlined"> add_task </span> Outro(a) Sorvete de Morango adicionado aos pedidos!'
        }
        aviso
        numCompras.innerHTML = `${totalCarro}`
}

function picole(aviso){
        qtdGeral[19] += 1
        unidPicole.style.display = 'block'
        unidPicole.innerHTML = `${qtdGeral[19]}`
        if(qtdGeral[19] == 1){
                compras.innerHTML = `<span class="material-symbols-outlined"> add_task </span> ${qtdGeral[19]} Picolé adicionado aos pedidos!`
                totalCarro += 1
        }
        else{
                compras.innerHTML =  '<span class="material-symbols-outlined"> add_task </span> Outro(a) Picolé adicionado aos pedidos!'
        }
        aviso
        numCompras.innerHTML = `${totalCarro}`
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
