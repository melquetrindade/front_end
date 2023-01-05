//Para a div Download
var a = window.document.getElementById('area')
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', sair)
function entrar(){
    a.style.background = 'green'
}
function sair(){
    a.style.background = 'dodgerblue'
}

//Para a div home
let home = window.document.querySelector('div#area2')
home.addEventListener('mouseenter', entrarHome)
home.addEventListener('mouseout', sairHome)
function entrarHome(){
    home.style.background = 'rgb(201, 201, 201)'
}
function sairHome(){
    home.style.background = 'white'
}