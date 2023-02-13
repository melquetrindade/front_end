let imenu = window.document.getElementById('op')
let menu = window.document.getElementById('fundoMenu')
let icone2 = window.document.querySelector('p.icone')
let secHam = window.document.getElementById('hamburguer')
let secPizza = window.document.getElementById('pizza')
let secBebidas = window.document.getElementById('bebidas')
let secSorvetes = window.document.getElementById('sorvetes')
let compras = window.document.getElementById('compra')

let temp = window.document.getElementById('tempo')

compras.style.position = 'absolute'
compras.style.right = '0px'
compras.style.opacity ='1'
compras.style.display = 'none'

function dCompra(){
        compras.style.display = 'block'
        compras.style.marginTop = '-70px'
        compras.style.transitionDuration = '1.5s'
        setTimeout(function(){
                compras.style.display = 'none' 
        }, 1200);
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
// ------- SESSÃO DE BEBIDAS --------
var qtdCoca = 0
var qtdFanta = 0
var qtdGuarana = 0
var qtdSuco = 0
var qtdAgua = 0
// ------- SESSÃO DE SOBREMESA --------
var qtdChoco = 0
var qtdMilk = 0
var qtdAcai = 0
var qtdMorango = 0
var qtdPicole = 0


// FUNÇÕES QUE ADICIONAM A QUANTIADE DOS PRODUTOS

// ------- SESSÃO DE HAMBÚRGUERES --------
function simples(){
        qtdSimples += 1
        unidSimples.style.display = 'block'
        unidSimples.innerHTML = `${qtdSimples}`
        setTimeout(function(){
                compras.style.display = 'block'
                compras.style.marginTop = '100px'

        }, 0);
        setTimeout(function(){
                compras.style.marginTop = '-40px'
                compras.style.transitionDuration = '0.8s'
        }, 1000);
        setTimeout(function(){
                compras.style.display = 'none' 
        }, 2000);
        
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
        setTimeout(function(){
                compras.style.display = 'block'
                compras.style.marginTop = '970px'

        }, 0);
        setTimeout(function(){
                compras.style.marginTop = '-50px'
                compras.style.transitionDuration = '1.5s'
        }, 1000);
        setTimeout(function(){
                compras.style.display = 'none' 
        }, 2000);
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
// ------- SESSÃO DE BEBIDAS --------
function coca(){
        qtdCoca += 1
        unidCoca.style.display = 'block'
        unidCoca.innerHTML = `${qtdCoca}`
}

function fanta(){
        qtdFanta += 1
        unidFanta.style.display = 'block'
        unidFanta.innerHTML = `${qtdFanta}`
}

function guarana(){
        qtdGuarana += 1
        unidGuarana.style.display = 'block'
        unidGuarana.innerHTML = `${qtdGuarana}`
}

function suco(){
        qtdSuco += 1
        unidSuco.style.display = 'block'
        unidSuco.innerHTML = `${qtdSuco}`
}

function agua(){
        qtdAgua += 1
        unidAgua.style.display = 'block'
        unidAgua.innerHTML = `${qtdAgua}`
}
// ------- SESSÃO DE SOBREMESA --------
function choco(){
        qtdChoco += 1
        unidChoco.style.display = 'block'
        unidChoco.innerHTML = `${qtdChoco}`
}

function milk(){
        qtdMilk += 1
        unidMilk.style.display = 'block'
        unidMilk.innerHTML = `${qtdMilk}`
}

function acai(){
        qtdAcai += 1
        unidAcai.style.display = 'block'
        unidAcai.innerHTML = `${qtdAcai}`
}

function morango(){
        qtdMorango += 1
        unidMorango.style.display = 'block'
        unidMorango.innerHTML = `${qtdMorango}`
}

function picole(){
        qtdPicole += 1
        unidPicole.style.display = 'block'
        unidPicole.innerHTML = `${qtdPicole}`
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
