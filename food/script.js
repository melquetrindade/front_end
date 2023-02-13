let imenu = window.document.getElementById('op')
let menu = window.document.getElementById('fundoMenu')
let icone2 = window.document.querySelector('p.icone')
let secHam = window.document.getElementById('hamburguer')
let secPizza = window.document.getElementById('pizza')
let secBebidas = window.document.getElementById('bebidas')
let secSorvetes = window.document.getElementById('sorvetes')

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


// VARIÁVEIS RELACIONADAS A QUANTIDADE COMPRADA DE CADA PRODUTO

// ------- SESSÃO DE HAMBÚRGUERES --------
var qtdSimples = 0
var qtdPicanha = 0
var qtdTudo = 0
var qtdChicken = 0
var qtdDuplo = 0
// ------- SESSÃO DE PIZZA --------
var qtdChefe = 0
var qtdQueijos = 0
var qtdPaulista = 0
var qtdRomana = 0
var qtdCarne = 0


// FUNÇÕES QUE ADICIONAM A QUANTIADE DOS PRODUTOS

// ------- SESSÃO DE HAMBÚRGUERES --------
function simples(){
        qtdSimples += 1
        unidSimples.style.display = 'block'
        unidSimples.innerHTML = `${qtdSimples}`
}

function picanha(){
        qtdPicanha += 1
        unidPicanha.style.display = 'block'
        unidPicanha.innerHTML = `${qtdPicanha}`
}

function tudo(){
        qtdTudo += 1
        unidTudo.style.display = 'block'
        unidTudo.innerHTML = `${qtdTudo}`
}

function chicken(){
        qtdChicken += 1
        unidChicken.style.display = 'block'
        unidChicken.innerHTML = `${qtdChicken}`
}

function duplo(){
        qtdDuplo += 1
        unidDuplo.style.display = 'block'
        unidDuplo.innerHTML = `${qtdDuplo}`
}
// ------- SESSÃO DE PIZZA --------
function chefe(){
        qtdChefe += 1
        unidChefe.style.display = 'block'
        unidChefe.innerHTML = `${qtdChefe}`
}

function queijos(){
        qtdQueijos += 1
        unidQueijos.style.display = 'block'
        unidQueijos.innerHTML = `${qtdQueijos}`
}

function paulista(){
        qtdPaulista += 1
        unidPaulista.style.display = 'block'
        unidPaulista.innerHTML = `${qtdPaulista}`
}

function romana(){
        qtdRomana += 1
        unidRomana.style.display = 'block'
        unidRomana.innerHTML = `${qtdRomana}`
}

function carne(){
        qtdCarne += 1
        unidCarne.style.display = 'block'
        unidCarne.innerHTML = `${qtdCarne}`
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
